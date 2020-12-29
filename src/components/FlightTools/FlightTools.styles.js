import styled, { keyframes } from 'styled-components';
import { Colors } from '../../themes';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  width: 100%;

  color: ${Colors.white};
`;

export const Title = styled.div`
  margin: 0.5em 0;
  display: flex;
  align-items: center;
  font-size: 1.2em;
  text-align: center;
`;

const blink = keyframes`
  0% {
    opacity: 0;
  }

  40% {
    opacity: 1;
  }
`;

export const Blinker = styled.div`
  margin-left: 0.25em;
  width: 0.5em;
  height: 1em;
  background-color: ${Colors.white};

  animation: ${blink} 1s linear 0.2s infinite; 
`;
