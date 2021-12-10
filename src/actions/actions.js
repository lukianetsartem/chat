export const REGISTER = 'REGISTER';
export const CREATE_STORAGE = 'CREATE_STORAGE';
export const WRITE_MESSAGE = 'WRITE_MESSAGE';

export const registerAC = username => {
  return { type: REGISTER, username };
};

export const createStorageAC = () => {
  return { type: CREATE_STORAGE };
};

export const writeMessageAC = (text, user) => {
  return { type: WRITE_MESSAGE, text, user };
};
