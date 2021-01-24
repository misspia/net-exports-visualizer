import React, { useMemo, useEffect, useRef } from 'react';

import { useAppContext } from '../../hooks';
import WebGLApplication from '../../webgl';

import * as S from './Canvas.styles';

export const Canvas = ({

}) => {
  const { state } = useAppContext();
  const webgl = useMemo(() => new WebGLApplication(), []);
  const containerElement = useRef(null);
  const canvasElement = useRef(null);


  useEffect(() => {
    webgl.setup(canvasElement.current);
    webgl.render();
    webgl.onLoadProgress((url, loaded, total) => {
      // console.debug('load', url, loaded, total)
    });

    const onResize = () => {
      const { clientWidth, clientHeight } = containerElement.current;
      webgl.resize(clientWidth, clientHeight);
    }

    onResize();

    window.addEventListener('resize', onResize);
    
    return () => window.removeEventListener('resize', onResize)
  }, []);

  useEffect(() => {
    webgl.setNewTrades(state.trades);
    // console.debug('[updated]', state.trades);
  }, [state.trades]);

  return (
    <S.Container ref={containerElement}>
      <S.Canvas ref={canvasElement}/>
    </S.Container>
  )
}
