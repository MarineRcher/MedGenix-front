import {useState} from 'react';
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
    return (
        <>
            <div className={styles.containerForm}>
            <h3>Ajouter un projet</h3>
            <p className={styles.span}>Nom du projet</p>
                <InputForm 
                value={projet.name}
                onChange={(e) => setProjet({ ...projet, name: e.target.value })}
                placeholder="Nom du projet"
                />
                
                <p className={styles.span}>Description du projet</p>
                <InputForm 
                value={projet.content}
                onChange={(e) => setProjet({ ...projet, content: e.target.value })}
                placeholder="Description du projet"
                />
                <p className={styles.span}>Date de commencement du projet</p>
                <InputForm 
                value={projet.start}
                onChange={(e) => setProjet({ ...projet, start: e.target.value })}
                placeholder="2023-00-00"
                />
                <p className={styles.span}>Date de fin du projet</p>
                <InputForm 
                value={projet.end}
                onChange={(e) => setProjet({ ...projet, end: e.target.value })}
                placeholder="2023-00-00"
                />
                <CustomButton Text="Ajouter le projet" />
            </div>
        </>
    )
}

export default AddProject;