import * as actions from './constants';


export const signInFailure = (payload) => ({ type: actions.SIGN_IN_FAILED, payload });
export const signInStart = (payload) => ({ type: actions.SIGN_IN_STARTED, payload });
export const signInSuccess = (payload) => ({ type: actions.SIGN_IN_SUCCEEDED, payload });
export const signOutFailure = (payload) => ({ type: actions.SIGN_OUT_FAILED, payload });
export const signOutStart = (payload) => ({ type: actions.SIGN_OUT_STARTED, payload });
export const signOutSuccess = (payload) => ({ type: actions.SIGN_OUT_SUCCEEDED, payload });
