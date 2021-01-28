import styled from 'styled-components'
import { Colors } from '../../themes';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${Colors.backgroundGradient};
  display: flex;
  justify-content: center;
  align-items: center;

`;

export const Text = styled.div`
  font-size: 2em;
  color: ${Colors.green000}; 
  text-align: center;
`;
