import { logout } from '../../utils/logout';
import styles from './mainPage.module.css';

interface IMainPage {
  onLogout: VoidFunction;
}

export const MainPage = ({ onLogout }: IMainPage) => {
  const handleLogout = () => {
    logout();
    onLogout();
  }
  return (
    <div>
      <h1>Congrats, you are in.</h1>
      <div onClick={handleLogout}>logout</div>
    </div>
  )
}