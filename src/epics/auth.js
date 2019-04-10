import { ofType } from 'redux-observable';
import { Observable, from, of, concat } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import axios from 'axios';
import { history } from '../store';
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
    mergeMap(action => [
      history.push(routes.SIGN_IN),
      console.log(action, 'fuck')
    ])
  );
