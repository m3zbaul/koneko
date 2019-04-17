import React, { Component } from 'react';


class SignInForm extends Component {

  render() {
    const { onSignInClick, signIn } = this.props;

    return (
      <div>
        <h2>Sign In</h2>
        { signIn.error !== null &&
          <p style={{ color: 'red' }}>{signIn.error}</p>
        }
        <button onClick={onSignInClick} disabled={signIn.started}>
          { signIn.started && <span>Signing in...</span> }
          { !signIn.started && <span>Click to sign in</span> }
        </button>
      </div>
    )
  }
}

export default SignInForm;
