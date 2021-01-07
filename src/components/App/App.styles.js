import styled from 'styled-components';
import { Colors } from '../../themes';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  background: ${Colors.backgroundGradient};
`;

export const FiltersContainer = styled.div`
  position: fixed;
  top: 1em;
  left: 0;
  z-index: 2;
  width: 100%;

  display: flex;
  justify-content: center;
`;
