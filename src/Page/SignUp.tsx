import { useState } from 'react';
import login from './../assets/login/SignIn.png';
import styles from "./../styles/Page/SignInandUp.module.css";

import InputForm from '../Component/login/InputForm';
import CustomButton from '../Component/login/CustomButton';

export interface User {
    firstName: string;
    lastName: string;
   email: string;
   password: string;
   
 }
 

function SignUp() {
   const [user, setUser] = useState<User>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    });
return (
   <>

   <div className={styles.containerLogin}>
      <div className={styles.containerFormTitle}>
     
   <div className={styles.containerFormLogin}>
      <h3>Inscription</h3>
      <p className={styles.span}>Prénom</p>
      <InputForm 
       value={user.firstName}
       onChange={(e) => setUser({ ...user, firstName: e.target.value })}
       placeholder="Prénom"
      />
        <p className={styles.span}>Nom de Famille</p>
      <InputForm 
       value={user.lastName}
       onChange={(e) => setUser({ ...user, lastName: e.target.value })}
       placeholder="Nom de Famille"
      />
        <p className={styles.span}>Email</p>
      <InputForm 
       value={user.email}
       onChange={(e) => setUser({ ...user, email: e.target.value })}
       placeholder="Email"
      />
      <p className={styles.span}>Mot de Passe</p>
      <InputForm 
      value={user.password}
      onChange={(e) => setUser({ ...user, password: e.target.value })}
      placeholder="Mot de Passe"
      />
      <CustomButton 
      Text="Inscription"
      />
   </div>
   </div>
   <div className={styles.containerImage}>
   <img className={styles.ImgSignIn} src={login} /> 
   </div>
   </div>
   </>
)

}

export default SignUp;