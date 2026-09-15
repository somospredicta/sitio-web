import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function CTASection() {
    const scrollTo = (href) => {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="bg-[#0059FF] py-16 md:py-24">
            <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
                <h2 className="font-funnel text-[30px] md:text-[40px] font-bold text-white leading-[1.1] mb-5">
                    ¿Listo para saber el número antes de tomar la decisión?
                </h2>
                <p className="text-[16px] text-white/80 mb-10 font-google-sans leading-relaxed">
                    Completá el autodiagnóstico gratuito en menos de 5 minutos y recibí tu IVP Express.
                    Si querés el análisis completo, reservá una reunión con el equipo.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                        onClick={() => scrollTo('#test')}
                        className="inline-flex items-center gap-2 h-[52px] px-8 rounded-full bg-white text-[#0059FF] font-semibold text-[15px] hover:bg-white/90 transition-all duration-200 shadow-lg"
                    >
                        Hacer el autodiagnóstico gratis
                        <ArrowRight className="w-4 h-4" />
                    </button>
                    <a
                        href="https://calendly.com/institucional-predicta/30min"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 h-[52px] px-8 rounded-full border-2 border-white/50 text-white font-medium text-[15px] hover:bg-white/10 transition-all duration-200"
                    >
                        Reservar una reunión
                    </a>
                </div>
            </div>
        </section>
    );
}