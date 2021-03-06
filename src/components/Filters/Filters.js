import React, { useMemo, useState } from 'react';
import { Button, Card, Dropdown } from '../common';
import { useAppContext } from '../../hooks';
import * as API from '../../api';

import { TradeCategoryOptions, ReporterOptions } from '../../data/options';
import * as S from './Filters.styles';

export const Filters = ({
  top = false,
  bottom = false,
}) => {
  const { dispatch } = useAppContext();
  const defaultReporterIndex = useMemo(() => {
    return ReporterOptions.findIndex(reporter => reporter.label === 'United Kingdom');
  }, []);

  const [reporter, setReporter] = useState(ReporterOptions[defaultReporterIndex].value);
  const [category, setCategory] = useState(TradeCategoryOptions[0].value);

  const onReporterChange = (e) => (
    setReporter(e.target.value)
  )

  const onCategoryChange = (e) => (
    setCategory(e.target.value)
  )

  const onSubmit = () => {
    API.updateTradeData(dispatch, { reporter, category });
  }

  return (
    <Card
      top={top}
      bottom={bottom}
    >
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
    </Card>
  )
}
