import React from 'react';

import * as S from './Loader.styles';

// https://codersblock.com/blog/creating-glow-effects-with-css/
export const Loader = ({
  message = 'Loading'
}) => {
  return (
    <S.Container>
        <S.Message>
          {message}
        </S.Message>
    </S.Container>
  )
}
