import React from 'react';
import { Route } from 'react-router-dom';
import home from './pages/home';
import contact from './pages/contact';
import portfolio from './pages/portfolio';
import Layout from './layout/Layout';
import GlobalStyles from './styles/GlobalStyles';
import ProviderContainer from './containers/ProviderContainer';
import HeaderContainer from './containers/HeaderContainer';

function App() {
  return (
    <ProviderContainer>
      <GlobalStyles />
      <Layout>
        <HeaderContainer />
        <Route path="/" component={home} exact />
        <Route path="/portfolio" component={portfolio} />
        <Route path="/contact" component={contact} />
      </Layout>
    </ProviderContainer>
  );
}

export default App;
