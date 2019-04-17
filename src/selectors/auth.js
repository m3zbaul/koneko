import { createSelector } from 'reselect';

const selectAuth = state => state.auth;
const selectUser = state => state.auth.user;

const makeSelectToken = () => createSelector(
  selectUser,
  userState => userState.token,
);

const makeSelectAuthenticated = () => createSelector(
  selectUser,
  userState => userState.token,
);

const makeSelectSignIn = () => createSelector(
  selectAuth,
  authState => authState.signIn,
);

const makeSelectSignOut = () => createSelector(
  selectAuth,
  authState => authState.signOut,
);

export {
  selectAuth,
  selectUser,
  makeSelectAuthenticated,
  makeSelectToken,
  makeSelectSignIn,
  makeSelectSignOut
};
