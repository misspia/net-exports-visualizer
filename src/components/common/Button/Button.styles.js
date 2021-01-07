import styled from 'styled-components';
import { Colors, Styles } from '../../../themes';

export const Container = styled.div`
  padding: 0 1em;
  display: flex;
  align-items: center;
  justify-content: center;

  height: 2.2em;
  border-radius: 2em;
  background-color: ${Colors.primary};
  color: ${Colors.white};

  box-shadow: ${Styles.primaryShadow};
  cursor: pointer;

  transition: 0.4s all;

  &:hover {
    box-shadow: ${Styles.primaryShadowActive};
  }
`;
