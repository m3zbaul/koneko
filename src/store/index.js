import storage from 'redux-persist/lib/storage';
import { applyMiddleware, compose, createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import { createEpicMiddleware } from 'redux-observable';
import rootReducer, { initialState } from 'reducers';
import rootEpic from 'epics';


const isDev = process.env.NODE_ENV !== 'production';
const persistConfig = {
  key: 'react-boilerplate',
  storage,
  whitelist: [],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);


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
    persistedReducer,
    initialState,
    composeEnhancer(
      applyMiddleware(...middlewares),
    ),
  );
  const persistor = persistStore(store);

  if (isDev && module.hot) {
    module.hot.accept('../reducers', () => {
      /* eslint-disable global-require */
      const nextRootReducer = require('../reducers');
      /* eslint-enable global-require */
      store.replaceReducer(
        persistReducer(persistConfig, nextRootReducer),
      );
    });
  }

  epicMiddleware.run(rootEpic);

  return { store, persistor };
};
