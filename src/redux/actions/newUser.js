export function searchUser(userName, coordinate) {
  return {
    type: 'SEARCH_USER',
    playload: {
      userName,
      coordinate,
    },
  };
};