import React from 'react';
import { Route, Redirect } from 'react-router-dom';


const PrivateRoute = ({ component: Component, user, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      user !== null
        ? <Component {...props} />
        : <Redirect to='/login' />
    )}
  />
);

export default PrivateRoute;
