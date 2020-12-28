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

export const getAllStates = async () => {
  try {
    const response = await fetch(`${BASE_URL}/states/all`); 
    const body = await response.json();
    return {
      time: body.time,
      states: body.states.map(state => (mapState(state))),
    };

  } catch(error) {
    throw error;
  }
} 
