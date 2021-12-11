import { CREATE_STORAGE, REGISTER, WRITE_MESSAGE } from '../actions/actions';
import { getData, register, saveData } from '../api/api';

function chatMiddleware() {
  return next => action => {
    switch (action.type) {
      case WRITE_MESSAGE:
        saveData([...getData(), action.newMessage]);
        break;
      case CREATE_STORAGE:
        saveData([]);
        break;
      case REGISTER:
        register(action.user);
        break;
      default:
        break;
    }

    return next(action);
  };
}

export default chatMiddleware;
