import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { login } from '../actions/auth';
import { LoginForm } from '../components';


class Login extends Component {
  state = {
    email: {
      value: ''
    },
    password: {
      value: '',
      visible: false
    }
  }

  onEmailChange = (event) => {
    let email = { ...this.state.email }
    email.value = event.target.value
    this.setState({ email })
  }

  onLoginClick = (event) => {
    event.preventDefault();
    const email = this.state.email.value;
    const password = this.state.password.value;
    this.props.login({ email, password });
  }

  onPasswordChange = (event) => {
    let password = { ...this.state.password }
    password.value = event.target.value
    this.setState({ password })
  }

  togglePasswordVisibility = () => {
    let password = { ...this.state.password }
    password.visible = !password.visible
    this.setState({ password })
  }

  render() {
    const {
      email,
      password
    } = this.state;

    return (
      <div>
        <LoginForm
          email={email}
          password={password}
          onEmailChange={this.onEmailChange}
          onLoginClick={this.onLoginClick}
          onPasswordChange={this.onPasswordChange}
          togglePasswordVisibility={this.togglePasswordVisibility}
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
