import {LOAD_USER_DATA, REGISTER} from '../actions/actions';

export default function authReducer(
  state = {},
  action,
) {
  switch (action.type) {
    case REGISTER:
      return action.user;
    case LOAD_USER_DATA:
      return action.user;
    default:
      return state;
  }
}
