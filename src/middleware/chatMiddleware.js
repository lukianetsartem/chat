import {CREATE_STORAGE, LOAD_MESSAGES_PART, updateChatAC, WRITE_MESSAGE} from '../actions/actions';
import {getData, getDataPart, saveData} from '../api/api';
import {store} from "../redux/store";

function chatMiddleware() {
  return next => action => {
    switch (action.type) {
      case WRITE_MESSAGE:
        saveData([...getData(), action.newMessage]);
        break;
      case CREATE_STORAGE:
        saveData([]);
        break;
      case LOAD_MESSAGES_PART:
        const newMessages = getDataPart(-action.amount);
        store.dispatch(updateChatAC(newMessages));
        break;
      default:
        break;
    }

    return next(action);
  };
}

export default chatMiddleware;
