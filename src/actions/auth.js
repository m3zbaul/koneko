import * as actions from './constants';


export const signInFailure = (payload) => ({ type: actions.SIGN_IN_FAILED, payload });
export const signInStart = (payload) => ({ type: actions.SIGN_IN_STARTED, payload });
export const signInSuccess = (payload) => ({ type: actions.SIGN_IN_SUCCEEDED, payload });
export const signOutFailure = () => ({ type: actions.SIGN_OUT_FAILED });
export const signOutStart = () => ({ type: actions.SIGN_OUT_STARTED });
export const signOutSuccess = () => ({ type: actions.SIGN_OUT_SUCCEEDED });
export const signUpFailure = (payload) => ({ type: actions.SIGN_UP_FAILED, payload });
export const signUpStart = (payload) => ({ type: actions.SIGN_UP_STARTED, payload });
export const signUpSuccess = (payload) => ({ type: actions.SIGN_UP_SUCCEEDED, payload });
