import {CREATE_STORAGE, UPDATE_CHAT, WRITE_MESSAGE} from "../actions/actions";

export default function chatReducer(
  state = JSON.parse(localStorage.getItem(process.env.MESSAGES_STORAGE_NAME)),
  action,
) {
  switch (action.type) {
    case CREATE_STORAGE: {
      const newState = [];
      localStorage.setItem(
        process.env.MESSAGES_STORAGE_NAME,
        JSON.stringify(newState),
      );
      return newState;
    }
    case WRITE_MESSAGE:
      const newMessage = {
        text: action.text,
        letter: action.user.username[0],
        ownerId: action.user.userId,
      };

      const updatedState = [
        ...JSON.parse(localStorage.getItem(process.env.MESSAGES_STORAGE_NAME)),
        newMessage,
      ];
      localStorage.setItem(
        process.env.MESSAGES_STORAGE_NAME,
        JSON.stringify(updatedState),
      );
      return updatedState;
    case UPDATE_CHAT:
      return JSON.parse(localStorage.getItem(process.env.MESSAGES_STORAGE_NAME));
      default:
      return state;
  }
}
