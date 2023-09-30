import { FormEvent, useState } from 'react';
import login from './../assets/login/SignIn.png';
import styles from './../styles/Page/SignInandUp.module.css';

import InputForm from '../Component/login/InputForm';
import CustomButton from '../Component/login/CustomButton';

interface User {
   email: string;
   password: string;
}

function SignIn() {
   const [user, setUser] = useState<User>({
      email: '',
      password: '',
   });

   function handleSubmit(e: FormEvent<HTMLFormElement>) {
      e.preventDefault();
      console.log('Submitted details:', user);

      // Send the form data to the server
      fetch('http://localhost:3003/auth/login', {
         method: 'POST',
         body: JSON.stringify(user),
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
          <div className={styles.containerLogin}>
             <div className={styles.containerFormTitle}>
                <div className={styles.title}>
                   <h1>Bienvenue</h1>
                </div>

                <form onSubmit={handleSubmit} className={styles.containerFormLogin}>
                   <h3>Connexion</h3>
                   <p className={styles.span}>Email</p>
                   <InputForm
                       id="email"
                       type="email"
                       value={user.email}
                       onChange={(e) => setUser({ ...user, email: e.target.value })}
                       placeholder="Email"
                   />
                   <p className={styles.span}>Mot de Passe</p>
                   <InputForm
                       id="password"
                       type="password"
                       value={user.password}
                       onChange={(e) => setUser({ ...user, password: e.target.value })}
                       placeholder="Mot de Passe"
                   />
                   <CustomButton Text="Connexion" />
                </form>
             </div>
          </div>
          <div className={styles.containerImage}>
             <img className={styles.ImgSignIn} src={login} alt="Sign In" />
          </div>
       </>
   );
}

export default SignIn;