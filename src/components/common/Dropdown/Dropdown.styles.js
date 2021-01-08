import styled from 'styled-components';
import { Colors } from '../../../themes';

export const Select = styled.select`
  padding: 0.5em 1em;

  background-color: ${Colors.white};
  color: ${Colors.black};
  border-color: ${Colors.black};
  
  border-radius: 1em;
`;

export const Option = styled.option`
  color: ${Colors.black};
  
`;
