import React from 'react';
import Layout from './components/Layout/Layout';
import Panel from './components/Panel/Panel';
import Task1 from './components/Task1/Task1';
import Task2 from './components/Task2/Task2';
import Task3 from './components/Task3/Task3';
import Task4 from './components/Task4/Task4';
const App = () => (
  <Layout>
    <h1 style={{ marginBottom: 15 }}>Hello React</h1>
    <Panel title="Task №1-social profile">
      <Task1 />
    </Panel>
    <Panel title="Task №2-statistics">
      <Task2 />
    </Panel>
    <Panel title="Task №3-friend-list">
      <Task3 />
    </Panel>
    <Panel title="Task №4-transaction-history">
      <Task4 />
    </Panel>
  </Layout>
);

export default App;
