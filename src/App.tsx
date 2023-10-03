import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import './App.css';
import SignIn from './Page/SignIn.tsx';
import SignUp from './Page/SignUp';
import Projects from './Page/Projects';
import AddProject from './Page/AddProject';
import AddTask from './Page/addTask';
import { useAuth } from './useAuth.tsx';

function App() {
    const { user } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!user && window.location.pathname !== '/signUp') {
            navigate('/signIn');
        }
    }, [user, navigate]);

    return (
        <>

                <Routes>
                    <Route path="/signIn" element={<SignIn />} />
                    <Route path="/signUp" element={<SignUp />} />
                    <Route
                        path="/projects"
                        element={user ? <Projects /> : <Navigate to="/signIn" />}
                    />
                    <Route
                        path="/addProject"
                        element={user ? <AddProject /> : <Navigate to="/signIn" />}
                    />
                    <Route
                        path="/addTask"
                        element={user ? <AddTask /> : <Navigate to="/signIn" />}
                    />
                </Routes>

        </>
    );
}

export default App;
