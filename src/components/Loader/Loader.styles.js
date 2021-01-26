import styled from 'styled-components';
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

export const Bar = styled.div`

`;

export const Progress = styled.div`

`;

export const Message = styled.div`
  font-size: 2em;
  color: ${Colors.green000};
`;
