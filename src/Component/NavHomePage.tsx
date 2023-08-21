import { Link } from 'react-router-dom';

import styles from './../styles/Component/NavHomePage.module.css';
import Logo from './../assets/logo.png';
import Account from './../assets/itemNav/account.png';
import Project from './../assets/itemNav/project.png';
import Calendar from './../assets/itemNav/calendar.png';
import Chat from './../assets/itemNav/chat.png';


// Menu qui redirige vers la page utilisateur, projets, calendrier et le chat
function NavHomePage() {
    return (
      <>
      <div className={styles.nav}>
        <img className={styles.logo} src={Logo} /> 
        <Link to="/" className={styles.item}> <img className={styles.ImgItem} src={Account}/>  MON COMPTE</Link>
        <Link to="/" className={styles.item}> <img className={styles.ImgItem} src={Project}/>  PROJETS</Link>
        <Link to="/" className={styles.item}><img className={styles.ImgItem} src={Calendar}/>  CALENDRIER</Link>
        <Link to="/" className={styles.item}> <img className={styles.ImgItem} src={Chat}/>  CHAT</Link>
      </div>
      </>
    );
  }
  
  export default NavHomePage;