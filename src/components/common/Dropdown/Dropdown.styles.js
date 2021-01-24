import styled from 'styled-components';
import { Colors } from '../../../themes';

export const Select = styled.select`
  padding: 0.5em 1em;

  background-color: transparent;
  color: ${Colors.green100};
  border: solid 1px ${Colors.green200};
  
  border-radius: 0em;
`;

export const Option = styled.option`
  color: ${Colors.black};
  
`;
