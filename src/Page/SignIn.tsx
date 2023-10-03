import { FormEvent, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import loginImage from './../assets/login/SignIn.png';
import styles from './../styles/Page/SignInandUp.module.css';
import { AuthContext } from "../AuthProvider.tsx"; // Correct import
import InputForm from '../Component/login/InputForm';
import CustomButton from '../Component/login/CustomButton';

interface User {
  email: string;
  password: string;
}

function SignIn() {
  const authContext = useContext(AuthContext);

  const navigate = useNavigate();
  const [user, setUser] = useState<User>({
    email: '',
    password: '',
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Submitted details:', user);

    try {
      const response = await fetch('http://localhost:3003/auth/login', {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();

        if (data.user.token) {
          if (!authContext) {
            return null;
          }
          authContext.login(data.user.token, data.user.id);

          setUser({ email: '', password: '' });
          navigate('/projects');
        }
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

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
          <img className={styles.ImgSignIn} src={loginImage} alt="Sign In" />
        </div>
      </>
  );
}

export default SignIn;
