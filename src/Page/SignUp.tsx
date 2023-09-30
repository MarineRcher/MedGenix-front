import { useState, FormEvent } from 'react';
import login from './../assets/login/SignIn.png';
import styles from "./../styles/Page/SignInandUp.module.css";
import { Link } from 'react-router-dom';
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
    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        console.log('Submitted details:', user);

        // Send the form data to the server
        fetch('http://localhost:3003/auth/signup', {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => {
                // Handle the response from the server
                console.log('Response:', data);
            })
            .catch(error => {
                console.error('Error submitting form:', error);
            });
    }
return (
   <>

   <div className={styles.containerLogin}>
      <div className={styles.containerFormTitle}>
     
   <div className={styles.containerFormLogin}>
      <h3>Inscription</h3>
       <form onSubmit={handleSubmit}>
      <p className={styles.span}>Prénom</p>
      <InputForm
          id="firstName"
          type="firstName"
       value={user.firstName}
       onChange={(e) => setUser({ ...user, firstName: e.target.value })}
       placeholder="Prénom"
      />
        <p className={styles.span}>Nom de Famille</p>
      <InputForm
          id="lastName"
          type="lastName"
       value={user.lastName}
       onChange={(e) => setUser({ ...user, lastName: e.target.value })}
       placeholder="Nom de Famille"
      />
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
      <CustomButton 
      Text="Inscription"
      />
           <Link to={"/SignIn"}>Se connecter</Link>
       </form>
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