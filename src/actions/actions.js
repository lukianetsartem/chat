import { v4 as uuidv4 } from 'uuid';

export const INITIALIZE_APP = 'INITIALIZE_APP';

export const REGISTER = 'REGISTER';
export const LOAD_USER_DATA = 'LOAD_USER_DATA';

export const CREATE_STORAGE = 'CREATE_STORAGE';
export const WRITE_MESSAGE = 'WRITE_MESSAGE';
export const UPDATE_CHAT = 'UPDATE_CHAT';
export const LOAD_MESSAGES_PART = 'LOAD_MESSAGES_PART';

export const initializeAppAC = () => {
  return { type: INITIALIZE_APP };
};

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

export const loadMessagesPartAC = amount => {
  return { type: LOAD_MESSAGES_PART, amount };
};
