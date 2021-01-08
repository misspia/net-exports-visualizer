import React, { useEffect } from 'react';

import { AppLoader } from '../AppLoader';
import { Canvas } from '../Canvas';
import { Filters } from '../Filters';
import { Legend } from '../Legend'; 

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
    if (state.isLoading.flights) {
      return;
    }

    dispatch({
      type: ActionTypes.SET_COUNTRY_FILTER,
      payload: 'Canada'
    })
  }, [state.isLoading.flights])

  return (
    <>
      <AppLoader />
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
