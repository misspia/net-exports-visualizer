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
