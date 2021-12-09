export const checkAuth = isAuth => {
  const registerPath = '/register';
  if (!isAuth && window.location.pathname !== registerPath)
    window.location.pathname = registerPath;
};
