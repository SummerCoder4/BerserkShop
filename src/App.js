import { Routes, Route } from 'react-router-dom'
import './style.css';
import Home from './components/Home'

function App() {
  return (
    <div className="main">
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
