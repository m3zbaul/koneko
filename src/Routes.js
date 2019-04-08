import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import * as authSelectors from './selectors/auth';
import PrivateRoute from './PrivateRoute';
import LoginScreen from './screens/Login';
import NotFoundScreen from './screens/NotFound';


class Routes extends Component {
  render() {
    const { authenticated } = this.props;

    return (
      <Switch>
        <PrivateRoute exact path='/' component={LoginScreen} authenticated={authenticated}/>
        <Route path='/login' component={LoginScreen}/>
        <Route component={NotFoundScreen}/>
      </Switch>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  user: authSelectors.makeSelectUser(),
  authenticated: authSelectors.makeSelectAuthenticated()
});

export default withRouter(connect(mapStateToProps)(Routes));
