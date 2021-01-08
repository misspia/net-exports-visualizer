import styled from 'styled-components';
import { Colors, Styles } from '../../themes';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  padding: 0.5em 1em;
  border-radius: ${Styles.borderRadius};

  background-color: ${Colors.white};
  color: ${Colors.black};
  box-shadow: ${Styles.shadow};
`;

export const Title = styled.div`

`;

export const List = styled.ul`
  padding: 0;
  list-style-type: none;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  padding: 0.2em 0;

`;

export const Color = styled.div`
  margin-right: 0.5em;
  width: 1em;
  height: 0.5em;
  border-radius: 0%;

  background-color: ${props => props.color};
  border: solid 1px ${Colors.black};
`;

export const Label = styled.div`

`
