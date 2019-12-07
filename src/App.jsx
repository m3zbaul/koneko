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
        {routes.map(route => {
          return <Route
            key={route.name}
            exact={route.exact}
            path={route.path}
            render={(props) => (
              <route.component
                {...props}
                routes={route.routes}
                title={route.name}
              />
            )}
          />
        })}
        <Redirect to="/" />
      </Switch>
    </Suspense>
  </BrowserRouter>
);

export default App;
