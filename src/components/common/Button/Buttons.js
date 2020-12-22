import React from 'react';

import * as S from './Button.styles';

export default function Button({
  onClick = {},
  children = {},
}) {
  return (
    <S.Container onClick={onClick}>
      {children}
    </S.Container>
  )
}
