import React, { useState } from 'react';
import { Button, Dropdown } from '../common';

import * as S from './Filters.styles';

const TradeCategoryOptions = [
  {
    key: '0',
    label: 'Wine',
    value: '0',
  },
  {
    key: '1',
    label: 'Whisky',
    value: '1',
  },
  {
    key: '2',
    label: 'Beer',
    value: '2',
  },
  {
    key: '3',
    label: 'Rum',
    value: '3',
  },
  {
    key: '4',
    label: 'Other Spirits',
    value: '4',
  },
]

const ReporterOptions = [

];
export const Filters = ({

}) => {
  const [reporter, setReporter] = useState('');
  const [category, setCategory] = useState(0);

  const onReporterChange = (e) => (
    setReporter(e.target.event)
  )

  const onCategoryChange = (e) => (
    setCategory(e.target.event)
  )

  const onSubmit = () => {

  }

  return (
    <S.Container>
      <S.Field>
        <S.FieldLabel>
          Target country
        </S.FieldLabel>
        <Dropdown 
          options={ReporterOptions}
          value={reporter}
          onChange={onReporterChange}
        />
      </S.Field>

      <S.Field>
        <S.FieldLabel>
          Pick your poison
        </S.FieldLabel>
        <Dropdown
          options={TradeCategoryOptions}
          value={category}
          onChange={onCategoryChange}
        />
      </S.Field>
      <S.ButtonContainer>
        <Button onClick={onSubmit}>
          Visualize
        </Button>
      </S.ButtonContainer>
    </S.Container>
  )
}
