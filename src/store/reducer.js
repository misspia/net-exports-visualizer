import { ActionTypes } from './';

export default function appReducer(state, action) {
  switch(action.type) {
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
      return {
        ...state,
        isLoading: {
          ...state.isLoading,
          trades: false,
        },
        trades: action.payload,
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
