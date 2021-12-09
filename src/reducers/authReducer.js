export default function authReducer(state = { username: null }, action) {
  switch (action.type) {
    case 'REGISTER':
      return { username: action.username };
    default:
      return state;
  }
}
