import React from 'react';

import * as S from './Card.styles';

const Card = ({
  children,
  direction = 'column',
  align = 'flex-start',
  justify = 'flex-start',
}) => {
  return (
    <S.Container
      direction={direction}
      align={align}
      justify={justify}
    >
      {children}
    </S.Container>
  );
};

export default Card;
