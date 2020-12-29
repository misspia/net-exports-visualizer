import styled from 'styled-components';
import { Colors } from '../../../themes';

export const Container = styled.div`
  border-radius: 0.2em;
  border: solid 2px ${Colors.white};
  padding: 0.1em 0.3em;

  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: ${Colors.white};
    color: ${Colors.black};
  }
`;
