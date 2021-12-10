import { v4 as uuidv4 } from 'uuid';

export default function chatReducer(
  state = JSON.parse(localStorage.getItem(process.env.MESSAGES_STORAGE_NAME)),
  action,
) {
  switch (action.type) {
    case 'WRITE_MESSAGE':
      const newMessage = {
        id: uuidv4(),
        text: action.text,
        letter: action.user.username[0],
        ownerId: action.user.userId,
      };

      const updatedState = [...state, newMessage];
      localStorage.setItem(
        process.env.MESSAGES_STORAGE_NAME,
        JSON.stringify(updatedState),
      );
      return updatedState;
    default:
      return state;
  }
}
