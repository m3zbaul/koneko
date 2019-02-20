import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect, Route, Switch, withRouter } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'
import {
  LoginScreen,
  ChallengesScreen,
  DashboardScreen,
  NewChallengeScreen
} from './screens'


class Routes extends Component {
  render() {
    const { userInfo } = this.props

    return (
      <Switch>
        <PrivateRoute
          exact
          path='/'
          render={() => <Redirect to='/challenges' />}
          userInfo={userInfo}
        />
        <Route
          path='/login'
          component={LoginScreen} 
        />
        <PrivateRoute
          path='/challenges'
          component={DashboardScreen}
          userInfo={userInfo}
        />
        <PrivateRoute
          render={() => (<div>Miss</div>)}
          userInfo={userInfo}
        />
      </Switch>
    )
  }
}

function mapStateToProps(state) {
  return {
    userInfo: state.auth.userInfo
  }
}

export default withRouter(connect(mapStateToProps)(Routes))
