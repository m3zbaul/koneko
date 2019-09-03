import { applyMiddleware, compose, createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import rootReducer, {initialState} from 'reducers';


const isDev = process.env.NODE_ENV !== "production";
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"]
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
  const composeEnhancer =
    isDev
    && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;
  const middlewares = [];
  console.log(initialState);
  const store = createStore(
    persistedReducer,
    initialState,
    composeEnhancer(
      applyMiddleware(...middlewares)
    )
  );
  const persistor = persistStore(store);

  if (isDev && module.hot) {
    module.hot.accept("../reducers", () => {
      const nextRootReducer = require("../reducers");
      store.replaceReducer(
        persistReducer(persistConfig, nextRootReducer)
      );
    });
  }

  return {persistor, store};
};
