import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import DefaultContainer from 'containers/Default';


const Home = ({ title }) => (
  <DefaultContainer title={title}>
    <h2>{title}</h2>
    <Link to="/page-1">Page 1</Link>
    {' | '}
    <Link to="/page-2">Page 2</Link>
  </DefaultContainer>
);

Home.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Home;
