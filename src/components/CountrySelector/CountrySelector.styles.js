import styled from 'styled-components';
import { Colors } from '../../themes';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
`;
export const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  width: 100%;

  transition: all 0.5s;
  max-height: ${props => props.isShowAll ? 'auto' : '10em'};
  overflow-y: ${props => props.isShowAll ? 'auto' : 'hidden'};
`;

export const TagContainer = styled.div`
  margin: 0.1em 0.2em;
`;

export const Line = styled.div`
  border: solid 1px ${Colors.white};
  width: 90%;
`; 

export const ToggleButton = styled.div`
  color: ${Colors.white};
  text-align: center;
  padding: 0.2em 0.5em;
  cursor: pointer;
`;
