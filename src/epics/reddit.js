import { ofType } from 'redux-observable';
import { Observable, from, of, concat } from 'rxjs';
import { catchError, map, mergeMap, delay } from 'rxjs/operators';
import axios from 'axios';
import routes from '../routes';

import * as actions from '../actions/constants';
import * as redditActions from '../actions/reddit';

export const fetchPosts = action$ =>
  action$.pipe(
    ofType(actions.REDDIT_FETCH_STARTED),
    mergeMap(action =>
      from(axios(`https://api.reddit.com/${action.payload.subreddit ? `r/${action.payload.subreddit}` : ''}`, {
        method: 'GET'
      }))
        .pipe(
          mergeMap(response => [
            redditActions.fetchSuccess(response.data)
          ]),
          catchError(error => of(redditActions.fetchFailure(error.response)))
        )
    )
  );
