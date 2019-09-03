import React, { Component } from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom';


class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route render={props => <div>Hello World!</div>}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Routes;
