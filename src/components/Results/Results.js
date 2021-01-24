import React from 'react';

import { Card } from '../common';
import * as S from './Results.styles';

export const Results = ({
  top = false,
  bottom = false,
}) => {
  return (
    <Card
      top={top}
      bottom={bottom}
    >
      <S.Title>
        Results
      </S.Title>
      sdfdf
    </Card>
  )
}
