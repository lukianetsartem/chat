export const getData = () => {
  return JSON.parse(localStorage.getItem(process.env.MESSAGES_STORAGE_NAME));
};

export const getDataPart = amount => {
  return getData().slice(amount);
};

export const saveData = data => {
  localStorage.setItem(process.env.MESSAGES_STORAGE_NAME, JSON.stringify(data));
};

export const register = user => {
  sessionStorage.setItem(
    process.env.SESSION_STORAGE_NAME,
    JSON.stringify(user),
  );
};
