import React from 'react';
import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';


const Default = ({ children, title }) => (
  <div>
    <Helmet title={title} />
    {children}
  </div>
);

Default.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  title: PropTypes.string.isRequired,
};

export default Default;
