import { REGISTER } from '../actions/actions';
import { register } from '../api/api';

function authMiddleware() {
  return next => action => {
    switch (action.type) {
      case REGISTER:
        register(action.user);
        break;
      default:
        break;
    }

    return next(action);
  };
}

export default authMiddleware;
