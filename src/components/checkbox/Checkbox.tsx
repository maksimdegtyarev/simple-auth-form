import { useField } from 'formik';
import styles from './checkbox.module.css';

interface ICheckbox {
  label: string;
  name: string;
};

export const Checkbox = ({ label, name }: ICheckbox) => {
  const [field] = useField(name);
  return (
    <div className={styles.container}>
      <input type="checkbox" id={field.name} {...field} className={styles.input} />
      <label className={styles.label} htmlFor={field.name}>{label}</label>
    </div>
  );
};