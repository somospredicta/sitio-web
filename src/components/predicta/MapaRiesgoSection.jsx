import React from 'react';
import { ArrowRight } from 'lucide-react';

const MAPA_URL = 'https://mapa.predicta.ar';

export default function MapaRiesgoSection() {
    return (
        <section id="mapa" className="bg-[#000030] py-16 md:py-24 scroll-mt-16">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="max-w-2xl mb-10">
                    <p className="text-[13px] uppercase tracking-widest text-[#0059FF] font-semibold mb-3 font-google-sans">
                        Herramienta gratuita
                    </p>
                    <h2 className="font-funnel text-[30px] md:text-[40px] font-bold text-white leading-[1.1] mb-5">
                        Mapa de riesgo exportador
                    </h2>
                    <p className="text-[16px] text-white/70 font-google-sans leading-relaxed">
                        Pasá el mouse por un país y mirá el riesgo político, institucional y estructural
                        del entorno, visto desde Argentina. Es la probabilidad general: cuánto le pega a tu
                        empresa, lo medimos nosotros.
                    </p>
                </div>

                <div className="rounded-2xl overflow-hidden border border-white/10 bg-[#000030]">
                    <iframe
                        src={`${MAPA_URL}/embed`}
                        title="Mapa de riesgo exportador Predicta"
                        loading="lazy"
                        className="block w-full h-[480px] md:h-[600px] border-0"
                    />
                </div>

                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                    <a
                        href={MAPA_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 h-[52px] px-8 rounded-full bg-[#0059FF] text-white font-semibold text-[15px] hover:bg-[#0059FF]/90 transition-all duration-200"
                    >
                        Abrir el mapa completo
                        <ArrowRight className="w-4 h-4" />
                    </a>
                    <a
                        href={`${MAPA_URL}/metodologia`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center h-[52px] px-8 rounded-full border-2 border-white/30 text-white font-medium text-[15px] hover:bg-white/10 transition-all duration-200"
                    >
                        Cómo se calcula
                    </a>
                </div>
            </div>
        </section>
    );
}
