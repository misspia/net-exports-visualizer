import React, { useMemo } from 'react';

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
  const { category, reporter } = state.filters;
  const items = useMemo(() => {
    if(state.isLoading.trades) {
      return [];
    }

    return [
      {
        key: 0,
        label: 'Reporting country',
        value: state.filters.reporter.name,
      },
      {
        key: 1,
        label: 'Category',
        value: state.filters.category.name,
      },
      {
        key: 5,
        label: `Net ${state.stats.netTradeValue >= 0 ? 'exports' : 'imports'}`,
        value: state.stats.netTradeValue, 
      },
      {
        key: 2,
        label: '# of trade partners',
        value: state.trades.length,
      },
      {
        key: 3,
        label: 'Exporting to',
        value: `${state.stats.numExportingPartners} countries`,
      },
      {
        key: 4,
        label: 'Importing from',
        value: `${state.stats.numImportingPartners} countries`,
      },
    ];

  });
  // }, [state.isLoading.trades]);

  return (
    <Card
      top={top}
      bottom={bottom}
    >
      <S.Title>
        Results: {category.name} trades for {reporter.name} in 2019
      </S.Title>
      {
        items.map((item) => (
          <S.Field key={item.key}>
            <S.FieldLabel>
              {item.label}
            </S.FieldLabel>
            <S.FieldValue>
              {item.value}
            </S.FieldValue>
          </S.Field>
        ))
      }
      {/* <Loader /> */}
    </Card>
  )
}
