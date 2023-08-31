import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'

// Pages importées
import HomePage from './Page/HomePage'
import SignIn from './Page/SignIn';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signIn" element={<SignIn />} />
      </Routes>
    </>
  )
}

export default App;