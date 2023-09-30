import NavProjectPage from "../Component/NavProjectPage";
import Project from "../assets/Projects/project.jpg";
import styles from '../styles/Page/Projects.module.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
``
export interface Task{
    id: string;
    ID_project: string;
    content: string;
    state: string;

}
interface TaskWithStatus extends Task {
    state: string;
}
function Projects() {
    const [tasks, setTasks] = useState<TaskWithStatus[]>([]);

    const fetchTaskData = async () => {
        const response = await fetch('http://localhost:3003/tasks/getTask');
        console.log(response);
        const data = await response.json();
        console.log(data);
        if (Array.isArray(data)) {
            const tasksWithStatus = data.map((task: Task) => ({
                ...task,
                status: task.state === 'todo' ? 'A Faire' : task.state === 'inprogress' ? 'En cours' : 'Terminee',
                content: task.content,
                ID_project: task.ID_project,
            }));
            setTasks(tasksWithStatus);
        } else {
            console.error('Error fetching task data: response is not an array');
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                await fetchTaskData();
            } catch (error) {
                console.error('Error fetching task data:', error);
            }
        };
        fetchData();
    }, []);

    console.log(tasks);

    return (
        <>
            <div className={styles.containerProjectPage}>
                <NavProjectPage />
                <div className={styles.containerImgTasks}>
                    <div className={styles.photo}>
                        <img src={Project} className={styles.imgProject} alt="Project" />
                    </div>
                    <Link to={'/addTask'} className={styles.addTask}>
                        Ajouter une tâche
                    </Link>
                    <div className={styles.tasks}>
                        <div className={styles.containerTasks}>
                            <h1>A Faire</h1>
                            {tasks.filter((task) => task.state === 'todo').map((task) => (
                                <div className={styles.containerTask} key={task.id}>
                                    <p className={styles.task}>{task.content}</p>
                                </div>
                            ))}
                        </div>
                        <div className={styles.containerTasks}>
                            <h1>En cours</h1>
                            {tasks.filter((task) => task.state === 'inprogress').map((task) => (
                                <div className={styles.containerTask} key={task.id}>
                                    <p className={styles.task}>{task.content}</p>
                                </div>
                            ))}
                        </div>
                        <div className={styles.containerTasks}>
                            <h1>Terminee</h1>
                            {tasks.filter((task) => task.state === 'over').map((task) => (
                                <div className={styles.containerTask} key={task.id}>
                                    <p className={styles.task}>{task.content}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}


export default Projects;