import React from 'react';
import PropTypes from 'prop-types';
import StatisticsItem from './StatisticsItem';
import s from './Statistics.module.scss';
import randomColor from './randomColor';

const Statistics = props => {
  const { title, stats } = props;
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{title}</h2>}

      <ul className={s.statList}>
        {stats.map(({ id, label, percentage }) => (
          <li
            className={s.item}
            key={id}
            style={{ backgroundColor: randomColor() }}
          >
            <StatisticsItem label={label} percentage={percentage} />
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Statistics;
