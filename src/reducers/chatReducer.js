export default function chatReducer(
  state = JSON.parse(localStorage.getItem(process.env.MESSAGES_STORAGE_NAME)),
  action,
) {
  switch (action.type) {
    case 'WRITE_MESSAGE':
      const updatedState = [...state, action.message];
      localStorage.setItem(process.env.MESSAGES_STORAGE_NAME, JSON.stringify(updatedState));
      return updatedState;
    default:
      return state;
  }
}
