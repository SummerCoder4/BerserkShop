import Annonces from './Components/Annonces';
import { Routes, Route } from 'react-router-dom'
import './style.css';
import Home from './components/Home'
import PosterAnnonce from './screens/PosterAnnonce';

function App() {
  return (
    <div className="main">
      <Annonces />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Poster' element={<PosterAnnonce/>} />
      </Routes>
    </div>
  );
}

export default App;
