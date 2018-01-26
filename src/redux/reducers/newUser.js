export default function newUser(state = [], action) {
  switch (action.type) {
    case 'ADD_USER':
      return [ ...state, action.playload ];
    default:
      return state;
  }
}