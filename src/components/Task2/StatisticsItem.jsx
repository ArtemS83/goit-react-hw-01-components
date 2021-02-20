import React from 'react';
import PropTypes from 'prop-types';
import s from './Statistics.module.scss';
import randomColor from './randomColor';

const StatisticsItem = ({ label, percentage }) => (
  <li className={s.item} style={{ backgroundColor: randomColor() }}>
    <span className={s.label}>{label}</span>
    <span className={s.percentage}>{percentage}%</span>
  </li>
);

StatisticsItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
export default StatisticsItem;
