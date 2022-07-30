import { ReactNode } from 'react';
import styles from './link.module.css';

interface ILink {
  href: string;
  children: ReactNode;
};

export const Link = ({ href, children }: ILink) => {
  return (
    <a href={href} className={styles.link}>{children}</a>
  );
};
