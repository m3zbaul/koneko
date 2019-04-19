import * as actions from './constants';


export const fetchFailure = (payload) => ({ type: actions.REDDIT_FETCH_FAILED, payload });
export const fetchStart = (payload) => ({ type: actions.REDDIT_FETCH_STARTED, payload });
export const fetchSuccess = (payload) => ({ type: actions.REDDIT_FETCH_SUCCEEDED, payload });
