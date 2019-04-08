import { createSelector } from 'reselect';

const selectAuth = state => state.auth;

const makeSelectUser = () => createSelector(
  selectAuth,
  authState => authState.user,
);

const makeSelectAuthenticated = () => createSelector(
  selectAuth,
  authState => authState.authenticated,
);

const makeSelectSession = () => createSelector(
  selectAuth,
  authState => authState.token,
);

export {
  selectAuth,
  makeSelectUser,
  makeSelectAuthenticated,
  makeSelectSession
};
