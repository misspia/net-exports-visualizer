import React from 'react';

import * as S from './Legend.styles';

const LegendItems = [
  {
    key: 'export',
    label: 'export',
    color: 'red',
  },
  {
    key: 'import',
    label: 'import',
    color: 'blue',
  },
];

export const Legend = ({

}) => {
  return (
    <S.Container>
      <S.Title>
        Legend
      </S.Title>
      <S.List>
        {LegendItems.map((item => (
          <S.ListItem key={item.key}>
            <S.Color color={item.color}/>
            <S.Label>{item.label}</S.Label>
          </S.ListItem>
        )))}
      </S.List>
    </S.Container>
  )
}
