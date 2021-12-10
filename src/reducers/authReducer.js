export default function authReducer(state = "Artem", action) {
  switch (action.type) {
    case 'REGISTER':
      return action.username;
    default:
      return state;
  }
}
