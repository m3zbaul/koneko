import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import {configureStore} from 'store';
import * as serviceWorker from 'serviceWorker';
import App from "App";
import "assets/scss/index.scss";


const {persistor, store} = configureStore();

const renderApp = Component => {
  ReactDOM.render(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Component/>
      </PersistGate>
    </Provider>,
    document.getElementById("root")
  );
};

renderApp(App);

if (module.hot) {
  module.hot.accept(App, () => renderApp(App));
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
