import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { login } from '../actions/auth';
import { SignUpForm } from '../components/Auth/SignUpForm';


class SignUp extends Component {
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

  onSignUpClick = (event) => {
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
        <SignUpForm
          handle={handle.value}
          password={password.value}
          onHandleChange={this.onHandleChange}
          onSignUpClick={this.onSignUpClick}
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignUp));
