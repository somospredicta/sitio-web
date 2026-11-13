import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import './home-app.css';

export const APP_URL = 'https://app.predicta.ar/bienvenida';

// Colores del semáforo de la app.
export const SEMAFORO = {
    rojo: '#E5484D',
    cauteloso: '#FF7A3D',
    amarillo: '#F5C518',
    verde: '#2ECC71',
};

const NOTIFICACIONES = [
    { color: SEMAFORO.amarillo, titulo: 'Ley en tratamiento', texto: 'Pasa a votación esta semana' },
    { color: SEMAFORO.rojo, titulo: 'Nuevo arancel', texto: 'Sube en un mercado al que vendés' },
    { color: SEMAFORO.amarillo, titulo: 'Tipo de cambio', texto: 'Otra semana de incertidumbre' },
    { color: SEMAFORO.verde, titulo: 'Nueva resolución', texto: 'Cambian los requisitos de exportación' },
];

export default function HeroApp() {
    const video = useRef(null);

    // Con "reducir movimiento", el video queda quieto en el primer cuadro (el poster).
    useEffect(() => {
        const v = video.current;
        if (!v) return;
        const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
        if (mq.matches) {
            v.removeAttribute('autoplay');
            v.pause();
        }
    }, []);

    return (
        <section id="hero" className="relative min-h-[820px] h-[100svh] overflow-hidden bg-[#000030]">
            <video
                ref={video}
                className="absolute inset-0 w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                poster="/media/hero-poster.jpg"
                aria-hidden="true"
            >
                <source src="/media/hero.mp4" type="video/mp4" />
            </video>

            {/* Velo y fundido hacia la sección siguiente */}
            <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(90deg, rgba(0,0,48,.94) 0%, rgba(0,0,48,.72) 45%, rgba(0,0,48,.35) 100%)' }}
            />
            <div className="absolute inset-x-0 bottom-0 h-[220px]" style={{ background: 'linear-gradient(180deg, rgba(0,0,48,0) 0%, #000030 100%)' }} />

            <div className="relative h-full max-w-6xl mx-auto px-4 sm:px-6 flex items-center pt-16">
                <div className="w-full flex items-center justify-between gap-10">
                    {/* Texto */}
                    <div className="max-w-[680px]">
                        <p className="font-google-sans text-[11px] sm:text-[13px] uppercase tracking-[0.18em] text-[#9DB8FF] mb-6">
                            Inteligencia política y regulatoria · De Argentina al mundo
                        </p>
                        <h1 className="font-funnel text-[42px] sm:text-[56px] lg:text-[76px] font-semibold leading-[1.02] tracking-tight text-[#FEFEFE]">
                            Lo que pasa en el país, medido para <span className="text-[#4D8BFF]">tu empresa.</span>
                        </h1>
                        <p className="font-google-sans text-[17px] sm:text-[20px] leading-relaxed text-[#D6DEF5] mt-6 max-w-[600px]">
                            Leyes, elecciones, aranceles y decisiones de gobierno, traducidos a un número y a qué hacer hoy. Todo en una app.
                        </p>
                        <a
                            href={APP_URL}
                            className="mt-9 inline-flex items-center gap-2 h-[54px] px-8 rounded-full bg-[#0059FF] text-[#FEFEFE] font-google-sans font-medium text-[16px] hover:bg-[#0059FF]/90 transition-colors shadow-lg shadow-[#0059FF]/30"
                        >
                            Probala gratis
                            <ArrowRight className="w-4 h-4" />
                        </a>
                        <p className="font-google-sans text-[13px] text-[#A9B6DA] mt-5">
                            Incubada en el IGNA · UCC · Configurás tu empresa en un minuto
                        </p>
                    </div>

                    {/* Notificaciones (solo compu) */}
                    <div className="hidden lg:flex flex-col gap-4 w-[360px] shrink-0" aria-hidden="true">
                        {NOTIFICACIONES.map((n, i) => (
                            <div
                                key={n.titulo}
                                className="notif-hero flex items-start gap-3 rounded-[14px] px-4 py-3.5 backdrop-blur-md"
                                style={{
                                    background: 'rgba(8,12,60,.82)',
                                    border: '1px solid rgba(254,254,254,.14)',
                                    marginLeft: i % 2 === 1 ? 40 : 0,
                                    animationDelay: `${i * 3}s`,
                                }}
                            >
                                <span className="mt-1.5 w-2.5 h-2.5 rounded-full shrink-0" style={{ background: n.color }} />
                                <div className="font-google-sans">
                                    <div className="text-[15px] font-bold text-[#FEFEFE]">{n.titulo}</div>
                                    <div className="text-[13px] text-[#A9B6DA] mt-0.5">{n.texto}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
