import React from 'react';
import PropTypes from 'prop-types';
import s from './TransactionHistory.module.scss';

const TransactionHistoryItem = ({ type, amount, currency, index }) => (
  <tr className={index % 2 === 0 ? s.tr : null}>
    <td className={s.td}>{type}</td>
    <td className={s.tdBorder}>{amount}</td>
    <td>{currency}</td>
  </tr>
);

TransactionHistoryItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};

export default TransactionHistoryItem;
