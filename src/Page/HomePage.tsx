// Importez les styles nécessaires
import styles from './../styles/Page/HomePage.module.css';
import NavHomePage from "../Component/NavHomePage";
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className={styles.container}>
      <NavHomePage />
      <div className={styles.containerHomePage}>
        <div className={styles.search}>Rechercher</div>
        <div className={styles.containerProjectCalendar}>
          <div className={styles.project}>
            PROJET
            <div className={styles.containerProjects}>
             <Link to="/"><div className={styles.containerProject}>Projet 1</div></Link> 
             <Link to="/"><div className={styles.containerProject}>Projet 2</div></Link>
             <Link to="/"><div className={styles.containerProject}>Projet 3</div></Link>
            </div>
          </div>
          <div className={styles.calendar}>
            CALENDRIER
         
          </div>
        </div>
        <div className={styles.containerActivityTeamTask}>
          <div className={styles.activity}>

          </div>
          <div className={styles.team}>
            
          </div>
          <div className={styles.task}>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
