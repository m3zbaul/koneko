import { createSelector } from 'reselect';

const selectAuth = state => state.auth;
const selectUser = state => state.auth.user;

const makeSelectToken = () => createSelector(
  selectUser,
  userState => userState.token,
);

const makeSelectAuthenticated = () => createSelector(
  selectUser,
  userState => userState.authenticated,
);

const makeSelectSession = () => createSelector(
  selectAuth,
  authState => authState.token,
);

export {
  selectAuth,
  selectUser,
  makeSelectAuthenticated,
  makeSelectToken,
  makeSelectSession
};
