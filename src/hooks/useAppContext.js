import { useContext } from 'react';
import { store } from '../store';

export const useAppContext = () => {
  const context = useContext(store);

  if(!context) {
    throw new Error('unable to get App context');
  }

  return context;
}
