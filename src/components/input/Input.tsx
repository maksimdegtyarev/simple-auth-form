import { HTMLAttributes, AllHTMLAttributes } from 'react';
import { useField, ErrorMessage } from 'formik';
import styles from './input.module.css';

interface IInput {
  type: string;
  label: string;
  name: string;
  inputMode?: HTMLAttributes<HTMLInputElement>['inputMode'];
  autocomplete?: AllHTMLAttributes<HTMLInputElement>['autoComplete'];
};

export const Input = ({ type, label, name, inputMode = 'text', autocomplete = 'off' }: IInput) => {
  const [field] = useField(name);

  return (
    <div className={styles.container}>
      <label className={styles.label} htmlFor={field.name}>{label}</label>
      <input type={type} {...field} inputMode={inputMode} autoComplete={autocomplete} className={styles.input} />
      <div className={styles.error}>
        <ErrorMessage name={field.name} />
      </div>
    </div>
  );
};