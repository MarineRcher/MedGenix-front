import { Routes, Route } from 'react-router-dom';
import './App.css'

// Pages importées
import SignIn from './Page/SignIn';
import SignUp from './Page/SignUp';
import Projects from './Page/Projects';
import AddProject from './Page/AddProject';
import AddTask from './Page/addTask';

function App() {

  return (
    <>
      <Routes>
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/addProject' element={<AddProject />} />
          <Route path='/addTask' element={<AddTask />} />
      </Routes>
    </>
  )
}

export default App;