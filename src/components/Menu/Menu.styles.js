import styled from 'styled-components';
import { Colors, Styles, Fonts } from '../../themes';

/**
 * Scrollbar styling 
 * https://www.digitalocean.com/community/tutorials/css-scrollbars
 */
export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;


  padding: 1em 2rem;
  width: 100%;
  height: 100%;

  border-right: solid 1px ${Colors.green100};
  border-radius: ${Styles.borderRadius};
  box-shadow: ${Styles.shadow};

  box-sizing: border-box; 
  overflow-y: scroll;

  /* Chrome, Edge, and Safari */
  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-track {
    background: transparent; 
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${Colors.green100};    /* color of the scroll thumb */
    border-radius: 30px;       /* roundness of the scroll thumb */
    border: 3px solid ${Colors.black};  /* creates padding around scroll thumb */
  }

  /* Firefox */
  scrollbar-width: thin;
  scrollbar-color: ${Colors.green100} ${Colors.black};
`;

export const Title = styled.div`
  margin-bottom: 1em;
  font-size: ${Fonts.size.title};
  color: ${Colors.green100};
`;
