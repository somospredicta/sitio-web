import React from 'react';
import Navbar from '@/components/predicta/Navbar';
import FichaDesembarco from '@/components/predicta/FichaDesembarco';
import { useNavigate } from 'react-router-dom';

export default function FichaPais() {
  const navigate = useNavigate();

  const setActivePage = (page) => {
    if (page === 'landing') navigate('/');
  };

  return (
    <div className="min-h-screen">
      <Navbar activePage="ficha" setActivePage={setActivePage} />
      <div className="pt-16">
        <FichaDesembarco />
      </div>
    </div>
  );
}