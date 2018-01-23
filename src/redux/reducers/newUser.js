export default function newUser(state = [], action) {
  switch (action.type) {
    case 'ADD_USER':
      return [ ...state, action.playlod.user ];
    default:
      return state;
  }
}