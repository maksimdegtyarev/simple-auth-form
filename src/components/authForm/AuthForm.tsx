import { useState } from 'react';
import { Formik } from 'formik';
import { getAuthValidationSchema } from '../../utils/getAuthValidationSchema';
import { Input } from '../input/Input';
import { Checkbox } from '../checkbox/Checkbox';
import { Button } from '../button/Button';
import { login } from '../../utils/login';
import { Link } from '../link/Link';
import styles from './authForm.module.css';

const initialValues = {
  email: '',
  password: '',
};

interface IAuthFormData {
  email: string;
  password: string;
};
interface IAuthForm {
  onSuccess: (token: string) => void;
};

export const AuthForm = ({ onSuccess }: IAuthForm) => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = ({ email, password }: IAuthFormData) => {
    if (!loading) {
      setLoading(true);
      login(email, password).then(onSuccess).finally(() => {
        setLoading(false);
      });
    }
  };

  return (
    <div className={styles.container}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={getAuthValidationSchema()}
      >
        {formik => (
          <form onSubmit={formik.handleSubmit} className={styles.form}>
            <h1 className={styles.title}>Login</h1>
            <Input
              label="Email"
              name="email"
              type="text"
              inputMode="email"
              autocomplete="email"
            />
            <Input
              label="Password"
              name="password"
              type="password"
              inputMode="text"
              autocomplete="current-password"
            />
            <div className={styles.additionalRow}>
              <Checkbox label="remember me" name="remember" />
              <Link href="#">forgot password?</Link>
            </div>
            <div className={styles.buttonContainer}>
              <Button>Submit</Button>
              {
                loading && <span className={styles.spinner} />
              }
            </div>
          </form>    
        )}
      </Formik>
    </div>
  );
};