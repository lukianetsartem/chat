export const registerAC = username => {
  return { type: 'REGISTER', username };
};

export const writeMessageAC = message => {
  return { type: 'WRITE_MESSAGE', message };
};
