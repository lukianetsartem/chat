import { REGISTER } from '../actions/actions';

export default function authReducer(
  state = JSON.parse(sessionStorage.getItem(process.env.SESSION_STORAGE_NAME)),
  action,
) {
  switch (action.type) {
    case REGISTER:
      return action.user;
    default:
      return state;
  }
}
