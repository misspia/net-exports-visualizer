import { ActionTypes } from './store';
import mockdata from './data/mock.json';

const BASE_URL = 'https://opensky-network.org/api';

const stateVectorKeys = [
  'icao24',
  'callsign',
  'origin_country',
  'time_position',
  'last_contact',
  'longitude',
  'latitude',
  'baro_altitude',
  'on_ground',
  'velocity',
  'true_track',
  'vertical_rate',
  'sensors',
  'geo_altitude',
  'squawk',
  'spi',
  'position_source',
];

const mapState = (state) => (
  state.reduce((mappedState, value, index) => {
    const key = stateVectorKeys[index];
    mappedState[key] = value;
    return mappedState;
  }, {})
);

export const updateAllFlights = async (dispatch) => {
  dispatch({ type: ActionTypes.UPDATE_ALL_FLIGHTS });

  try {
    // const response = await fetch(`${BASE_URL}/states/all`);
    // const body = await response.json();
    const body = mockdata;

    dispatch({
      type: ActionTypes.UPDATE_ALL_FLIGHTS_SUCCESS,
      payload: {
        lastRetreivalTime: body.time,
        flights: body.states.map(state => (mapState(state))),
      },
    })

    return body;

  } catch (error) {
    dispatch({ type: ActionTypes.UPDATE_ALL_FLIGHTS_FAILURE });

    return error;
  }
} 

const defaultTradeConfigs = {
  reporter: 826,
  category: 2204
};

const getTradeUrl = (configs = defaultTradeConfigs) => (
  `https://comtrade.un.org/api/get?max=50000&type=C&freq=A&px=HS&ps=2013&r=${configs.reporter}&p=0&rg=all&cc=${configs.category}&fmt=json`
);

const mapTradeData = (data) => (
  data.map((item) => ({
    reporter: item.rtTitle,
    reporterISO: item.rt3ISO,
    partner: item.ptTitle,
    partnerISO: item.pt3ISO,
    tradeValue: item.TradeValue,
  }))
);

export const getTradeData = async (dispatch, configs = defaultTradeConfigs) => {
  dispatch({ type: ActionTypes.GET_TRADE_DATA });

  try {
    const url = getTradeUrl(configs);
    const response = await fetch(url);
    const body = await response.json();

    dispatch({
      type: ActionTypes.GET_TRADE_DATA_SUCCESS,
      payload: {
        trades: mapTradeData(body.dataset),
      }
    });
    return body;

  } catch (err) {
    dispatch({ type: ActionTypes.GET_TRADE_DATA_FAILURE });
    return err;
  }
}
