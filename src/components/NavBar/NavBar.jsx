import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../Logo/Logo';
import './NavBar.scss';

const styles = {
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    minHeight: 40,
    backgroundColor: '#61dafb',
    marginBottom: 10,
  },
};

const NavBar = ({ children }) => (
  <header style={styles.header}>
    <Logo text="React" />
    {children}
  </header>
);

NavBar.propTypes = {
  children: PropTypes.node.isRequired,
};

export default NavBar;
