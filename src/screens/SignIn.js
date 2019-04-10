import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { login } from '../actions/auth';
import { SignInForm } from '../components/Auth/SignInForm';


class SignIn extends Component {
  state = {
    handle: {
      value: ''
    },
    password: {
      value: ''
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
    this.props.login({ handle, password });
  }

  onPasswordChange = (event) => {
    let password = { ...this.state.password }
    password.value = event.target.value
    this.setState({ password })
  }

  render() {
    const {
      handle,
      password
    } = this.state;

    return (
      <div>
        <SignInForm
          handle={handle.value}
          password={password.value}
          onHandleChange={this.onHandleChange}
          onSignInClick={this.onSignInClick}
          onPasswordChange={this.onPasswordChange}
        />
      </div>
    )
  }
}

function mapStateToProps() {
  return {}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ login }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignIn));
