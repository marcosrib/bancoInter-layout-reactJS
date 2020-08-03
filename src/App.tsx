import React from 'react';

import { ThemeProvider } from 'styled-components';

import theme from './styles/theme';

import GlobalStyles from './styles/global';

import Header from './components/header';

import Gradient from './components/gradient';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Gradient />
     <GlobalStyles />
    </ThemeProvider>
  )
 
}

export default App;


