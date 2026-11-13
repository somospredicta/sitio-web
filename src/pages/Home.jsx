import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/predicta/Navbar';
import HeroApp from '../components/predicta/HeroApp';
import QuienTeAvisa from '../components/predicta/QuienTeAvisa';
import LaApp from '../components/predicta/LaApp';
import MideTuEmpresa from '../components/predicta/MideTuEmpresa';
import SalesPain from '../components/predicta/SalesPain';
import NumbersSection from '../components/predicta/NumbersSection';
import MapaRiesgoSection from '../components/predicta/MapaRiesgoSection';
import CTASection from '../components/predicta/CTASection';
import FooterSection from '../components/predicta/FooterSection';
import useScrollToHash from '../hooks/use-scroll-to-hash';

export default function Home() {
  const navigate = useNavigate();
  useScrollToHash();

  const setActivePage = (page) => {
    if (page === 'ficha') navigate('/ficha-pais');
  };

  return (
    <div className="min-h-screen bg-[#000030]">
      <Navbar activePage="landing" setActivePage={setActivePage} variante="home" />
      <HeroApp />
      <QuienTeAvisa />
      <LaApp />
      <MideTuEmpresa />
      <SalesPain />
      <NumbersSection />
      <MapaRiesgoSection />
      <CTASection />
      <FooterSection />
    </div>
  );
}