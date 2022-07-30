export const login = (email: string, password: string): Promise<string> => {
  // emulate api request...
  return new Promise(resolve => {
    window.setTimeout(() => {
      localStorage.setItem('token', 'token');
      resolve('token');
    }, 1500);
  });
};