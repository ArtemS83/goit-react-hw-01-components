import React from 'react';
import PropTypes from 'prop-types';
import s from './TransactionHistory.module.scss';

const TransactionHistoryItem = ({ type, amount, currency }) => (
  <>
    <td className={s.td}>{type}</td>
    <td className={s.tdBorder}>{amount}</td>
    <td>{currency}</td>
  </>
);

TransactionHistoryItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};

export default TransactionHistoryItem;
