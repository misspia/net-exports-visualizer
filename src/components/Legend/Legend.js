import React from 'react';

import { Colors } from '../../themes';
import { Card } from '../common';

import * as S from './Legend.styles';


const LegendItems = [
  {
    key: 'export',
    label: 'Target is net exporter',
    color: Colors.exports,
  },
  {
    key: 'import',
    label: 'Target is net importer',
    color: Colors.imports,
  },
];

export const Legend = ({
  top = false,
  bottom = false,
}) => {
  return (
    <Card
      top={top}
      bottom={bottom}
    >
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
    </Card>
  )
}
