import React from 'react';

import * as S from './Loader.styles';

// https://codersblock.com/blog/creating-glow-effects-with-css/
// https://dribbble.com/shots/11543579-Soft-Ai-Motion
export const Loader = ({
  message = 'Loading'
}) => {
  return (
    <S.Container>
        <S.Loader />
        <S.Message>
          {message}
        </S.Message>
    </S.Container>
  )
}
