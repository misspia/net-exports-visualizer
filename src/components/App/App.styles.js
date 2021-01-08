import styled from 'styled-components';
import { Colors } from '../../themes';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  background: ${Colors.backgroundGradient};
`;

export const FiltersContainer = styled.div`
  position: fixed;
  top: 0.5em;
  left: 0.5em;
  z-index: 2;
`;

export const LegendContainer = styled.div`
  position: fixed;
  bottom: 0.5em;
  right: 0.5em;
  z-index: 2;
`;
