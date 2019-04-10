import React, { Component } from 'react';
import {
  Button,
  Classes,
  Menu,
  MenuItem,
  MenuDivider,
  Navbar,
  Popover,
  Position,
  Intent
} from "@blueprintjs/core";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as authActions from '../../actions/auth';
import * as authSelectors from '../../selectors/auth';


class User extends Component {
  onSignOutClick = () => {
    this.props.onSignOut();
  }

  render() {
    const userMenu = (
      <Menu>
        <MenuItem icon="graph" text="Graph" />
        <MenuItem icon="map" text="Map" />
        <MenuItem icon="th" text="Table" shouldDismissPopover={false} />
        <MenuItem icon="zoom-to-fit" text="Nucleus" disabled={true} />
        <MenuDivider />
        <MenuItem icon="cog" text="Settings...">
          <MenuItem icon="add" text="Add new application" disabled={true} />
          <MenuItem icon="remove" text="Remove application" />
        </MenuItem>
        <MenuItem
          intent={Intent.WARNING}
          icon="log-out"
          text="Sign out"
          onClick={this.onSignOutClick}
        />
      </Menu>
    );

    return (
      <Popover
        position={Position.BOTTOM_LEFT}
        content={userMenu}
      >
        <Button className={Classes.MINIMAL} icon="user"/>
      </Popover>
    );
  }
}

const makeMapStateToProps = () => {
  const selectAuthenticated = authSelectors.makeSelectAuthenticated();
  const mapStateToProps = (state) => ({
    authenticated: selectAuthenticated(state)
  });
  return mapStateToProps;
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSignOut: () => {
      dispatch(authActions.signOutStart())
    }
  };
};

export default withRouter(connect(makeMapStateToProps, mapDispatchToProps)(User));
