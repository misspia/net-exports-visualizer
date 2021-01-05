import React from 'react';

import { useAppContext } from '../../hooks';

import * as S from './AppLoader.styles';

export const AppLoader = ({

}) => {
  const { state } = useAppContext();

  return (
    <S.Container>
      <S.Bar>
        <S.Progress />
      </S.Bar>
    </S.Container>
  )
}
