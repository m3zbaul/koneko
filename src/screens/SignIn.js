import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SignInForm from '../components/Auth/SignInForm';
import routes from '../routes';
import * as authActions from '../actions/auth';
import * as authSelectors from '../selectors/auth';


class SignIn extends Component {
  state = {
    handle: {
      value: ''
    },
    password: {
      value: ''
    }
  }

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

  onHandleChange = (event) => {
    let handle = { ...this.state.handle };
    handle.value = event.target.value;
    this.setState({ handle });
  }

  onSignInClick = (event) => {
    event.preventDefault();
    const handle = this.state.handle.value;
    const password = this.state.password.value;
    this.props.onSignIn({ username: handle, password });
  }

  onPasswordChange = (event) => {
    let password = { ...this.state.password }
    password.value = event.target.value
    this.setState({ password })
  }

  render() {
    const { signIn } = this.props;
    const { handle, password } = this.state;

    return (
      <div>
        <SignInForm
          handle={handle.value}
          password={password.value}
          onHandleChange={this.onHandleChange}
          onSignInClick={this.onSignInClick}
          onPasswordChange={this.onPasswordChange}
          loading={signIn.started}
          error={signIn.error}
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
