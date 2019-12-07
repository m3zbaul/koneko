import { combineReducers } from 'redux';
import appReducer, { initialState as appState } from './app';


export const initialState = {
  app: appState
};

export default combineReducers({
  app: appReducer
});
