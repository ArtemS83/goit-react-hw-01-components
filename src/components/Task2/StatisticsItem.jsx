import React from 'react';
import PropTypes from 'prop-types';
import s from './Statistics.module.scss';

const StatisticsItem = ({ label, percentage }) => (
  <>
    <span className={s.label}>{label}</span>
    <span className={s.percentage}>{percentage}%</span>
  </>
);

StatisticsItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
export default StatisticsItem;
