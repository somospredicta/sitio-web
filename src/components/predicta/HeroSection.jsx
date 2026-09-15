import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
    const scrollTo = (href) => {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="hero" className="relative bg-[#000030] pt-28 pb-24 md:pt-40 md:pb-32 overflow-hidden">
            {/* Grid pattern */}
            <div className="absolute inset-0 opacity-[0.04]" style={{
                backgroundImage: 'linear-gradient(rgba(0,89,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0,89,255,0.5) 1px, transparent 1px)',
                backgroundSize: '60px 60px'
            }} />

            <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
                <h1 className="font-funnel text-[36px] sm:text-[48px] md:text-[56px] font-bold leading-[1.08] text-white tracking-tight mb-6">
                    Tomá tu próxima decisión estratégica con el <span className="text-[#0059FF]">riesgo político</span> ya <span className="text-[#0059FF]">calculado</span>.
                </h1>

                <p className="text-[16px] sm:text-[17px] text-white/60 leading-relaxed max-w-[560px] mx-auto mb-10 font-google-sans">
                    ¿Estás por expandirte, invertir o entrar a un nuevo mercado? Antes de avanzar,
                    sabé exactamente a qué entorno político y regulatorio te enfrentás.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
                    <button
                        onClick={() => scrollTo('#test')}
                        className="inline-flex items-center gap-2 h-[52px] px-8 rounded-full bg-[#0059FF] text-white font-medium text-[15px] hover:bg-[#0059FF]/90 transition-all duration-200 shadow-lg shadow-[#0059FF]/25"
                    >
                        Hacer el autodiagnóstico
                        <ArrowRight className="w-4 h-4" />
                    </button>
                    <a
                        href="https://calendly.com/institucional-predicta/30min"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 h-[52px] px-8 rounded-full border border-white/30 text-white font-medium text-[15px] hover:bg-white/10 transition-all duration-200"
                    >
                        Reservar una reunión
                    </a>
                </div>

                <p className="text-[12px] text-white/30 font-google-sans">
                    ✓ Incubado en IGNA-UCC &nbsp;·&nbsp; ✓ Autodiagnóstico gratuito &nbsp;·&nbsp; ✓ 3 minutos + Posibilidad de agendar reunión con los Founders
                </p>
            </div>
        </section>
    );
}