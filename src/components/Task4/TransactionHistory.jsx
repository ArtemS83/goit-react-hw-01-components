import React from 'react';
import PropTypes from 'prop-types';
import TransactionHistoryItem from './TransactionHistoryItem';
import s from './TransactionHistory.module.scss';

const TransactionHistory = ({ transactions }) => {
  return (
    <table className={s.transactionHistory}>
      <thead>
        <tr className={s.thead}>
          <th>Type</th>
          <th className={s.thBorder}>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody className={s.tbody}>
        {transactions.map(({ id, type, amount, currency }, index) => (
          <tr key={id} className={index % 2 === 0 ? s.tr : ''}>
            <TransactionHistoryItem
              type={type}
              amount={amount}
              currency={currency}
            />
          </tr>
        ))}
      </tbody>
    </table>
  );
};
TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default TransactionHistory;
