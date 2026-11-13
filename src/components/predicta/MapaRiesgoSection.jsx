import React from 'react';
import { ArrowRight } from 'lucide-react';
import Revelar, { estilo } from './nuevo/Revelar';

const MAPA_URL = 'https://mapa.predicta.ar';

export default function MapaRiesgoSection() {
    return (
        <section id="mapa" className={`${estilo.seccion} scroll-mt-16`}>
            <div
                className="absolute left-1/2 top-[55%] -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] pointer-events-none"
                style={{ background: 'radial-gradient(closest-side, rgba(0,89,255,.22), rgba(0,89,255,0) 70%)' }}
            />
            <div className={`${estilo.contenedor} relative`}>
                <Revelar className="max-w-3xl">
                    <p className={estilo.eyebrow}>Herramienta gratuita</p>
                    <h2 className={`${estilo.titulo} mt-5`}>Mapa de riesgo exportador</h2>
                    <p className={`${estilo.bajada} mt-6`}>
                        Pasá el mouse por un país y mirá el riesgo político, institucional y estructural
                        del entorno, visto desde Argentina. Es la probabilidad general: cuánto le pega a tu
                        empresa, lo medimos nosotros.
                    </p>
                </Revelar>

                <Revelar className="mt-12">
                    <div className="rounded-3xl overflow-hidden border border-white/[0.12] bg-[#000030] shadow-[0_40px_120px_-30px_rgba(0,89,255,0.45)]">
                        <iframe
                            src={`${MAPA_URL}/embed`}
                            title="Mapa de riesgo exportador Predicta"
                            loading="lazy"
                            className="block w-full h-[480px] md:h-[620px] border-0"
                        />
                    </div>
                </Revelar>

                <div className="mt-10 flex flex-col sm:flex-row gap-3">
                    <a href={MAPA_URL} target="_blank" rel="noopener noreferrer" className={estilo.boton}>
                        Abrir el mapa completo
                        <ArrowRight className="w-4 h-4" />
                    </a>
                    <a href={`${MAPA_URL}/metodologia`} target="_blank" rel="noopener noreferrer" className={estilo.botonSecundario}>
                        Cómo se calcula
                    </a>
                </div>
            </div>
        </section>
    );
}
