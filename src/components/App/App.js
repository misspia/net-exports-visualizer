import React, { useEffect } from 'react';

import { Loader } from '../Loader';
import { Canvas } from '../Canvas';
import { Menu } from '../Menu';
import { NoMobileOverlay } from '../NoMobileOverlay';

import { useAppContext, useMobileCheck } from '../../hooks';
import * as API from '../../api';

import * as S from './App.styles';

export const App = ({

}) => {
  const { state, dispatch } = useAppContext();
  // useEffect(() => {
  //   API.updateTradeData(dispatch, { reporter: '626', category: '2205'});
  // }, []);
  const isMobile = useMobileCheck();

  if(isMobile) {
    return (
      <NoMobileOverlay />
    )
  }
  return (
    <>
      <Loader
        active={state.isLoading.trades}
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
