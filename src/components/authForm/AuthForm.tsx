import { useState } from 'react';
import { Formik } from 'formik';
import { getAuthValidationSchema } from '../../utils/getAuthValidationSchema';
import { Input } from '../input/Input';
import { Button } from '../button/Button';
import { login } from '../../utils/login';
import styles from './authForm.module.css';

const initialValues = {
  email: '',
  password: '',
};

interface IAuthFormData {
  email: string;
  password: string;
}
interface IAuthForm {
  onSuccess: (token: string) => void;
}

export const AuthForm = ({ onSuccess }: IAuthForm) => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = ({ email, password }: IAuthFormData) => {
    setLoading(true);
    login(email, password).then(onSuccess).finally(() => {
      setLoading(false);
    })
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={getAuthValidationSchema()}
      >
        {formik => (
          <form onSubmit={formik.handleSubmit}>
            <Input
              label="Email"
              name="email"
              type="text"
            />
            <Input
              label="Password"
              name="password"
              type="password"
            />
            <Button>Submit</Button>
          </form>    
        )}
      </Formik>
      {
        loading && <div>loading...</div>
      }
    </>
  );
};