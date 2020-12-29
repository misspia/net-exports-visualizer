import React from 'react';

import * as S from './Tag.styles';

const Tag = ({
  label = '',
  onClick = () => {},
}) => {
  return (
    <S.Container onClick={onClick}>
      {label}
    </S.Container>
  )
}

export default Tag;
