import React, { useState } from 'react';
import { Button } from '../common';

import * as S from './Filters.styles';

const TradeCategories = [
  {
    key: '',
    label: 'Wine',
  },
  {
    key: '',
    label: '',
  },
  {
    key: '',
    label: '',
  },
  {
    key: '',
    label: '',
  },
  {
    key: '',
    label: '',
  },
  
]
export const Filters = ({

}) => {
  const [reporter, setReporter] = useState(null);
  const [category, setCategory] = useState(null);

  return (
    <S.Container>
      <S.Row>
        <S.Field>
          <S.Title>
            Select target country
          </S.Title>
        </S.Field>

        <S.Field>
          <S.Title>
            Pick your poison
          </S.Title>
        </S.Field>
      </S.Row>
      <Button>
        Visualize
      </Button>
    </S.Container>
  )
}
