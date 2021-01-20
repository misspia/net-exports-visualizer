import styled from 'styled-components';

import { Colors, Styles } from '../../../themes';

export const Container = styled.div`
  display: flex;
  padding: 0.5em 1em;

  flex-direction: ${props => props.direction};
  justify-content: ${props => props.justify};
  align-items: ${props => props.align};

  border-radius: ${Styles.borderRadius};
  color: ${Colors.green100};
  /* background-color: ${Colors.black}; */
  border: solid 2px ${Colors.green100};
`;
