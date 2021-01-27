import styled, { keyframes } from 'styled-components';
import { Colors } from '../../themes';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  z-index: 999;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  background-color: rgba(0, 0, 0, 0.8);
`;

const loaderAnimation = keyframes`
  from {
    opacity: 1;
    transform: rotate(0deg);
  }

  to {
    opacity: 0.2;
    transform: rotate(360deg);
  }
`;

export const Loader = styled.div`
  margin-bottom: 3em;
  height: 10em;
  width: 10em;
  border-radius: 50%;
  box-shadow:
    inset 0 0 50px ${Colors.white},
    inset 20px 0 80px ${Colors.imports},
    inset -20px 0 80px ${Colors.exports},
    inset 20px 0 300px ${Colors.imports},
    inset -20px 0 300px ${Colors.exports},
    0 0 50px ${Colors.white},
    -10px 0 80px ${Colors.imports},
    10px 0 80px ${Colors.exports};
  animation: ${loaderAnimation} 3s alternate linear infinite;
`;

export const Message = styled.div`
  font-size: 2em;
  color: ${Colors.green000}; 
`;
