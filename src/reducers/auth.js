import * as actions from '../actions/constants';


const initialState = {
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
};

export default function auth(state = initialState, action) {
  switch (action.type) {
    case actions.SIGN_IN_STARTED:
    return {
      ...state,
      signIn: {
        started: true,
        error: null
      }
    };

    case actions.SIGN_IN_SUCCEEDED:
    return {
      ...state,
      user: {
        ...state.user,
        ...action.payload
      },
      signIn: {
        started: false,
        error: null
      }
    };

    case actions.SIGN_IN_FAILED:
    return {
      ...state,
      signIn: {
        started: false,
        error: action.payload.error
      }
    };

    case actions.SIGN_OUT_STARTED:
    return {
      ...state,
      signOut: {
        started: true,
        error: null
      }
    };

    case actions.SIGN_OUT_SUCCEEDED:
    return {
      ...state,
      user: {
        ...state.user,
        token: null
      },
      signOut: {
        started: false,
        error: null
      }
    };

    case actions.SIGN_OUT_FAILED:
    return {
      ...state,
      signOut: {
        started: false,
        error: action.payload.error
      }
    };

    default:
      return state;
  }
}
