import React from 'react';

import { useAppContext } from '../../hooks';
import { CountrySelector } from '../CountrySelector';

import * as S from './FlightTools.styles';

export const FlightTools = ({

}) => {
  const { state, dispatch } = useAppContext();
  return (
    <S.Container>
      <S.Title>
        Refine your search <S.Blinker></S.Blinker>
      </S.Title>
      <CountrySelector />
    </S.Container>
  )
}
