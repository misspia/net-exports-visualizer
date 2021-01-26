import React, { useMemo } from 'react';

import { formatUSD } from '../../utils';
import { useAppContext } from '../../hooks';
import { Card } from '../common';
import * as S from './Results.styles';


const Loader = ({

}) => {
  return (
    <S.LoaderContainer>
      <S.Loader>
        Calculating
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
    if (state.trades.length === 0) {
      return [
        {
          key: 0,
          label: 'No trades to display',
          value: '',
        }
      ];
    }
    if (state.isLoading.trades) {
      return [
        {
          key: 0,
          label: 'Processing results',
          value: '',
        }
      ];
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
        label: 'Net trade value',
        value: `${formatUSD(state.stats.netTradeValue)}`,
      },
      {
        key: 6,
        label: 'Net export value',
        value: `${formatUSD(state.stats.netExportValue)}`,
      },
      {
        key: 7,
        label: 'Net import value',
        value: `${formatUSD(state.stats.netImportValue)}`,
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
      direction='column'
      top={top}
      bottom={bottom}
    >
      <S.Title>
        Results
      </S.Title>
      {
        state.trades.length ?

          <S.Subtitle>
            {category.name} trades for {reporter.name} in 2019
        </S.Subtitle> :
          null
      }
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
