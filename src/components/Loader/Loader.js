import React from 'react';

import * as S from './Loader.styles';

export const Loader = ({
  message = 'Loading'
}) => {
  return (
    <S.Container>
      {message}
      {/* <S.Bar>
        <S.Progress />
      </S.Bar> */}
    </S.Container>
  )
}
