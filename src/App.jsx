import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import FichaPais from './pages/FichaPais';
import Admin from './pages/Admin';
import Equipo from './pages/Equipo';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ficha-pais" element={<FichaPais />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/equipo" element={<Equipo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;