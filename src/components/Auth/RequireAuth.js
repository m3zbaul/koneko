import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import routes from '../../routes';
import * as authSelectors from '../../selectors/auth';


export default function (ComposedComponent) {
  class RequireAuth extends Component {
    static contextTypes = {
      router: PropTypes.object
    }

    componentDidMount() {
      if (!this.props.authenticated) {
        this.props.history.push(routes.SIGN_IN);
      }
    }

    componentDidUpdate() {
      if (!this.props.authenticated) {
        this.props.history.push(routes.SIGN_IN);
      }
    }

    render() {
      return <ComposedComponent {...this.props} />
    }
  }

  const makeMapStateToProps = () => {
    const selectAuthenticated = authSelectors.makeSelectAuthenticated();
    const mapStateToProps = (state) => ({
      authenticated: selectAuthenticated(state)
    });
    return mapStateToProps;
  };

  return withRouter(connect(makeMapStateToProps)(RequireAuth));
}
