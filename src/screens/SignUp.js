import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SignUpForm from '../components/Auth/SignInForm';
import routes from '../routes';
import * as authActions from '../actions/auth';
import * as authSelectors from '../selectors/auth';


class SignUp extends Component {
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

  onSignUpClick = (event) => {
    event.preventDefault();
    const handle = this.state.handle.value;
    const password = this.state.password.value;
    this.props.onSignUp({ username: handle, password });
  }

  onPasswordChange = (event) => {
    let password = { ...this.state.password }
    password.value = event.target.value
    this.setState({ password })
  }

  render() {
    const { signUp } = this.props;
    const { handle, password } = this.state;
    console.log(this.props);

    return (
      <div>
        <SignUpForm
          handle={handle.value}
          password={password.value}
          onHandleChange={this.onHandleChange}
          onSignInClick={this.onSignUpClick}
          onPasswordChange={this.onPasswordChange}
          loading={signUp.started}
          error={signUp.error}
        />
      </div>
    )
  }
}

const makeMapStateToProps = () => {
  const selectSignUp = authSelectors.makeSelectSignUp();
  const selectAuthenticated = authSelectors.makeSelectAuthenticated();
  const mapStateToProps = (state) => ({
    signUp: selectSignUp(state),
    authenticated: selectAuthenticated(state)
  });
  return mapStateToProps;
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSignUp: (payload) => {
      dispatch(authActions.signUpStart(payload))
    }
  };
};

export default withRouter(connect(makeMapStateToProps, mapDispatchToProps)(SignUp));
