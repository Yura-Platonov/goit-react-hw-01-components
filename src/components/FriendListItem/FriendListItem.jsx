import React from 'react';
import PropTypes from 'prop-types';

import { Status } from './FriendListItem.styled';
import { Item } from './FriendListItem.styled';
import { Name } from './FriendListItem.styled';

export const FriendListItem = ({ name, avatar, isOnline }) => {
  return (
    <Item>
      <Status isOnline={isOnline} />
      <img src={avatar} alt="user" width="48" />
      <Name>{name}</Name>
    </Item>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};