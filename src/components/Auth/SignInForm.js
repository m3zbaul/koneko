import React, { Component } from 'react';
import { FormGroup, InputGroup, Tooltip, Intent, Button, Text } from '@blueprintjs/core';


class SignInForm extends Component {
  state = {
    showPassword: false
  };

  handleLockClick = () => this.setState({ showPassword: !this.state.showPassword });

  render() {
    const {
      handle,
      password,
      onHandleChange,
      onSignInClick,
      onPasswordChange
    } = this.props;
    const { showPassword } = this.state;

    const lockButton = (
      <Tooltip content={`${showPassword ? "Hide" : "Show"} Password`} disabled={false}>
        <Button
          disabled={false}
          icon={showPassword ? "unlock" : "lock"}
          intent={Intent.WARNING}
          minimal={true}
          onClick={this.handleLockClick}
        />
      </Tooltip>
    );

    return (
      <div>
        <Text tagName="h2">Sign In</Text>
        <FormGroup
          helperText="Enter username or email"
          label="Username or Email"
          labelFor="handle-input"
          labelInfo="(required)"
        >
          <InputGroup
            id="handle-input"
            placeholder="Enter your username or email..."
            small={false}
            type="text"
            value={handle}
            onChange={onHandleChange}
          />
        </FormGroup>
        <FormGroup
          helperText="Enter password"
          label="Password"
          labelFor="password-input"
          labelInfo="(required)"
        >
          <InputGroup
            id="password-input"
            placeholder="Enter your password..."
            rightElement={lockButton}
            small={false}
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={onPasswordChange}
          />
        </FormGroup>
        <FormGroup
        >
          <Button
            text="Sign In"
            onClick={onSignInClick}
          />
        </FormGroup>
      </div>
    )
  }
}

export default SignInForm;
