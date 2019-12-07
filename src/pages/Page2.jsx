import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import DefaultContainer from 'containers/Default';


const Page2 = ({ title }) => (
  <DefaultContainer title={title}>
    <h2>{title} Page</h2>
    <Link to="/">Home</Link>
    <Link to="/page-1">Page 1</Link>
  </DefaultContainer>
);

Page2.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Page2;
