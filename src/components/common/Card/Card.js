import React from 'react';

import * as S from './Card.styles';

const Card = ({
  children,
  direction = 'column',
  align = 'flex-start',
  justify = 'flex-start',
  top = false,
  bottom = false,
}) => {
  return (
    <S.Container
      direction={direction}
      align={align}
      justify={justify}
      top={top}
      bottom={bottom}
    >
      {children}
    </S.Container>
  );
};

export default Card;
