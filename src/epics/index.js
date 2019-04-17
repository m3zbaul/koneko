/**
 * Combine all epics in this file and export the combined epics.
 */

import { combineEpics } from 'redux-observable';
import { signInEpic, signOutEpic } from './auth';


const rootEpic = combineEpics(
  signInEpic,
  signOutEpic
);

export default rootEpic;
