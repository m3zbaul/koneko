import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SignInForm from '../components/Auth/SignInForm';
import routes from '../routes';
import * as authActions from '../actions/auth';
import * as authSelectors from '../selectors/auth';


class SignIn extends Component {
  componentDidMount() {
    if (this.props.authenticated) {
      this.props.history.push(routes.INDEX);
    }
  }

  componentDidUpdate() {
    if (this.props.authenticated) {
      this.props.history.push(routes.INDEX);
    }
  }

  onSignInClick = (event) => {
    event.preventDefault();
    this.props.onSignIn({ username: 'example', password: 'example' });
  }

  render() {
    const { signIn } = this.props;

    return (
      <div>
        <SignInForm
          onSignInClick={this.onSignInClick}
          signIn={signIn}
        />
      </div>
    )
  }
}

const makeMapStateToProps = () => {
  const selectSignIn = authSelectors.makeSelectSignIn();
  const selectAuthenticated = authSelectors.makeSelectAuthenticated();
  const mapStateToProps = (state) => ({
    signIn: selectSignIn(state),
    authenticated: selectAuthenticated(state)
  });
  return mapStateToProps;
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSignIn: (payload) => {
      dispatch(authActions.signInStart(payload))
    }
  };
};

export default withRouter(connect(makeMapStateToProps, mapDispatchToProps)(SignIn));
