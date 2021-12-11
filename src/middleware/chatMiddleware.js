import { CREATE_STORAGE, WRITE_MESSAGE } from '../actions/actions';
import { getData, saveData } from '../api/api';

function chatMiddleware() {
  return next => action => {
    switch (action.type) {
      case WRITE_MESSAGE:
        saveData([...getData(), action.newMessage]);
        break;
      case CREATE_STORAGE:
        saveData([]);
        break;
      default:
        break;
    }

    return next(action);
  };
}

export default chatMiddleware;
