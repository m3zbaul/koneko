import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import DefaultContainer from 'containers/Default';


const Page1 = ({ title }) => (
  <DefaultContainer title={title}>
    <h2>{title}</h2>
    <Link to="/">Home</Link>
    {' | '}
    <Link to="/page-2">Page 2</Link>
  </DefaultContainer>
);

Page1.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Page1;
