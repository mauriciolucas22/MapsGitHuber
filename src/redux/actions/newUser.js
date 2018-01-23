import api from 'services/api';

export function addUser(userName) {
  return {
    type: 'SEARCH_USER',
    playload: {
      userName,
    },
  };
};