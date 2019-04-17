import { ofType } from 'redux-observable';
import { Observable, from, of, concat } from 'rxjs';
import { catchError, map, mergeMap, delay } from 'rxjs/operators';
import axios from 'axios';
import routes from '../routes';

import * as actions from '../actions/constants';
import * as authActions from '../actions/auth';

export const signInEpic = action$ =>
  action$.pipe(
    ofType(actions.SIGN_IN_STARTED),
    mergeMap(action =>
      from(axios.post('https://reqres.in/api/login', action.payload))
        .pipe(
          mergeMap(response => [
            authActions.signInSuccess(response.data)
          ]),
          catchError(error => of(authActions.signInFailure(error.response)))
        )
    )
  );

export const signOutEpic = action$ =>
  action$.pipe(
    ofType(actions.SIGN_OUT_STARTED),
    delay(2500),
    mergeMap(action => [
      authActions.signOutSuccess({})
    ])
  );
