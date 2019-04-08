import { fromJS } from 'immutable';

import * as actions from '../actions/constants';


const initialState = {
  user: {
    authenticated: false,
    token: null
  },
  login: {
    started: false,
    error: null
  }
};

export default function auth(state = initialState, action) {
  switch (action.type) {
    case actions.LOGIN_STARTED:
    return {
      ...state,
      login: {
        started: true,
        error: null
      }
    };

    case actions.LOGIN_SUCCEEDED:
    return {
      user: action.payload,
      login: {
        started: false,
        error: null
      }
    };

    case actions.LOGIN_FAILED:
    return {
      ...state,
      login: {
        started: false,
        error: action.payload
      }
    };

    default:
      return state;
  }
}
