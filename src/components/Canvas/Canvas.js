import React, { useMemo, useEffect, useRef } from 'react';

import { useAppContext } from '../../hooks';
import WebGLApplication from '../../webgl';

import * as S from './Canvas.styles';

export const Canvas = ({

}) => {
  const { state } = useAppContext();
  const webgl = useMemo(() => new WebGLApplication(), []);
  const canvasElement = useRef(null);

  useEffect(() => {
    webgl.setup(canvasElement.current);
    webgl.render();
  }, []);

  useEffect(() => {
    if(Object.keys(state.flights).length > 0) {
      webgl.setNewFlights(state.flights.Canada);
    } 
  });

  return (
    <S.Canvas ref={canvasElement}/>
  )
}
