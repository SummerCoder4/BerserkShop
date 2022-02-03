import Annonces from './components/Annonces';
import { Routes, Route } from 'react-router-dom'
import './style.css';
import Home from './components/Home'
import PosterAnnonce from './screens/PosterAnnonce';
import Footer from './components/Footer';

function App() {
  return (
    <div className="main">
    <div className='mainWrap'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Poster' element={<PosterAnnonce/>} />
      </Routes>
      <Annonces />
      </div>
      <Footer />
    </div>
  );
}

export default App;
