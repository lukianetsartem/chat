import { v4 as uuidv4 } from 'uuid';

export const REGISTER = 'REGISTER';
export const LOAD_USER_DATA = 'LOAD_USER_DATA';

export const CREATE_STORAGE = 'CREATE_STORAGE';
export const WRITE_MESSAGE = 'WRITE_MESSAGE';
export const UPDATE_CHAT = 'UPDATE_CHAT';

export const registerAC = username => {
  return {
    type: REGISTER,
    user: {
      username: username,
      userId: uuidv4(),
    },
  };
};

export const loadUserDataAC = user => {
  return {
    type: LOAD_USER_DATA,
    user,
  };
};

export const createStorageAC = () => {
  return { type: CREATE_STORAGE };
};

export const updateChatAC = messages => {
  return { type: UPDATE_CHAT, messages };
};

export const writeMessageAC = (text, user) => {
  return {
    type: WRITE_MESSAGE,
    newMessage: {
      text: text,
      letter: user.username[0],
      ownerId: user.userId,
    },
  };
};
