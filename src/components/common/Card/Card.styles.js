import styled from 'styled-components';

import { Colors, Styles } from '../../../themes';

export const Container = styled.div`
  width: 100%;
  display: flex;
  padding: 2em 1em;

  flex-direction: ${props => props.direction};
  justify-content: ${props => props.justify};
  align-items: ${props => props.align};

  border-radius: ${Styles.borderRadius};
  color: ${Colors.green100};
  /* background-color: ${Colors.black}; */
  border: solid 1px ${Colors.green100};
  border-right: none;
  border-left: none;
  border-top: ${props => props.top  ? 'solid' : 'none'};
  border-bottom: ${props => props.bottom  ? 'solid' : 'none'};
`;
