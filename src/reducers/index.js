import { combineReducers } from 'redux';
import authReducer, {initialState as authState} from './auth';


export const initialState = {
  auth: authState
};

export default combineReducers({
  auth: authReducer
});
