import ReactDOM from 'react-dom';
import React from 'react';
import App from './App'
import { createGlobalStyle } from 'styled-components';
import { Colors, Fonts } from './themes';

const GlobalStyle = createGlobalStyle`
  @import url('${Fonts.src}');
  body {
    margin: 0;
    font-family: ${Fonts.family};
    font-weight: ${Fonts.weightRegular};
    color: ${Colors.black};
    height: 100%;
    width: 100%;
  }
  #app {
    height: 100%;
    width: 100%;
  }
  html {
    height: 100vh;
    width: 100vw;
    overflow: hidden;
  }
`;

function AppEntry() {
  return (
    <>
      <GlobalStyle />
      <App />
    </>
  )
};

ReactDOM.render(<AppEntry />, document.getElementById('app'));
