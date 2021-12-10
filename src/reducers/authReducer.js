import { v4 as uuidv4 } from 'uuid';
import {REGISTER} from "../actions/actions";

export default function authReducer(
  state = JSON.parse(sessionStorage.getItem(process.env.SESSION_STORAGE_NAME)),
  action,
) {
  switch (action.type) {
    case REGISTER:
      const newUser = {
        username: action.username,
        userId: uuidv4(),
      };

      sessionStorage.setItem(
        process.env.SESSION_STORAGE_NAME,
        JSON.stringify(newUser),
      );

      return newUser;
    default:
      return state;
  }
}
