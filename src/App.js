import React from 'react';
import { Route } from 'react-router-dom';
import home from './pages/home';
import { ThemeProvider } from 'styled-components';
import contact from './pages/contact';
import portfolio from './pages/portfolio';
import Layout from './layout/Layout';
// eslint-disable-next-line no-unused-vars
import { darkTheme, lightTheme } from './styles/theme';
import Header from './layout/Header';
import GlobalStyles from './styles/GlobalStyles';

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles />
      <Layout>
        <Header />
        <Route path="/" component={home} exact />
        <Route path="/portfolio" component={portfolio} />
        <Route path="/contact" component={contact} />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
