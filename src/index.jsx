import React from 'react';
import ReactDOM from 'react-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux';
import * as serviceWorker from 'serviceWorker';
import App from './App';
import configureStore from './store';
import 'assets/scss/index.scss';


const store = configureStore();

const renderApp = (Component) => {
  ReactDOM.render(
    <HelmetProvider>
      <Provider store={store}>
        <Component />
      </Provider>
    </HelmetProvider>,
    document.getElementById('app-root'),
  );
};

renderApp(App);

if (module.hot) {
  module.hot.accept('./App', () => {
    /* eslint-disable global-require */
    const NextApp = require('./App').default;
    /* eslint-enable global-require */
    renderApp(NextApp);
  });
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
