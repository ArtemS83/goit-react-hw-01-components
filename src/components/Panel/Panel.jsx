import React from 'react';
import PropTypes from 'prop-types';
import './Panel.scss';

const Panel = ({ title, children }) => (
  <div className="Panel-container">
    {title && <h2 className="Panel-title">{title}</h2>}

    {children}
  </div>
);

Panel.defaultProps = {
  title: '',
  children: [],
};

Panel.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Panel;
