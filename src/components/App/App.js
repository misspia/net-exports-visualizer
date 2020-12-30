import React, { useEffect } from 'react';

import { Canvas } from '../Canvas';
import { FlightTools } from '../FlightTools';
import * as API from '../../api';
import { useAppContext } from '../../hooks';

import * as S from './App.styles';

export const App = ({

}) => {
  const { dispatch } = useAppContext();

  useEffect(() => {
    API.updateAllFlights(dispatch);
  }, []);

  return (
    <S.Container>
      <S.FlightToolsContainer>
        <FlightTools />
      </S.FlightToolsContainer>
      <Canvas />
    </S.Container>
  )
}
