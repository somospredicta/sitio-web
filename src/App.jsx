import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import FichaPais from './pages/FichaPais';
import Admin from './pages/Admin';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ficha-pais" element={<FichaPais />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;