import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/predicta/Navbar';
import HeroSection from '../components/predicta/HeroSection';
import HowItWorks from '../components/predicta/HowItWorks';
import FeatureBlocks from '../components/predicta/FeatureBlocks';
import SalesPain from '../components/predicta/SalesPain';
import NumbersSection from '../components/predicta/NumbersSection';
import MapaRiesgoSection from '../components/predicta/MapaRiesgoSection';
import TestSection from '../components/predicta/TestSection';
import CTASection from '../components/predicta/CTASection';
import TeamSection from '../components/predicta/TeamSection';
import FooterSection from '../components/predicta/FooterSection';
import useScrollToHash from '../hooks/use-scroll-to-hash';

export default function Home() {
  const navigate = useNavigate();
  useScrollToHash();

  const setActivePage = (page) => {
    if (page === 'ficha') navigate('/ficha-pais');
  };

  return (
    <div className="min-h-screen">
      <Navbar activePage="landing" setActivePage={setActivePage} />
      <HeroSection />
      <HowItWorks />
      <FeatureBlocks />
      <SalesPain />
      <NumbersSection />
      <MapaRiesgoSection />
      <TestSection />
      <CTASection />
      <TeamSection />
      <FooterSection />
    </div>
  );
}