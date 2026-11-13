import React, { useEffect } from 'react';
import { ArrowRight, Instagram, Linkedin } from 'lucide-react';
import Navbar from '../components/predicta/Navbar';
import FooterSection, { REDES } from '../components/predicta/FooterSection';
import Revelar, { estilo } from '../components/predicta/nuevo/Revelar';

// Redes personales: completar con los links reales. Si un link está vacío, el botón no se muestra.
const EQUIPO = [
    {
        nombre: 'Agustina Martínez',
        rol: 'Dirección Estratégica e Inteligencia Comercial',
        descripcion:
            'Lic. en Relaciones Internacionales (UCC). Maestría en Comercio Internacional (UNC) en curso. Especialista en metodología Non-Market y análisis de riesgo político para decisiones empresariales.',
        foto: 'https://media.base44.com/images/public/6a10ca1504aa640dc039c6a0/24b29ce38_QuienesAgustina.png',
        encuadre: 'object-top',
        instagram: '',
        linkedin: 'https://www.linkedin.com/in/agustina-martinez-0218aa245/',
    },
    {
        nombre: 'Giuliano Doffo',
        rol: 'Asuntos Públicos y Comunicación Institucional',
        descripcion:
            'Lic. en Ciencia Política (UCC). Asesor legislativo activo en Córdoba. Especialista en estrategia comunicacional institucional y relaciones con actores de poder.',
        foto: 'https://media.base44.com/images/public/6a10ca1504aa640dc039c6a0/61e146afc_QuienesGiuliano.png',
        encuadre: 'object-top',
        instagram: '',
        linkedin: 'https://www.linkedin.com/in/giuliano-doffo-659169270/',
    },
];

function BotonRed({ href, etiqueta, children }) {
    if (!href) return null;
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={etiqueta}
            className="inline-flex items-center gap-2 h-10 px-4 rounded-full border border-white/15 font-google-sans text-[13px] text-[#D6DEF5] hover:text-[#FEFEFE] hover:border-white/40 transition-colors"
        >
            {children}
        </a>
    );
}

export default function Equipo() {
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = 'Equipo · Predicta';
        return () => {
            document.title = 'Predicta';
        };
    }, []);

    return (
        <div className="min-h-screen bg-[#000030]">
            <Navbar variante="home" />

            <section className="relative pt-40 pb-16 md:pt-48 md:pb-20 overflow-hidden">
                <div
                    className="absolute left-1/2 top-0 -translate-x-1/2 w-[1000px] h-[700px] pointer-events-none"
                    style={{ background: 'radial-gradient(closest-side, rgba(0,89,255,.25), rgba(0,89,255,0) 70%)' }}
                />
                <div className={`${estilo.contenedor} relative`}>
                    <Revelar className="max-w-3xl">
                        <p className={estilo.eyebrow}>Equipo</p>
                        <h1 className="font-funnel text-[44px] sm:text-[60px] lg:text-[76px] font-semibold leading-[1.02] tracking-tight text-[#FEFEFE] mt-5">
                            El equipo detrás de <span className="text-[#4D8BFF]">Predicta.</span>
                        </h1>
                        <p className={`${estilo.bajada} mt-6 max-w-2xl`}>
                            Combinamos formación académica, experiencia institucional y tecnología para cuantificar lo que otros solo describen.
                        </p>
                    </Revelar>
                </div>
            </section>

            <section className="pb-24 md:pb-32">
                <div className={`${estilo.contenedor} grid gap-6 md:grid-cols-2`}>
                    {EQUIPO.map((p, i) => (
                        <Revelar key={p.nombre} retraso={i * 0.12}>
                            <article className={`${estilo.tarjeta} h-full overflow-hidden`}>
                                <div className="relative h-[340px] md:h-[400px] overflow-hidden bg-[#0A0A45]">
                                    <img src={p.foto} alt={p.nombre} className={`w-full h-full object-cover ${p.encuadre}`} />
                                    <div className="absolute inset-x-0 bottom-0 h-1/2" style={{ background: 'linear-gradient(0deg, rgba(8,12,60,1), rgba(8,12,60,0))' }} />
                                </div>
                                <div className="p-7 md:p-8 -mt-16 relative">
                                    <h2 className="font-funnel text-[30px] md:text-[34px] font-semibold leading-tight text-[#FEFEFE]">{p.nombre}</h2>
                                    <p className="font-google-sans text-[14px] font-medium text-[#4D8BFF] mt-2">{p.rol}</p>
                                    <p className="font-google-sans text-[15px] leading-relaxed text-[#A9B6DA] mt-4">{p.descripcion}</p>
                                    <div className="flex flex-wrap gap-2 mt-6">
                                        <BotonRed href={p.linkedin} etiqueta={`LinkedIn de ${p.nombre}`}>
                                            <Linkedin className="w-4 h-4" /> LinkedIn
                                        </BotonRed>
                                        <BotonRed href={p.instagram} etiqueta={`Instagram de ${p.nombre}`}>
                                            <Instagram className="w-4 h-4" /> Instagram
                                        </BotonRed>
                                    </div>
                                </div>
                            </article>
                        </Revelar>
                    ))}
                </div>

                <div className={`${estilo.contenedor} mt-16`}>
                    <Revelar>
                        <div className={`${estilo.tarjeta} p-8 md:p-10 flex flex-col md:flex-row md:items-center justify-between gap-6`}>
                            <div>
                                <p className="font-funnel text-[26px] md:text-[30px] font-semibold text-[#FEFEFE]">Seguí a Predicta</p>
                                <p className="font-google-sans text-[15px] text-[#A9B6DA] mt-2">Análisis, novedades y lo que se viene, en nuestras redes.</p>
                            </div>
                            <div className="flex flex-wrap gap-3">
                                <a href={REDES.instagram} target="_blank" rel="noopener noreferrer" className={estilo.botonSecundario}>
                                    <Instagram className="w-4 h-4" /> Instagram
                                </a>
                                <a href={REDES.linkedin} target="_blank" rel="noopener noreferrer" className={estilo.botonSecundario}>
                                    <Linkedin className="w-4 h-4" /> LinkedIn
                                </a>
                                <a href="https://app.predicta.ar/bienvenida" className={estilo.boton}>
                                    Probala gratis <ArrowRight className="w-4 h-4" />
                                </a>
                            </div>
                        </div>
                    </Revelar>
                </div>
            </section>

            <FooterSection />
        </div>
    );
}
