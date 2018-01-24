export default function newUser(state = [], action) {
  switch (action.type) {
    case 'ADD_USER':
      return [ ...state, action.playload.user ];
    default:
      return state;
  }
}