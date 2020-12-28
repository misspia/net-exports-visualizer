import React, { useEffect } from 'react';

import { Canvas } from '../Canvas';
import * as API from '../../api';

import * as S from './App.styles';

export const App = ({

}) => {

  useEffect(() => {
    API.getAllStates().then((res) => {
      console.debug('[RES]', res);
    })
  }, []);

  return (
    <S.Container>
      <Canvas />
    </S.Container>
  )
}
