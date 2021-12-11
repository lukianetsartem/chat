import { CREATE_STORAGE, UPDATE_CHAT, WRITE_MESSAGE } from '../actions/actions';
import { getDataPart } from '../api/api';

export default function chatReducer(state = [], action) {
  switch (action.type) {
    case CREATE_STORAGE:
      return [];
    case WRITE_MESSAGE:
      return [...state, action.newMessage];
    case UPDATE_CHAT:
      return getDataPart(action.amount);
    default:
      return getDataPart(-20);
  }
}
