export const getData = () => {
  return JSON.parse(localStorage.getItem(process.env.REACT_APP_MESSAGES_STORAGE_NAME));
};

export const getDataPart = amount => {
  return getData().slice(amount);
};

export const saveData = data => {
  localStorage.setItem(process.env.REACT_APP_MESSAGES_STORAGE_NAME, JSON.stringify(data));
};

export const register = user => {
  sessionStorage.setItem(
    process.env.REACT_APP_SESSION_STORAGE_NAME,
    JSON.stringify(user),
  );
};

export const getUserData = () => {
  return JSON.parse(sessionStorage.getItem(process.env.REACT_APP_SESSION_STORAGE_NAME))
}
