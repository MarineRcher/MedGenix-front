import NavProjectPage from "../Component/NavProjectPage";
import Project from "../assets/Projects/Project.jpg";
import styles from '../styles/Page/Projects.module.css';

function Projects() {
    return(

        <>
        <div className={styles.containerProjectPage}> 
        <NavProjectPage />
            <div className={styles.containerImgTasks}>
            <div className={styles.photo}>
                <img src={Project} className={styles.imgProject} />
            </div>
            <div className={styles.tasks}>
                <div className={styles.containerTasks}>
                <h1>A Faire</h1>
                    <div className={styles.containerTask}>
                      <p className={styles.task}>Faire ca </p> 
                    </div>
                </div>
                <div className={styles.containerTasks}>
                <h1>En cours</h1>
                    <div className={styles.containerTask}>
                    <p className={styles.task}>Faire ca </p> 
                    </div>
                </div>
                <div className={styles.containerTasks}>
                <h1>Terminee</h1>
                    <div className={styles.containerTask}>
                    <p className={styles.task}>Faire ca </p> 
                    </div>
                </div>           
            </div>
            </div>
        </div>
        </>
    )
}

export default Projects;