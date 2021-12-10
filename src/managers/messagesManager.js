export const messagesManager = () => {
  const messages = JSON.parse(
    localStorage.getItem(process.env.MESSAGES_STORAGE_NAME),
  );

  if (!messages) {
    localStorage.setItem(process.env.MESSAGES_STORAGE_NAME, JSON.stringify([]));
  }
};
