import styled, { css } from 'styled-components';
import { Colors } from '../../../themes';

const activeStyles = css`
  background-color: ${Colors.white};
  color: ${Colors.black};
`;

export const Container = styled.div`
  border-radius: 0.2em;
  border: solid 2px ${Colors.white};
  padding: 0.1em 0.3em;

  cursor: pointer;
  transition: all 0.2s;

  ${props => props.active ? activeStyles : ''}
  
  &:hover {
    ${activeStyles}
  }
`;
