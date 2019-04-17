import { createBrowserHistory } from 'history';
import { applyMiddleware, compose, createStore } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import createRootReducer from '../reducers';
import rootEpic from '../epics';


const initialState = {
  auth: {
    user: {
      token: null
    },
    signIn: {
      started: false,
      error: null
    },
    signOut: {
      started: false,
      error: null
    }
  }
};
const persistConfig = {
  key: 'root',
  storage,
};
const history = createBrowserHistory();
const rootReducer = createRootReducer();
const persistedReducer = persistReducer(persistConfig, rootReducer);
const epicMiddleware = createEpicMiddleware();
const middlewares = [
  epicMiddleware
];

const enhancers = [
  applyMiddleware(...middlewares)
];

// If Redux DevTools Extension is installed use it, otherwise use Redux compose
/* eslint-disable no-underscore-dangle */
const composeEnhancers =
  process.env.NODE_ENV !== 'production' &&
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      shouldHotReload: false
    })
    : compose;
/* eslint-enable */

const store = createStore(
  persistedReducer,
  initialState,
  composeEnhancers(...enhancers)
);
const persistor = persistStore(store);

epicMiddleware.run(rootEpic);

global.store = store;

export { store, history, persistor };
