import React from 'react';

import { Filters } from '../Filters';
import { Legend } from '../Legend';
import { Results } from '../Results';
import { useAppContext } from '../../hooks';

import * as S from './Menu.styles';

export const Menu = ({

}) => {

  return (
    <S.Container>
      <S.Title>
        Net Exports Visualizer
      </S.Title>
      <Filters top/>
      <Legend top/>
      <Results top bottom />
    </S.Container>
  )
}
