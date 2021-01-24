import styled from 'styled-components';
import { Colors, Styles, Fonts } from '../../themes';

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
`;

export const Title = styled.div`
  margin-bottom: 1em;
  font-size: ${Fonts.size.title};
  color: ${Colors.green100};
`;
