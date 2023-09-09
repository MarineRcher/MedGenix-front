import { useState } from 'react';
import login from './../assets/login/SignIn.png';
import styles from "./../styles/Page/SignInandUp.module.css";

import InputForm from '../Component/login/InputForm';
import CustomButton from '../Component/login/CustomButton';

export interface User {
   email: string;
   password: string;
 }
 

function SignIn() {
   const [user, setUser] = useState<User>({
      email: '',
      password: '',
    });
return (
   <>

   <div className={styles.containerLogin}>
      <div className={styles.containerFormTitle}>
      <div className={styles.title}>
      <h1>Bienvenue</h1>
      </div>
   <div className={styles.containerFormLogin}>
      <h3>Connexion</h3>
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
      Text="Connexion"
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

export default SignIn;