import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import routes from '../../routes';
import * as authSelectors from '../../selectors/auth';


export default function (ComposedComponent) {
  class RequireAuth extends Component {
    static contextTypes = {
      router: PropTypes.object
    }

    componentWillMount() {
      if (!this.props.authenticated) {
        this.props.history.push(routes.SIGN_IN);
      }
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.authenticated) {
        this.props.history.push(routes.SIGN_IN);
      }
    }

    render() {
      return <ComposedComponent {...this.props} />
    }
  }

  const mapStateToProps = createStructuredSelector({
    authenticated: authSelectors.makeSelectAuthenticated()
  });

  return withRouter(connect(mapStateToProps)(RequireAuth));
}
