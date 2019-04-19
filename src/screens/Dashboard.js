import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PostList from '../components/Reddit/PostList';
import * as authActions from '../actions/auth';
import * as redditActions from '../actions/reddit';
import * as authSelectors from '../selectors/auth';
import * as redditSelectors from '../selectors/reddit';


class Dashboard extends Component {
  state = {
    subreddit: ''
  };

  onSignOutClick = (event) => {
    event.preventDefault();
    this.props.onSignOut({ });
  }

  handleFetchPosts = (subreddit) => {
    if (typeof(subreddit) !== 'string' || subreddit.length < 1) {
      subreddit = null;
    }
    this.props.onFetchPosts({ subreddit });
  }

  onSubredditChange = (event) => {
    this.setState({ subreddit: event.target.value });
  }

  componentDidMount() {
    this.handleFetchPosts(this.state.subreddit);
  }

  render() {
    const { signOut, posts } = this.props;
    const { subreddit } = this.state;

    return (
      <div>
        Dashboard
        { signOut.error !== null &&
          <p style={{ color: 'red' }}>{signOut.error}</p>
        }
        <p>
          <button onClick={this.onSignOutClick} disabled={signOut.started}>
            { signOut.started && <span>Signing out...</span> }
            { !signOut.started && <span>Click to sign out</span> }
          </button>
        </p>
        <p>
          <input
            type="text"
            placeholder="subreddit"
            value={subreddit}
            onChange={this.onSubredditChange}
          />
          <button
            onClick={(event) => this.handleFetchPosts(subreddit)}
          >
            Fetch
          </button>
        </p>
        { posts.started &&
          <p>Fetching posts...</p>
        }
        { posts.started === false && posts.error === null &&
          <PostList posts={posts.result}/>
        }
      </div>
    );
  }
}

const makeMapStateToProps = () => {
  const selectSignOut = authSelectors.makeSelectSignOut();
  // const selectResult = redditSelectors.makeSelectResult();
  const mapStateToProps = (state) => ({
    signOut: selectSignOut(state),
    posts: redditSelectors.selectPosts(state)
  });
  return mapStateToProps;
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchPosts: (payload) => {
      dispatch(redditActions.fetchStart(payload))
    },
    onSignOut: (payload) => {
      dispatch(authActions.signOutStart(payload))
    }
  };
};

export default withRouter(connect(makeMapStateToProps, mapDispatchToProps)(Dashboard));
