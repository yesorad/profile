import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import home from './pages/home';
import contact from './pages/contact';
import portfolio from './pages/portfolio';
import Layout from './layout/Layout';
import GlobalStyles from './styles/GlobalStyles';
import ProviderContainer from './containers/ProviderContainer';
import HeaderContainer from './containers/HeaderContainer';

function App() {
  const filterPathName = (path) => {
    return path.split('/')[1];
  };

  return (
    <ProviderContainer>
      <GlobalStyles />
      <Layout>
        <HeaderContainer />
        <Route
          render={({ location }) => {
            return (
              <TransitionGroup className="transition-group">
                <CSSTransition
                  timeout={{ enter: 300, exit: 300 }}
                  classNames="route"
                  key={filterPathName(location.pathname)}
                >
                  <Switch location={location}>
                    <Route path="/" component={home} exact />
                    <Route path="/portfolio" component={portfolio} />
                    <Route path="/contact" component={contact} />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            );
          }}
        ></Route>
      </Layout>
    </ProviderContainer>
  );
}

export default App;
