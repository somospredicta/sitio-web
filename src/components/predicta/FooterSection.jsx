import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Instagram, Linkedin, Mail } from 'lucide-react';

export const REDES = {
    instagram: 'https://instagram.com/predicta.ar',
    linkedin: 'https://www.linkedin.com/company/somospredicta',
};

const MAIL = 'https://mail.google.com/mail/?view=cm&fs=1&to=institucional@predicta.ar';

export default function FooterSection() {
    const { pathname } = useLocation();
    const navigate = useNavigate();

    // Links a secciones de la home: si estás en otra página, primero vuelve a la home.
    const irA = (id) => {
        if (pathname === '/') document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        else navigate(`/#${id}`);
    };
    const link = 'font-google-sans text-[14px] text-[#A9B6DA] hover:text-[#FEFEFE] transition-colors';

    return (
        <footer className="bg-[#000030] border-t border-white/10 pt-16 pb-10">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="grid grid-cols-2 md:grid-cols-12 gap-10 mb-14">
                    <div className="col-span-2 md:col-span-5">
                        <img src="/img/logo-predicta.svg" alt="Predicta" className="h-8 w-auto" />
                        <p className="font-funnel text-[22px] leading-snug text-[#FEFEFE] mt-6 max-w-sm">
                            Lo que pasa en el país, medido para <span className="text-[#4D8BFF]">tu empresa.</span>
                        </p>
                        <div className="flex gap-3 mt-6">
                            <a href={REDES.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram de Predicta"
                                className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-[#A9B6DA] hover:text-[#FEFEFE] hover:border-white/40 transition-colors">
                                <Instagram className="w-4 h-4" />
                            </a>
                            <a href={REDES.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn de Predicta"
                                className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-[#A9B6DA] hover:text-[#FEFEFE] hover:border-white/40 transition-colors">
                                <Linkedin className="w-4 h-4" />
                            </a>
                            <a href={MAIL} target="_blank" rel="noopener noreferrer" aria-label="Mail de Predicta"
                                className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-[#A9B6DA] hover:text-[#FEFEFE] hover:border-white/40 transition-colors">
                                <Mail className="w-4 h-4" />
                            </a>
                        </div>
                    </div>

                    <div className="md:col-span-3 md:col-start-7">
                        <div className="font-google-sans text-[12px] font-medium uppercase tracking-[0.18em] text-[#4D8BFF] mb-5">Producto</div>
                        <ul className="space-y-3">
                            <li><button onClick={() => irA('la-app')} className={link}>La app</button></li>
                            <li><a href="https://app.predicta.ar/bienvenida" className={link}>Probala gratis</a></li>
                            <li><button onClick={() => irA('mapa')} className={link}>Mapa de riesgo</button></li>
                            <li><button onClick={() => irA('numeros')} className={link}>Por qué elegirnos</button></li>
                        </ul>
                    </div>

                    <div className="md:col-span-3">
                        <div className="font-google-sans text-[12px] font-medium uppercase tracking-[0.18em] text-[#4D8BFF] mb-5">Empresa</div>
                        <ul className="space-y-3">
                            <li><Link to="/equipo" className={link}>Equipo</Link></li>
                            <li><a href={MAIL} target="_blank" rel="noopener noreferrer" className={link}>institucional@predicta.ar</a></li>
                            <li><a href={REDES.instagram} target="_blank" rel="noopener noreferrer" className={link}>Instagram</a></li>
                            <li><a href={REDES.linkedin} target="_blank" rel="noopener noreferrer" className={link}>LinkedIn</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-6">
                    <p className="font-google-sans text-[12px] text-white/40">
                        © 2026 Predicta. Incubado en CEI-UCC. Todos los derechos reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
}
