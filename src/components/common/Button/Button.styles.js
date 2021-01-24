import styled from 'styled-components';
import { Colors, Styles } from '../../../themes';

export const Container = styled.div`
  padding: 0 1em;
  display: flex;
  align-items: center;
  justify-content: center;

  height: 2.2em;
  border-radius: 0em;
  background-color: ${Colors.green000};
  color: ${Colors.green200};

  box-shadow: ${Styles.primaryShadow};
  cursor: pointer;

  transition: 0.4s all;

  &:hover {
    box-shadow: ${Styles.primaryShadowActive};
  }

  &::focus, &:active {
    opacity: 0.8;
  }
`;
