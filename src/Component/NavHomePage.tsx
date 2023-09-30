import { Link } from 'react-router-dom';

import styles from './../styles/Component/NavHomePage.module.css';
import Logo from './../assets/logo.png';
import Account from './../assets/itemNav/account.png';
import Project from './../assets/itemNav/project.png';


// Menu qui redirige vers la page utilisateur, projets, calendrier et le chat
function NavHomePage() {
    return (
      <>
      <div className={styles.nav}>
        <img className={styles.logo} src={Logo} /> 
        <Link to="/signUp" className={styles.item}> <img className={styles.ImgItem} src={Account}/>  MON COMPTE</Link>
        <Link to="/projects" className={styles.item}> <img className={styles.ImgItem} src={Project}/>  PROJETS</Link>
      </div>
      </>
    );
  }
  
  export default NavHomePage;