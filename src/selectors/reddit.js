import { createSelector } from 'reselect';

const selectReddit = state => state.reddit;
const selectPosts = state => state.reddit.posts;

const makeSelectResult = () => createSelector(
  selectPosts,
  postState => postState.result,
);


export {
  makeSelectResult,
  selectPosts
};
