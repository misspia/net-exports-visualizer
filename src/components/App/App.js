import React, { useEffect } from 'react';

import { Canvas } from '../Canvas';
import { FlightTools } from '../FlightTools';
import * as API from '../../api';
import { useAppContext } from '../../hooks';

import * as S from './App.styles';

export const App = ({

}) => {
  const { state, dispatch } = useAppContext();

  useEffect(() => {
    API.updateAllFlights(dispatch);
  }, []);

  useEffect(() => {
    console.debug('[FLIGHTS]', state.flights);
  }, [state.flights]);

  return (
    <S.Container>
      <FlightTools />
      <Canvas />
    </S.Container>
  )
}
