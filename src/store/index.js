import { applyMiddleware, compose, createStore } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import rootReducer, { initialState } from 'reducers';
import rootEpic from 'epics';


const isDev = process.env.NODE_ENV !== 'production';

export default () => {
  const composeEnhancer = isDev
    && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;
  const epicMiddleware = createEpicMiddleware();
  const middlewares = [
    epicMiddleware,
  ];
  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancer(
      applyMiddleware(...middlewares),
    ),
  );

  if (isDev && module.hot) {
    module.hot.accept('../reducers', () => {
      /* eslint-disable global-require */
      const nextRootReducer = require('../reducers');
      /* eslint-enable global-require */
      store.replaceReducer(nextRootReducer);
    });
  }

  epicMiddleware.run(rootEpic);

  return store;
};
