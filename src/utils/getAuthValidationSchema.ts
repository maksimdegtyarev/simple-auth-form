import * as Yup from 'yup';

export const getAuthValidationSchema = () => {
  return Yup.object().shape({
    email: Yup.string().required('email is required').email('wrong email format'),
    password: Yup.string().required('password is required').min(8, 'password must have at least 8 characters'),
  });
};