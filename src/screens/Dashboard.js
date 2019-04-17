import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as authActions from '../actions/auth';
import * as authSelectors from '../selectors/auth';


class Dashboard extends Component {
  onSignOutClick = (event) => {
    event.preventDefault();
    this.props.onSignOut({ });
  }

  render() {
    const { signOut } = this.props;

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
      </div>
    );
  }
}

const makeMapStateToProps = () => {
  const selectSignOut = authSelectors.makeSelectSignOut();
  const mapStateToProps = (state) => ({
    signOut: selectSignOut(state)
  });
  return mapStateToProps;
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSignOut: (payload) => {
      dispatch(authActions.signOutStart(payload))
    }
  };
};

export default withRouter(connect(makeMapStateToProps, mapDispatchToProps)(Dashboard));
