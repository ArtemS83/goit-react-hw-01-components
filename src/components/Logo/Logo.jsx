import React from 'react';
import PropTypes from 'prop-types';
import './Logo.scss';

const Logo = ({ text }) => <div className="Logo">{text}</div>;

Logo.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Logo;
