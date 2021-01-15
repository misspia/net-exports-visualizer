import React, { useEffect } from 'react';

import { Loader } from '../Loader';
import { Canvas } from '../Canvas';
import { Filters } from '../Filters';
import { Legend } from '../Legend'; 

import { useAppContext } from '../../hooks';
import * as API from '../../api';

import * as S from './App.styles';

export const App = ({

}) => {
  const { state, dispatch } = useAppContext();
  useEffect(() => {
    API.updateTradeData(dispatch);
  }, []);

  return (
    <>
      {
        state.isLoading.trades &&
        <Loader message='Loading trades...'/>
      }
      <S.Container>
        <S.FiltersContainer>
          <Filters />
        </S.FiltersContainer>
        <S.LegendContainer>
          <Legend />
        </S.LegendContainer>
        <Canvas />
      </S.Container>
    </>
  )
}
