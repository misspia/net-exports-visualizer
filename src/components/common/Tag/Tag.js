import React from 'react';

import * as S from './Tag.styles';

const Tag = ({
  label = '',
  onClick = () => {},
  active = false,
}) => {
  return (
    <S.Container 
      onClick={onClick}
      active={active}
    >
      {label}
    </S.Container>
  )
}

export default Tag;
