import React, { Suspense } from 'react';
import {
  BrowserRouter,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import routes from './routes';


const App = () => (
  <BrowserRouter>
    <Suspense fallback={<div />}>
      <Switch>
        {routes.map((route) => (
          <Route
            key={route.name}
            exact={route.exact}
            path={route.path}
            render={(props) => (
              <route.component
                /* eslint-disable react/jsx-props-no-spreading */
                {...props}
                /* eslint-disable react/jsx-props-no-spreading */
                routes={route.routes}
                title={route.name}
              />
            )}
          />
        ))}
        <Redirect to="/" />
      </Switch>
    </Suspense>
  </BrowserRouter>
);

export default App;
