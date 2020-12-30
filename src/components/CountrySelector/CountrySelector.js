import React from 'react';

import { useAppContext } from '../../hooks';
import { ActionTypes } from '../../store';
import { Tag } from '../common';

import * as S from './CountrySelector.styles';

export const CountrySelector = ({

}) => {
  const { state, dispatch } = useAppContext();
  const countries = Object.keys(state.flights)
  .sort((a, b) => (
    state.flights[b].length - state.flights[a].length 
  ))
  .map((country) => ({
    key: country,
    label: `${country} (${state.flights[country].length})`,
  }));
  

  const onClick = (country) => {
    dispatch({
      type: ActionTypes.SET_COUNTRY_FILTER,
      payload: country,
    })
  }

  return (
    <S.Container>
      {countries.map((country) => (
        <S.TagContainer>
          <Tag
            key={country.key}
            label={country.label}
            onClick={() => onClick(country.key)}
            active={country.key === state.filters.country}
          />
        </S.TagContainer>
      ))}
    </S.Container>
  )
}
