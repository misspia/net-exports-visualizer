import React, { useMemo, useEffect, useRef } from 'react';

import WebGLApplication from '../../webgl';

import * as S from './Canvas.styles';

export const Canvas = ({

}) => {
  const webgl = useMemo(() => new WebGLApplication(), []);
  const canvasElement = useRef(null);

  useEffect(() => {
    webgl.setup(canvasElement.current);
    webgl.render();
  }, []);

  return (
    <S.Canvas ref={canvasElement}/>
  )
}
