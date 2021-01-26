import { ActionTypes } from './';

import { isoCoordinates, numericCodeCoordinates } from '../data/coordinates';
import reportingAreas from '../data/reportingAreas';
import { TradeCategoryOptions } from '../data/options';

const getReporterMeta = (id) => {
  const { longitude, latitude } =  numericCodeCoordinates[id];
  const reporter = reportingAreas.find((country) => country.id === id);
  return {
    id,
    longitude,
    latitude,
    name: reporter.text,
  }
}

const getCategoryMeta = (id) => {
  const category = TradeCategoryOptions.find(category => category.value === id);
  return {
    id,
    name: category.label,
  }
}

const mapTradeData = (data) => {
  const netTrades = data.reduce((trades, item) => {
    const { pt3ISO, rgDesc, TradeValue, TradeQuantity, NetWeight } = item;
    const isExport = rgDesc === "Export"; 
    const value =  isExport ? TradeValue : -TradeValue; 

    if(!trades[pt3ISO]) {
      trades[pt3ISO] = {
        importValue: 0,
        exportValue: 0,
        netValue: 0,
        quantity: 0,
        weight: 0,
      };
    }

    if(isExport) {
      trades[pt3ISO].exportValue = value;
    } else {
      trades[pt3ISO].importValue = value;
    }
    
    trades[pt3ISO].netValue += value;
    return trades;
  },  {});

  return data.reduce((trades, item) => {
    const isoReporter = isoCoordinates[item.rt3ISO];
    if(!isoReporter) {
      console.debug(`[reporter] Unable to match iso code ${item.rt3ISO} (${item.rtTitle})`)
      return trades;
    }
    
    const isoPartner = isoCoordinates[item.pt3ISO];
    if(!isoPartner) {
      console.debug(`[partner] Unable to match iso code ${item.pt3ISO} (${item.ptTitle})`);
      return trades;
    }
    

    const total = netTrades[item.pt3ISO];
    if(!total) {
      console.debug(`[total] Unable to match iso code ${item.pt3ISO} (${item.ptTitle})`);
      return trades;
    }

    const reporter = {
      name: item.rtTitle,
      longitude: isoReporter.longitude,
      latitude: isoReporter.latitude,
    };
    const partner = {
      name: item.ptTitle,
      longitude: isoPartner.longitude,
      latitude: isoPartner.latitude,
    };

    const exporter = total.netValue > 0 ? reporter : partner;
    const importer = total.netValue > 0 ? partner : reporter;

    trades.push({
      exporter,
      importer,
      netTradeValue: total.netValue,
      netExportValue: total.exportValue,
      netImportValue: total.importValue,
    });
    return trades;
  }, [])
}

const getStats = (trades) => {
  const numPartners = trades.length;
  let numExportingPartners = 0;
  let numImportingPartners = 0;
  let netExportValue = 0;
  let netImportValue = 0;
  let netTradeValue = 0;

  for(const trade of trades) {
    if(trade.netTradeValue < 0) {
      numImportingPartners++;
    }
    if(trade.netTradeValue >= 0) {
      numExportingPartners++;
    }

    netExportValue += trade.netExportValue;
    netImportValue += -trade.netImportValue;
    netTradeValue += trade.netTradeValue;
  }

  return {
    numPartners,
    numExportingPartners,
    numImportingPartners,
    netTradeValue,
    netExportValue,
    netImportValue,
  };
}

export default function appReducer(state, action) {
  switch (action.type) {
    case ActionTypes.SET_FILTERS: {
      const { payload } = action; 
      const reporter = getReporterMeta(payload.reporterId);
      const category = getCategoryMeta(payload.categoryId);

      return {
        ...state,
        filters: {
          ...state.filters,
          reporter,
          category,
        }
      }
    }
    case ActionTypes.UPDATE_TRADES: {
      return {
        ...state,
        isLoading: {
          ...state.isLoading,
          trades: true,
        },
      }
    }
    case ActionTypes.UPDATE_TRADES_SUCCESS: {
      const trades = mapTradeData(action.payload.trades);

      return {
        ...state,
        trades,
        isLoading: {
          ...state.isLoading,
          trades: false,
        },
        stats: {
          ...state.stats,
          ...getStats(trades),
        }
      }
    }
    case ActionTypes.UPDATE_TRADES_FAILURE: {
      return {
        ...state,
        isLoading: {
          ...state.isLoading,
          trades: false,
        },
        errors: {
          ...state.errors,
          trades: 'An error occured while trying to retrieve the trade data. Please try again',
        }

      }
    }
    default: {
      return state;
    }
  }
}
