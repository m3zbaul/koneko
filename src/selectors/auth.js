import { createSelector, createStructuredSelector } from 'reselect';

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

const makeSelectSignUp = () => createSelector(
  selectAuth,
  authState => authState.signIn,
);

export {
  selectAuth,
  selectUser,
  makeSelectAuthenticated,
  makeSelectToken,
  makeSelectSignIn,
  makeSelectSignUp
};
