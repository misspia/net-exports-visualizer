import styled from 'styled-components';
import { Colors, Styles } from '../../themes';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 1em;
  width: 90%;
  height: 10em;
  border-radius: 0.5em;
  background-color: ${Colors.white};
  box-shadow: ${Styles.shadow};

  box-sizing: border-box; 
`;

export const Row = styled.div`
  display: flex;
  margin-bottom: 3em;
`;

export const Field = styled.div`
  padding: 0.5em;

  display: flex;
  flex-direction: column;

`;

export const Title = styled.div`
  
`;
