import { CREATE_STORAGE, UPDATE_CHAT, WRITE_MESSAGE } from '../actions/actions';
import { getDataPart } from '../api/api';

export default function chatReducer(state = getDataPart(-20), action) {
  switch (action.type) {
    case CREATE_STORAGE:
      return [];
    case WRITE_MESSAGE:
      return [...state, action.newMessage];
    case UPDATE_CHAT:
      return action.messages;
    default:
      return state
  }
}
