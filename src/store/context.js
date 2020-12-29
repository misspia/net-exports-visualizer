import React, { createContext, useReducer } from 'react';
import appReducer from './reducer';
import initialState from './initialState';

export const store = createContext(initialState);

const { Provider } =  store;

export const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <Provider value={{ state, dispatch }}>
      {children}
    </Provider>
  )
}
