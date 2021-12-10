import { CREATE_STORAGE, UPDATE_CHAT, WRITE_MESSAGE } from '../actions/actions';

const getData = () => {
  return JSON.parse(localStorage.getItem(process.env.MESSAGES_STORAGE_NAME));
}
const saveData = data => {
  localStorage.setItem(process.env.MESSAGES_STORAGE_NAME, JSON.stringify(data));
}

export default function chatReducer(state = getData(), action) {
  switch (action.type) {
    case CREATE_STORAGE: {
      const newStorage = [];
      saveData(newStorage);
      return newStorage;
    }
    case WRITE_MESSAGE:
      const newMessage = {
        text: action.text,
        letter: action.user.username[0],
        ownerId: action.user.userId,
      };
      const updatedState = [...getData(), newMessage];
      saveData(updatedState);
      return updatedState;
    case UPDATE_CHAT:
      return getData();
    default:
      return state;
  }
}
