import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'

// Pages importées
import HomePage from './Page/HomePage'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  )
}

export default App;