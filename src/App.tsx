import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'

// Pages importées
import HomePage from './Page/HomePage'
import SignIn from './Page/SignIn';
import SignUp from './Page/SignUp';
import Projects from './Page/Projects';
import AddProject from './Page/AddProject';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/addProject' element={<AddProject />} />
      </Routes>
    </>
  )
}

export default App;