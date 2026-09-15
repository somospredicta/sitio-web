import React from 'react';

const productLinks = ['Cómo funciona', 'Metodología', 'Casos', 'Autodiagnóstico'];
const companyLinks = ['Sobre nosotros', 'Contacto'];

const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
};

const anchorMap = {
    'Cómo funciona': '#como-funciona',
    'Metodología': '#metodologia',
    'Casos': '#numeros',
    'Autodiagnóstico': '#test',
    'Sobre nosotros': '#equipo',
    'Contacto': '#contacto',
};

export default function FooterSection() {
    return (
        <footer className="bg-[#000030] pt-14 pb-8">
            <div className="max-w-5xl mx-auto px-4 sm:px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                    {/* Brand */}
                    <div className="col-span-2 md:col-span-1">
                        <div className="flex items-center gap-2">
                            {<img src="https://media.base44.com/images/public/6a10ca1504aa640dc039c6a0/c82ed7f4c_isotitpoazulespectro.png" alt="Predicta" className="h-8 w-auto" />}
                            <span className="font-funnel text-[22px] font-bold text-white lowercase">predicta</span>
                        </div>
                        <p className="text-[13px] text-white/40 mt-2 leading-relaxed font-google-sans">
                            El entorno político y regulatorio, cuantificado.
                        </p>
                    </div>

                    {/* Producto */}
                    <div>
                        <div className="text-[11px] font-semibold text-white/30 uppercase tracking-widest mb-4">Producto</div>
                        <ul className="space-y-2.5">
                            {productLinks.map(l => (
                                <li key={l}>
                                    <button
                                        onClick={() => scrollTo(anchorMap[l])}
                                        className="text-[13px] text-white/50 hover:text-white transition-colors font-google-sans"
                                    >
                                        {l}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Empresa */}
                    <div>
                        <div className="text-[11px] font-semibold text-white/30 uppercase tracking-widest mb-4">Empresa</div>
                        <ul className="space-y-2.5">
                            {companyLinks.map(l => (
                                <li key={l}>
                                    <button
                                        onClick={() => scrollTo(anchorMap[l])}
                                        className="text-[13px] text-white/50 hover:text-white transition-colors font-google-sans"
                                    >
                                        {l}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contacto */}
                    <div>
                        <div className="text-[11px] font-semibold text-white/30 uppercase tracking-widest mb-4">Contacto</div>
                        <ul className="space-y-2.5">
                            <li>
                                <a href="mailto:institucional@predicta.ar" className="text-[13px] text-white/50 hover:text-white transition-colors font-google-sans">
                                    institucional@predicta.ar
                                </a>
                            </li>
                            <li>
                                <span className="text-[13px] text-white/50 font-google-sans">@predicta.ar</span>
                            </li>
                            <li className="flex gap-3 pt-1">
                                <a href="https://instagram.com/predicta.ar" target="_blank" rel="noopener noreferrer" className="text-[13px] text-white/50 hover:text-white transition-colors font-google-sans">
                                    Instagram
                                </a>
                                <span className="text-white/20">·</span>
                                <a href="https://linkedin.com/company/predicta-ar" target="_blank" rel="noopener noreferrer" className="text-[13px] text-white/50 hover:text-white transition-colors font-google-sans">
                                    LinkedIn
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-6">
                    <p className="text-[12px] text-white/30 text-center font-google-sans">
                        © 2026 Predicta. Incubado en CEI-UCC. Todos los derechos reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
}   