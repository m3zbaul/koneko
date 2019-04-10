import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import App from '../App';
import SignInScreen from '../screens/SignIn';
import SignUpScreen from '../screens/SignUp';
import NotFoundScreen from '../screens/NotFound';
import DashboardScreen from '../screens/Dashboard';
import RequireAuth from '../components/Auth/RequireAuth';


const routes = {
  INDEX: '/',
  SIGN_IN: '/sign-in',
  SIGN_OUT: '/sign-out',
  SIGN_UP: '/sign-up',
};

class Routes extends Component {
  render() {
    return (
      <App>
        <Switch>
          <Route exact path={routes.INDEX} component={RequireAuth(DashboardScreen)}/>
          <Route path={routes.SIGN_IN} component={SignInScreen}/>
          <Route path={routes.SIGN_UP} component={SignUpScreen}/>
          <Route component={RequireAuth(NotFoundScreen)}/>
        </Switch>
      </App>
    );
  }
}

export const RoutesComponent = Routes;

export default routes;
