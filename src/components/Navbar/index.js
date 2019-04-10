import React, { Component } from 'react';
import {
  Alignment,
  Button,
  Classes,
  H5,
  Menu,
  MenuItem,
  MenuDivider,
  Navbar,
  NavbarDivider,
  NavbarGroup,
  NavbarHeading,
  Switch,
  Popover,
  Position,
  Intent,
  NonIdealState
} from "@blueprintjs/core";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import UserNav from './User';
import NotificationsNav from './Notifications';
import * as authSelectors from '../../selectors/auth';


class Nav extends Component {
  render() {
    const navMenu = this.makeNavMenu();

    return (
      <div>
        <Navbar fixedToTop={true}>
          <NavbarGroup align={Alignment.LEFT}>
            <NavbarHeading>React-boilerplate</NavbarHeading>
          </NavbarGroup>
          <NavbarGroup align={Alignment.RIGHT}>
            <Button className={Classes.MINIMAL} icon="home" text="Home"/>
            <Button className={Classes.MINIMAL} icon="document" text="Files"/>
            {navMenu}
          </NavbarGroup>
        </Navbar>
      </div>
    );
  }

  makeNavMenu = () => {
    const { authenticated } = this.props;

    if (authenticated) {
      return (
        <div>
          <NotificationsNav/>
          <UserNav/>
        </div>
      );
    } else {
      return null;
    }
  }
}

const makeMapStateToProps = () => {
  const selectAuthenticated = authSelectors.makeSelectAuthenticated();
  const mapStateToProps = (state) => ({
    authenticated: selectAuthenticated(state)
  });
  return mapStateToProps;
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onSignIn: (payload) => {
//       dispatch(signIn(payload))
//     }
//   };
// };

export default withRouter(connect(makeMapStateToProps)(Nav));
