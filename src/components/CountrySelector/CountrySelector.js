import React, { useMemo } from 'react';

import { useAppContext } from '../../hooks';
import { Tag } from '../common';

import * as S from './CountrySelector.styles';

export const CountrySelector = ({

}) => {
  const { state } = useAppContext();
  const countries = Object.keys(state.flights).map((country) => ({
    key: country,
    label: `${country} (${country.length})`,
  }))

  const onClick = (country) => {
    console.debug('[Selected]: ', country);
  }

  return (
    <S.Container>
      {countries.map((country) => (
        <S.TagContainer>
          <Tag
            key={country.key}
            label={country.label}
            onClick={onClick}
          />
        </S.TagContainer>
      ))}
    </S.Container>
  )
}
