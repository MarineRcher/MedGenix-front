import {FormEvent, useState} from 'react';
import styles from './../styles/Page/FormProject.module.css';

import InputForm from '../Component/login/InputForm';
import CustomButton from '../Component/login/CustomButton';

export interface Projet{
    name: string;
    content: string;
    start: string;
    end: string;

}


function AddProject() {
    const [projet, setProjet] = useState<Projet>({
    name: '',
    content: '',
    start: '',
    end: '',

    });

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        console.log('Submitted details:', projet);

        // Send the form data to the server
        fetch('http://localhost:3003/project/addProject', {
            method: 'POST',
            body: JSON.stringify(projet),
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
            <h3>Ajouter un projet</h3>
            <p className={styles.span}>Nom du projet</p>
                <InputForm
                    id="ID_project"
                    type="ID_project"
                value={projet.name}
                onChange={(e) => setProjet({ ...projet, name: e.target.value })}
                placeholder="Nom du projet"
                />
                
                <p className={styles.span}>Description du projet</p>
                <InputForm
                    id="content"
                    type="content"
                value={projet.content}
                onChange={(e) => setProjet({ ...projet, content: e.target.value })}
                placeholder="Description du projet"
                />
                <p className={styles.span}>Date de commencement du projet</p>
                <InputForm
                    id="start"
                    type="start"
                value={projet.start}
                onChange={(e) => setProjet({ ...projet, start: e.target.value })}
                placeholder="2023-00-00"
                />
                <p className={styles.span}>Date de fin du projet</p>
                <InputForm
                    id="end"
                    type="end"
                value={projet.end}
                onChange={(e) => setProjet({ ...projet, end: e.target.value })}
                placeholder="2023-00-00"
                />
                <CustomButton Text="Ajouter le projet" />
            </div>
        </form>
        </>
    )
}

export default AddProject;