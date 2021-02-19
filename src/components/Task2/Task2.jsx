import React from 'react';
import statisticalData from './statistical-data.json';
import Statistics from './Statistics';

const Task2 = () => (
  <Statistics title="Upload stats" stats={statisticalData} />
  // <Statistics stats={statisticalData} />  // для проверки
);

export default Task2;
