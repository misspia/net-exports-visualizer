import styled, { keyframes } from 'styled-components'
import { Colors } from '../../themes';

// https://codersblock.com/blog/creating-glow-effects-with-css/

export const Title = styled.div`

`;

export const LoaderContainer = styled.div`
  width: 100%;
  height: 10em;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Field = styled.div`
  padding: 0.5em 0;
  display: flex;
  flex-direction: column;
`;

export const FieldLabel = styled.div`
  color: ${Colors.green000};
`;

export const FieldValue = styled.div`
  color: ${Colors.green150};
`;

const createGradient = (deg) => `
background: rgb(32,114,255);
background: linear-gradient(${deg}deg, rgba(32,114,255,1) 0%, rgba(248,46,254,1) 100%);
`;

const loadingAnimation = keyframes`
0% {
  top: 0;
  left: 0;
}

20% {
   top: 0;
   left: 100%;
}

 40% {
   top: 100%;
   left: 100%;
 }

60% {
  top: 100%;
  left: 0;
}

80% {
  top: 0;
  left: 0;
}

`;

export const Loader = styled.div`
  position: relative;
  padding-bottom: 1em 3em;
  
  &::before {
    content: '';
    position: absolute;
    width: 0.5em;
    height: 0.5em;
    transform: translate(-50%, -50%);
    background-color: red;
    transition: 0.3s all;
    
    animation: ${loadingAnimation} 5s linear infinite;

    animation-direction: alternate;
    animation-delay: 0;
    /* box-shadow: 
      -0.2em 0.5em 1em 0.3em ${Colors.imports},
      0.2em 0.5em 1em 0.3em ${Colors.exports}; */
  }
`;
