import React from 'react';
import PropTypes from 'prop-types';
import NavBar from '../NavBar/NavBar';
import Container from '../Container/Container';

const Layout = ({ children }) => (
  <>
    <NavBar>
      {' '}
      <div className="Navigation">There will be Navigation</div>
    </NavBar>
    <Container>{children}</Container>
  </>
);

Layout.defaultProps = {
  children: [],
};

Layout.propTypes = {
  children: PropTypes.node,
};
export default Layout;
