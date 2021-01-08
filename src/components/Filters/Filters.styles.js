import styled from 'styled-components';
import { Colors, Styles } from '../../themes';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 1em;
  width: 250px;
  border-radius: ${Styles.borderRadius};
  background-color: ${Colors.white};
  box-shadow: ${Styles.shadow};

  box-sizing: border-box; 
`;

export const Field = styled.div`
  padding: 0.5em 0;
  width: 100%;

  display: flex;
  flex-direction: column;

`;

export const FieldLabel = styled.div`
  margin-bottom: 0.5em;
`;

export const ButtonContainer = styled.div`
  margin-top: 1em;
`;
