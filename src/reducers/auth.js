import {
  LOGIN_ATTEMPTED
} from '../actions/auth'

const INITIAL_STATE = {
  user: null
}

export default function auth(state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOGIN_ATTEMPTED:
      return {
        ...state,
        init: false,
        signIn: {
          attempted: false,
          error: null
        }
      }
    default:
      return state
  }
}
