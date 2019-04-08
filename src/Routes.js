import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import LoginScreen from './screens/LoginScreen';


class Routes extends Component {
  render() {
    const { userInfo } = this.props;

    return (
      <Switch>
        <PrivateRoute
          exact
          path='/'
          component={LoginScreen}
          userInfo={userInfo}
        />
        <Route
          path='/login'
          component={LoginScreen} 
        />
        <PrivateRoute
          render={() => (<div>Miss</div>)}
          userInfo={userInfo}
        />
      </Switch>
    );
  }
}

function mapStateToProps(state) {
  return {
    userInfo: state.auth.userInfo
  };
}

export default withRouter(connect(mapStateToProps)(Routes));
