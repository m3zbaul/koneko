import { combineReducers } from 'redux';
import auth from './auth';
import reddit from './reddit';


export default () => combineReducers({
  auth,
  reddit
});
