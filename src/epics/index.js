/**
 * Combine all epics in this file and export the combined epics.
 */

import { combineEpics } from 'redux-observable';
import { signInEpic, signOutEpic } from './auth';
import { fetchPosts } from './reddit';


const rootEpic = combineEpics(
  fetchPosts,
  signInEpic,
  signOutEpic
);

export default rootEpic;
