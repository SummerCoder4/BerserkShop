import { Routes, Route } from 'react-router-dom'
import './style.css';
import Home from './components/Home'
import PosterAnnonce from './screens/PosterAnnonce';
import { useState } from 'react'


function App() {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="main">

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Poster' element={<PosterAnnonce/>} />
      </Routes>
    </div>
  );
}

export default App;
