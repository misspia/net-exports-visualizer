import { ActionTypes } from './store';
import mockdata from './data/mock.json';

const defaultTradeConfigs = {
  reporter: 826,
  category: 2204
};

const getTradeUrl = (configs = defaultTradeConfigs) => (
  `https://comtrade.un.org/api/get?max=50000&type=C&freq=A&px=HS&ps=2019&r=${configs.reporter}&p=all&rg=all&cc=${configs.category}&fmt=json`
);

export const updateTradeData = async (dispatch, configs = defaultTradeConfigs) => {
  dispatch({ type: ActionTypes.UPDATE_TRADES });

  try {
    const url = getTradeUrl(configs);
    const response = await fetch(url);
    const body = await response.json();


    dispatch({
      type: ActionTypes.UPDATE_TRADES_SUCCESS,
      payload: {
        trades: body.dataset,
      }
    });
    return body;

  } catch (err) {
    dispatch({ type: ActionTypes.UPDATE_TRADES_FAILURE });
    return err;
  }
}
