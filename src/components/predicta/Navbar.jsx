import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Navbar({ activePage, setActivePage }) {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const goToLanding = () => {
        setMobileOpen(false);
        setActivePage('landing');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const goToFicha = () => {
        setMobileOpen(false);
        setActivePage('ficha');
        window.scrollTo({ top: 0 });
    };

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${scrolled ? 'bg-[#000030]/95 backdrop-blur-sm shadow-sm' : 'bg-[#000030]'}`}>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
                <button onClick={goToLanding} className="flex items-center gap-2">
                    {<img src="https://media.base44.com/images/public/6a10ca1504aa640dc039c6a0/c82ed7f4c_isotitpoazulespectro.png" alt="Predicta" className="h-8 w-auto" />}
                    <span className="text-xl font-funnel font-bold tracking-tight text-white">Predicta</span>
                </button>

                {/* Desktop */}
                <div className="hidden md:flex items-center gap-8">
                    <button
                        onClick={goToFicha}
                        className={`text-sm font-medium transition-colors font-google-sans ${activePage === 'ficha' ? 'text-[#0059FF]' : 'text-white/60 hover:text-white'}`}
                    >
                        Ficha de Desembarco
                    </button>
                    <button
                        onClick={() => { if (activePage !== 'landing') { setActivePage('landing'); setTimeout(() => document.querySelector('#test')?.scrollIntoView({ behavior: 'smooth' }), 100); } else { document.querySelector('#test')?.scrollIntoView({ behavior: 'smooth' }); } }}
                        className="h-10 px-5 rounded-full bg-[#0059FF] text-white text-sm font-medium hover:bg-[#0059FF]/90 transition-colors"
                    >
                        Autodiagnóstico gratuito
                    </button>
                    <button
                        onClick={() => navigate('/admin')}
                        className="text-xs text-white/30 hover:text-white/60 transition-colors border border-white/10 hover:border-white/30 px-3 h-8 rounded-full"
                    >
                        Panel
                    </button>
                </div>

                {/* Mobile toggle */}
                <button className="md:hidden p-2 text-white" onClick={() => setMobileOpen(!mobileOpen)}>
                    {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
            </div>

            {/* Mobile menu */}
            {mobileOpen && (
                <div className="md:hidden bg-[#000030] border-t border-white/10 px-4 pb-4 space-y-3">
                    <button onClick={goToFicha} className={`block w-full text-left text-sm py-2 transition-colors ${activePage === 'ficha' ? 'text-[#0059FF]' : 'text-white/60 hover:text-white'}`}>
                        Ficha de Desembarco
                    </button>
                    <button
                        onClick={() => { setMobileOpen(false); if (activePage !== 'landing') { setActivePage('landing'); setTimeout(() => document.querySelector('#test')?.scrollIntoView({ behavior: 'smooth' }), 100); } else { document.querySelector('#test')?.scrollIntoView({ behavior: 'smooth' }); } }}
                        className="w-full h-11 rounded-full bg-[#0059FF] text-white text-sm font-medium"
                    >
                        Autodiagnóstico gratuito
                    </button>
                </div>
            )}
        </nav>
    );
}