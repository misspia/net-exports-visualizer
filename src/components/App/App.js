import React, { useEffect } from 'react';

import { Loader } from '../Loader';
import { Canvas } from '../Canvas';
import { Menu } from '../Menu';
import { Legend } from '../Legend';

import { useAppContext } from '../../hooks';
import * as API from '../../api';

import * as S from './App.styles';

export const App = ({

}) => {
  const { state, dispatch } = useAppContext();
  // useEffect(() => {
  //   API.updateTradeData(dispatch, { reporter: '626', category: '2205'});
  // }, []);

  return (
    <>
      <Loader
        message='Loading trades...'
        // active={state.isLoading.trades}
        active={true}
      />
      <S.Container>
        <S.MenuContainer>
          <Menu />
        </S.MenuContainer>
        <S.CanvasContainer>
          <Canvas />
        </S.CanvasContainer>
      </S.Container>
    </>
  )
}
