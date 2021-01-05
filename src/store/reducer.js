import { ActionTypes } from './';

export default function appReducer(state, action) {
  switch(action.type) {
    case ActionTypes.UPDATE_ALL_FLIGHTS: {
      return {
        ...state,
        isLoading: {
          ...state.isLoading,
          flights: true,
        },
        errors: {
          ...state.errors,
          flights: null,
        }
      };
    }
    case ActionTypes.UPDATE_ALL_FLIGHTS_SUCCESS: {
      const flights = action.payload.flights.reduce((countries, flight) => {
        const { origin_country: country } = flight;
        if (!countries[country]) {
          countries[country] = [];
        }
        countries[country].push(flight);

        return countries;
      }, {});

      return {
        ...state,
        isLoading: {
          ...state.isLoading,
          flights: false,
        },
        lastRetreivalTime: action.payload.lastRetreivalTime,
        flights,
      };
    }
    case ActionTypes.UPDATE_ALL_FLIGHTS_FAILURE: {
      return {
        ...state,
        isLoading: {
          ...state.isLoading,
          flights: true,
        },
        errors: {
          ...state.errors,
          flights: 'Unable to retrieve flights',
        }
      };
    }
    case ActionTypes.SET_COUNTRY_FILTER: {
      const country = action.payload;
      const filteredFlights = state.flights[country];

      return {
        ...state,
        filteredFlights,
        filters: {
          ...state.filters,
          country,
        }
      }
    }
    case ActionTypes.GET_TRADE_DATA: {
      return {
        ...state,
        isLoading: {
          ...state.isLoading,
          trades: true,
        },
      }
    }
    case ActionTypes.GET_TRADE_DATA_SUCCESS: {
      return {
        ...state,
        isLoading: {
          ...state.isLoading,
          trades: false,
        },
        trades: action.payload,
      }
    }
    case ActionTypes.GET_TRADE_DATA_SUCCESS: {
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
