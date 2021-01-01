import React, { useState } from 'react';

import { useAppContext } from '../../hooks';
import { ActionTypes } from '../../store';
import { Tag } from '../common';

import * as S from './CountrySelector.styles';

export const CountrySelector = ({

}) => {
  const { state, dispatch } = useAppContext();
  const [isShowAll, setIsShowAll] = useState(false);
  const onToggleButtonClick = () => {
    setIsShowAll(v => !v);
  }

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
      <S.TagsContainer
        isShowAll={isShowAll}
      >
        {countries.map((country) => (
          <S.TagContainer key={country.key}>
            <Tag
              label={country.label}
              onClick={() => onClick(country.key)}
              active={country.key === state.filters.country}
            />
          </S.TagContainer>
        ))}
      </S.TagsContainer>
      <S.Line />
      <S.ToggleButton
        onClick={onToggleButtonClick}
      >
        {
          isShowAll ?
          'Show Less' : 
          'Show More'
        }
      </S.ToggleButton>
    </S.Container>
  )
}
