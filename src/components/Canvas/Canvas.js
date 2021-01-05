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
    webgl.onLoadProgress((url, loaded, total) => {
      console.debug('load', url, loaded, total)
    });

    window.addEventListener('resize', () => webgl.resize()); 
  }, []);

  // useEffect(() => {
  //   if(!state.filters.country) {
  //     return;
  //   }
  //   webgl.setNewFlights(state.filteredFlights);
  // }, [state.filters.country]);

  return (
    <S.Canvas ref={canvasElement}/>
  )
}
