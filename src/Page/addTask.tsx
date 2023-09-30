import {FormEvent, useState} from 'react';
import styles from './../styles/Page/FormProject.module.css';

import InputForm from '../Component/login/InputForm';
import CustomButton from '../Component/login/CustomButton';

export interface Task{
    ID_project: string;
    content: string;
    state: string;

}


function AddTask() {
    const [task, setTask] = useState<Task>({
        ID_project: '',
        content: '',
        state: '',

    });

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        console.log('Submitted details:', task);

        // Send the form data to the server
        fetch('http://localhost:3003/tasks/addTask', {
            method: 'POST',
            body: JSON.stringify(task),
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                // Handle the response from the server
                console.log('Response:', data);
            })
            .catch((error) => {
                console.error('Error submitting form:', error);
            });
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
            <div className={styles.containerForm}>
                <h3>Ajouter une tâche</h3>
                <p className={styles.span}>ID du Projet(Pour test : mettre 1)</p>
                <InputForm
                    id="ID_project"
                    type="ID_project"
                    value={task.ID_project}
                    onChange={(e) => setTask({ ...task, ID_project: e.target.value })}
                    placeholder="Id ur projet"
                />

                <p className={styles.span}>Contenu de la tâche</p>
                <InputForm
                    id="content"
                    type="content"
                    value={task.content}
                    onChange={(e) => setTask({ ...task, content: e.target.value })}
                    placeholder="Description de la tâche"
                />
                <p className={styles.span}>Date de commencement du projet</p>
                <InputForm
                    id="state"
                    type="state"
                    value={task.state}
                    onChange={(e) => setTask({ ...task, state: e.target.value })}
                    placeholder="A faire / En cours / Terminé"
                />
                <CustomButton Text="Ajouter la tâche" />
            </div>
                </form>
        </>
    )
}

export default AddTask;