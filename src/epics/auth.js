import { ofType } from 'redux-observable';
import { Observable, from } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import axios from 'axios';

import * as actions from '../actions/constants';

export const loginEpic = action$ =>
  action$.pipe(
    ofType(actions.LOGIN_STARTED),
    mergeMap(action =>
      from(axios.post('https://reqres.in/api/login', action.payload))
        .map(response => ({
          type: actions.LOGIN_SUCCEEDED,
          payload: response.data
        }))
      .catch(error => Observable.ofType(actions.LOGIN_FAILED))
    )
  );

export const onLoginSucceededEpic = action$ =>
  action$.pipe(
    ofType(actions.LOGIN_SUCCEEDED),
    map(() => ({
      type: actions.DUMMY
    }))
  );
