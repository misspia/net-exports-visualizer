import React from 'react';

import { useAppContext } from '../../hooks';
import { Card } from '../common';
import * as S from './Results.styles';


const Loader = ({ 

}) => {
  return (
    <S.LoaderContainer>
        <S.Loader>
          Fetching results
        </S.Loader>
    </S.LoaderContainer>
  )
}
export const Results = ({
  top = false,
  bottom = false,
}) => {
  const { state } = useAppContext();

  return (
    <Card
      top={top}
      bottom={bottom}
    >
      <S.Title>
        Results
      </S.Title>
      <Loader />
    </Card>
  )
}
