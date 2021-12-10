export const REGISTER = 'REGISTER';
export const CREATE_STORAGE = 'CREATE_STORAGE';
export const WRITE_MESSAGE = 'WRITE_MESSAGE';
export const UPDATE_CHAT = 'UPDATE_CHAT';

export const registerAC = username => {
  return { type: REGISTER, username };
};

export const createStorageAC = () => {
  return { type: CREATE_STORAGE };
};

export const updateChatAC = () => {
  return { type: UPDATE_CHAT };
};

export const writeMessageAC = (text, user) => {
  return { type: WRITE_MESSAGE, text, user };
};
