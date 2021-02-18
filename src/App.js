import React from 'react';
import Layout from './components/Layout/Layout';
import Panel from './components/Panel/Panel';
import Task1 from './components/Task1/Task1';

const App = () => (
  <Layout>
    <h1 style={{ marginBottom: 15 }}>Hello React</h1>
    <Panel title="Task №1-social profile">
      <Task1 />
    </Panel>

    <Panel title="Task №2"></Panel>
    <Panel title="Task №3"></Panel>
    <Panel title="Task №4"></Panel>
  </Layout>
);

export default App;
