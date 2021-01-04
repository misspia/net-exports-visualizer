import React, { useEffect } from 'react';

import { Canvas } from '../Canvas';
import { FlightTools } from '../FlightTools';
import * as API from '../../api';
import { useAppContext } from '../../hooks';

import * as S from './App.styles';
import { ActionTypes } from '../../store';

export const App = ({

}) => {
  const { dispatch, state } = useAppContext();

  useEffect(() => {
    API.updateAllFlights(dispatch);
  }, []);

  useEffect(() => {
    if(state.isLoading.flights) {
      return;
    }

    dispatch({
      type: ActionTypes.SET_COUNTRY_FILTER,
      payload: 'Canada'
    })
  }, [state.isLoading.flights])

  return (
    <S.Container>
      <S.FlightToolsContainer>
        <FlightTools />
      </S.FlightToolsContainer>
      <Canvas />
    </S.Container>
  )
}
