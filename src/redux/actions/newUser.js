export function searchUser(userName) {
  return {
    type: 'SEARCH_USER',
    playload: {
      userName,
    },
  };
};