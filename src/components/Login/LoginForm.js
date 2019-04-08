import React, { Component } from 'react';


class LoginForm extends Component {
  render() {
    const {
      email,
      password,
      onEmailChange,
      onLoginClick,
      onPasswordChange,
      togglePasswordVisibility
    } = this.props

    return (
      <form className="form-horizontal">
        <h4>Login</h4>
        <div className="form-group">
          <div className="col-md-2" />
          <div className="col-md-10">Anmeldedaten</div>
        </div>
        <div className="form-group">
          <label htmlFor="inputEmail3" className="col-sm-2 control-label">E-Mail</label>
          <div className="col-sm-10">
            <input
              type="email"
              className="form-control"
              id="inputEmail3"
              placeholder="mustermann@mustermail.de"
              value={email.value}
              onChange={onEmailChange}
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="inputPassword3" className="col-sm-2 control-label">Passwort</label>
          <div className="col-sm-10 has-feedback">
            <input
              type={`${password.visible ? "text" : "password"}`}
              className="form-control"
              id="inputPassword3"
              placeholder="Ihr Passwort hat mind. 8 Zeichen"
              value={password.value}
              onChange={onPasswordChange}
            />
            <i
              className={`glyphicon glyphicon-eye-${password.visible ? "open" : "close"} form-control-feedback`}
              onClick={togglePasswordVisibility}
            />
          </div>
        </div>
        <div className="form-group">
        </div>
        <div className="form-group">
          <div className="col-sm-offset-2 col-sm-10">
            <button
              type="submit"
              className="btn-login"
              onClick={onLoginClick}
            >
              Anmelden
            </button>
          </div>
        </div>
      </form>
    )
  }
}

export default LoginForm
