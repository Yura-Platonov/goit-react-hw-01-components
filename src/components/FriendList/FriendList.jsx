import React from 'react';
import PropTypes from 'prop-types';
import { FriendListItem } from '../FriendListItem/FriendListItem';
import { ListContainer } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <ListContainer>
      {friends.map(friend => (
        <FriendListItem key={friend.id} {...friend} />
      ))}
    </ListContainer>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};