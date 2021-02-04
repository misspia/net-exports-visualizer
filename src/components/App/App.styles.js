import styled from 'styled-components';
import { Colors, Fonts } from '../../themes';

export const Container = styled.div`
  position: relative;
  display: flex;
  
  width: 100%;
  height: 100%;

  background: ${Colors.backgroundGradient};
`;

const MENU_WIDTH = '20em';

export const CanvasContainer = styled.div`
  flex: 1;
  height: 100%;
  width: calc(100% - ${MENU_WIDTH});
`;


export const MenuContainer = styled.div`
  /* position: absolute;
  top: 0em;
  left: 0em; */
  height: 100%;
  width: ${MENU_WIDTH};  
  z-index: 2
  ;
`;

export const LegendContainer = styled.div`
  position: fixed;
  bottom: 0.5em;
  right: 0.5em;
  z-index: 2;
`;

export const Info = styled.div`
  z-index: 2;
  position: absolute;
  top: 1em;
  left: 50%;
  font-size: ${Fonts.size.aside};
  color: ${Colors.green100};
`;
