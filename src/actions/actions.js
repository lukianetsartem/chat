export const REGISTER = 'REGISTER';
export const CREATE_STORAGE = 'CREATE_STORAGE';
export const WRITE_MESSAGE = 'WRITE_MESSAGE';
export const UPDATE_CHAT = 'UPDATE_CHAT';
export const GET_CHAT_PART = 'GET_CHAT_PART';

export const registerAC = username => {
  return { type: REGISTER, username };
};

export const createStorageAC = () => {
  return { type: CREATE_STORAGE };
};

export const updateChatAC = (amount) => {
  return { type: UPDATE_CHAT, amount };
};

export const getChatPartAC = (amount) => {
  return { type: GET_CHAT_PART, amount };
};

export const writeMessageAC = (text, user) => {
  return { type: WRITE_MESSAGE, text, user };
};
