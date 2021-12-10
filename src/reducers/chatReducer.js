import {CREATE_STORAGE, GET_CHAT_PART, UPDATE_CHAT, WRITE_MESSAGE} from '../actions/actions';

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

      saveData([...getData(), newMessage]);
      return [...state, newMessage];
    case UPDATE_CHAT:
      return getData().slice(-action.amount);
    case GET_CHAT_PART:
      return getData().slice(-action.amount)
    default:
      return getData().slice(-10);
  }
}
