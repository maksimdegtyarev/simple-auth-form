import { logout } from '../../utils/logout';
import { Button } from '../button/Button';
import styles from './mainPage.module.css';

interface IMainPage {
  onLogout: VoidFunction;
};

export const MainPage = ({ onLogout }: IMainPage) => {
  const handleLogout = () => {
    logout();
    onLogout();
  };

  return (
    <div className={styles.container}>
      <h1>Congrats, you are in.</h1>
      <Button onClick={handleLogout}>logout</Button>
    </div>
  );
};