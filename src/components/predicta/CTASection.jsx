import React from 'react';
import { ArrowRight } from 'lucide-react';
import Revelar, { estilo } from './nuevo/Revelar';

export default function CTASection() {
    return (
        <section className="relative bg-[#000030] py-24 md:py-32 overflow-hidden">
            <div className={estilo.contenedor}>
                <Revelar>
                    <div className="relative overflow-hidden rounded-[32px] border border-[#0059FF]/40 px-6 py-16 md:px-16 md:py-20 text-center"
                        style={{ background: 'radial-gradient(120% 140% at 50% 0%, rgba(0,89,255,.35) 0%, rgba(8,12,60,.9) 55%, #000030 100%)' }}
                    >
                        <img src="/img/isotipo-predicta.svg" alt="" className="h-12 w-auto mx-auto" />
                        <h2 className={`${estilo.titulo} mt-8 max-w-3xl mx-auto`}>
                            ¿Listo para saber el número antes de tomar la decisión?
                        </h2>
                        <p className={`${estilo.bajada} mt-6 max-w-2xl mx-auto`}>
                            Probá la app gratis: configurás tu empresa en un minuto y ves cuánto te afecta lo que se viene.
                            Si querés el análisis completo, reservá una reunión con el equipo.
                        </p>
                        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
                            <a href="https://app.predicta.ar/bienvenida" className={estilo.boton}>
                                Probala gratis
                                <ArrowRight className="w-4 h-4" />
                            </a>
                            <a
                                href="https://calendly.com/institucional-predicta/30min"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={estilo.botonSecundario}
                            >
                                Reservar una reunión
                            </a>
                        </div>
                    </div>
                </Revelar>
            </div>
        </section>
    );
}
