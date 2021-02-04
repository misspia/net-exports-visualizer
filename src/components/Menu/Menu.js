import React from 'react';

import { Filters } from '../Filters';
import { Legend } from '../Legend';
import { Results } from '../Results';

import * as S from './Menu.styles';

export const Menu = ({

}) => {

  return (
    <S.Container>
      <S.Header>
        <S.Title>
          Net Exports Visualizer
        </S.Title>
        <S.Description>
          {`Data is taken from the `}
          <S.Anchor 
            href="https://comtrade.un.org/"
            target="_blank"
          >
            UN Comtrade Database
          </S.Anchor>
          {`, a repository of official international trade stats`}
        </S.Description>
      </S.Header>
      <Filters top/>
      <Legend top/>
      <Results top bottom />
    </S.Container>
  )
}
