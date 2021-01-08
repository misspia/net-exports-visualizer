import React from 'react';

import * as S from './Button.styles';

const Button =({
  onClick = () => {},
  children = {},
}) => {
  return (
    <S.Container onClick={onClick}>
      {children}
    </S.Container>
  )
}

export default Button;
