import React, { Component } from 'react';
import {
  Button,
  Classes,
  Menu,
  MenuItem,
  MenuDivider,
  Popover,
  Position,
  Intent,
  NonIdealState
} from "@blueprintjs/core";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as authSelectors from '../../selectors/auth';


class Notifications extends Component {
  render() {
    const notifications = (
      <Menu>
        <NonIdealState
          icon="clipboard"
          title="No unread notifications!"
          description={"No unread notifications!"}
        />
      </Menu>
    );

    return (
      <Popover
        position={Position.BOTTOM_LEFT}
        content={notifications}
      >
        <Button className={Classes.MINIMAL} icon="notifications"/>
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

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onSignIn: (payload) => {
//       dispatch(signIn(payload))
//     }
//   };
// };

export default withRouter(connect(makeMapStateToProps)(Notifications));
