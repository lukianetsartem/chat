import { UPDATE_CHAT, WRITE_MESSAGE } from '../actions/actions';

export default function chatReducer(state = [], action) {
  switch (action.type) {
    case WRITE_MESSAGE:
      return [...state, action.newMessage];
    case UPDATE_CHAT:
      return action.messages;
    default:
      return state;
  }
}
