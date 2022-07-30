import { useState } from 'react';
import { AuthForm } from '../authForm/AuthForm';
import { MainPage } from '../mainPage/MainPage';
import { getToken } from '../../utils/getToken';

export const Bootstrap = () => {
  const [ token, setToken ] = useState(getToken() || '');

  if (!token) {
    return <AuthForm onSuccess={setToken} />;
  }

  return (
    <div>
      <MainPage onLogout={() => setToken('')} />
    </div>
  );
};
