import React from 'react';
import user from './user.json';
import Profile from './Profile';

const Task1 = () => (
  <Profile
    name={user.name}
    tag={user.tag}
    location={user.location}
    avatar={user.avatar}
    stats={user.stats}
  />
);
export default Task1;
