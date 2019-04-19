import * as actions from '../actions/constants';


const initialState = {
  posts: {
    started: false,
    error: null,
    result: null
  }
};

export default function reddit(state = initialState, action) {
  switch (action.type) {
    case actions.REDDIT_FETCH_STARTED:
    return {
      ...state,
      posts: {
        started: true,
        error: null,
        result: null
      }
    };

    case actions.REDDIT_FETCH_FAILED:
    return {
      ...state,
      posts: {
        started: false,
        error: action.payload,
        result: null
      }
    };

    case actions.REDDIT_FETCH_SUCCEEDED:
    return {
      ...state,
      posts: {
        error: null,
        started: false,
        result: action.payload.data.children
      }
    };

    default:
      return state;
  }
}
