import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import * as S from './Loader.styles';

// https://codersblock.com/blog/creating-glow-effects-with-css/
// https://dribbble.com/shots/11543579-Soft-Ai-Motion
export const Loader = ({
  active,
}) => { 
  const containerRef = useRef(null);
  
  useEffect(() => {
    if(active) {
      gsap.to(containerRef.current, {
        autoAlpha: 1,
        duration: 1,
      });
    } else {
      gsap.to(containerRef.current, {
        autoAlpha: 0,
        duration: 1,
      });
    } 
  }, [active]);
  const letters = [
    'L',
    'o',
    'a',
    'd',
    'i',
    'n',
    'g',
    '.',
    '.',
    '.',
  ]

  return (
    <S.Container ref={containerRef}>
        <S.Loader />
        <S.Message>
          {letters.map((letter, index) => (
            <S.Letter 
              key={`${letter}${index}`}
              delay={index * 0.4}
            >
              {letter}
            </S.Letter>
          ))}
        </S.Message>
    </S.Container>
  )
}
