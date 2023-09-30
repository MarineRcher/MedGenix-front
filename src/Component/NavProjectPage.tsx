import styles from './../styles/Component/NavProjectsPage.module.css';
import { Link } from 'react-router-dom';

import NavHomePage from './NavHomePage';

function NavProjectPage() {
    return(
        <>
         <div className={styles.navs}>
        <NavHomePage />
        <div className={styles.navProjects}>
        <Link to="/addProject" className={styles.item}>Ajouter un projet</Link>
        <Link to="/project1" className={styles.item}><h1>Projet 1</h1></Link>
        <Link to="/projects" className={styles.item}>Documents</Link>
        </div>
      </div>
        </>
    )
}

export default NavProjectPage;