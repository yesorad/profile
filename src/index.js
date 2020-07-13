import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { HelmetProvider } from 'react-helmet-async';
import rootReducer from './modules';

const customHistory = createBrowserHistory();

const store = createStore(rootReducer, composeWithDevTools());

ReactDOM.render(
  <Router history={customHistory}>
    <Provider store={store}>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </Provider>
  </Router>,
  document.getElementById('root'),
);
