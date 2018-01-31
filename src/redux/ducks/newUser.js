// Action Types

export const Types = {
  ADD: 'newUser/ADD',
  SEARCH: 'newUser/SEARCH',
};

// Reducer

const initalState = [];

export default function newUser(state = initalState, action) {
  switch (action.type) {
    case Types.ADD:
      return [ ...state, action.playload ];
    default:
      return state;
  }
}

// Action Crestors

export function searchUser(userName, coordinate) {
  return {
    type: Types.SEARCH,
    playload: {
      userName,
      coordinate,
    },
  };
};