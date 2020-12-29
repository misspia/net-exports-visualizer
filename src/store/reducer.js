import { ActionTypes } from './';
export default function appReducer(state, action) {
  switch(action.type) {
    case ActionTypes.GET_ALL_FLIGHTS: {
      state.isLoading.flights = true;
      state.errors.flights = null;
      
      return state;
    }
    case ActionTypes.GET_ALL_FLIGHTS_SUCCESS: {
      state.isLoading.flights = false;
      state.errors.flights = 'Unable to retrieve flights';
      
      return state;
    }
    case ActionTypes.GET_ALL_FLIGHTS_FAILURE: {
      state.isLoading.flights = false;
      state.flights = action.payload.flights;
      state.lastRetreivalTime = action.payload.lastRetreivalTime;
      
      return state;
    }
    default: {
      return state;
    }
  }
}
