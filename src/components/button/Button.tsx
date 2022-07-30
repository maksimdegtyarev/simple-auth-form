import { ButtonHTMLAttributes, ReactNode } from 'react';
import styles from './button.module.css';

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
};

export const Button = ({ children, ...rest }: IButton) => {
  return (
    <button className={styles.button} {...rest}>{children}</button>
  );
};