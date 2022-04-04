import { useState, createContext } from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyles from '../../assets/styles/global';
import defaultThemes from '../../assets/styles/themes/default';
import { Container } from './styles';

import { ProductProvider } from '../../ProductsContext/index';

import Header from '../Header';
import Routes from '../../Routes';

function App() {
  return (
    <BrowserRouter>
      <ProductProvider>
        <ThemeProvider theme={defaultThemes}>
          <GlobalStyles />
          <Container>
            <Header />
            <Routes />
          </Container>
        </ThemeProvider>
      </ProductProvider>
    </BrowserRouter>
  );
}

export default App;
