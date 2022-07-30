import { useField, ErrorMessage } from 'formik';

interface IInput {
  type: string;
  label: string;
  name: string;
};

export const Input = ({ type, label, name }: IInput) => {
  const [field] = useField(name);
  return (
    <div>
      <label htmlFor={field.name}>{label}</label>
      <input type={type} {...field} />
      <ErrorMessage name={field.name} />
    </div>
  )
};