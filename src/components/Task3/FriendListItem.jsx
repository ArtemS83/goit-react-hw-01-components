import React from 'react';
import PropTypes from 'prop-types';
import defaultImage from './default.svg';
import s from './FriendListItem.module.scss';

const FriendListItem = ({ isOnline, avatar, name }) => (
  <li className={s.item}>
    <span className={isOnline ? s.isActive : s.isNotActive}></span>
    <img className={s.avatar} src={avatar} alt={`avatar ${name}`} width="48" />
    <p className={s.name}>{name}</p>
  </li>
);

FriendListItem.defaultProps = {
  avatar: defaultImage,
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
