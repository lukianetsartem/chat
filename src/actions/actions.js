export const registerAC = username => {
  return { type: 'REGISTER', username };
};

export const writeMessageAC = (text, user) => {
  return { type: 'WRITE_MESSAGE', text, user };
};
