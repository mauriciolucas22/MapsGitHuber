import api from 'services/api';

function addUser(repo) {
  return {
    type: 'ADD_USER',
    playload: {
      repo,
    },
  };
};

export function searchRepository(repositoryName) {
  return async (dispatch) => {
    const response = await api.get(`/repos/${repositoryName}`);

    dispatch(addUser(response.data));
  }
}