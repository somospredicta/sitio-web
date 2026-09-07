import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/predicta/Navbar';
import HeroSection from '../components/predicta/HeroSection';
import CountrySelector from '../components/predicta/CountrySelector';
import HowItWorks from '../components/predicta/HowItWorks';
import FeatureBlocks from '../components/predicta/FeatureBlocks';
import SalesPain from '../components/predicta/SalesPain';
import NumbersSection from '../components/predicta/NumbersSection';
import TestSection from '../components/predicta/TestSection';
import CTASection from '../components/predicta/CTASection';
import TeamSection from '../components/predicta/TeamSection';
import FooterSection from '../components/predicta/FooterSection';

export default function Home() {
  const navigate = useNavigate();

  const setActivePage = (page) => {
    if (page === 'ficha') navigate('/ficha-pais');
  };

  return (
    <div className="min-h-screen">
      <Navbar activePage="landing" setActivePage={setActivePage} />
      <HeroSection />
      <CountrySelector />
      <HowItWorks />
      <FeatureBlocks />
      <SalesPain />
      <NumbersSection />
      <TestSection />
      <CTASection />
      <TeamSection />
      <FooterSection />
    </div>
  );
}