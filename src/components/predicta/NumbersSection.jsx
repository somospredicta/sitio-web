import React, { useRef, useState, useEffect } from 'react';
import { useInView } from 'framer-motion';
import Revelar, { estilo } from './nuevo/Revelar';

const metrics = [
    { number: 6, prefix: '', suffix: '', label: 'Frentes de riesgo medidos para tu empresa: económico, político, regulatorio, social y laboral, internacional y tu sector' },
    { number: 3, prefix: '', suffix: '', label: 'Escenarios para cada hecho: optimista, intermedio y pesimista, con qué hacer en cada uno' },
    { number: 100, prefix: '', suffix: '%', label: 'De los datos con fuente y link. Si un dato no está, te lo decimos' },
    { number: 0, prefix: '$', suffix: '', label: 'La app es gratis' },
];

function Counter({ target, prefix, suffix, active }) {
    const [val, setVal] = useState(0);

    useEffect(() => {
        if (!active) return;
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            setVal(target);
            return;
        }
        const duration = 1200;
        const steps = 50;
        const increment = target / steps;
        let current = 0;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                setVal(target);
                clearInterval(timer);
            } else {
                setVal(Math.floor(current));
            }
        }, duration / steps);
        return () => clearInterval(timer);
    }, [active, target]);

    return (
        <span className="font-funnel text-[64px] md:text-[84px] font-semibold leading-none tracking-tight text-[#FEFEFE]">
            {prefix && <span className="text-[#4D8BFF]">{prefix}</span>}
            {val}
            {suffix && <span className="text-[#4D8BFF]">{suffix}</span>}
        </span>
    );
}

export default function NumbersSection() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-80px' });

    return (
        <section id="numeros" className={estilo.seccion}>
            <div className={estilo.contenedor}>
                <Revelar>
                    <p className={estilo.eyebrow}>Por qué elegirnos</p>
                </Revelar>

                <div ref={ref} className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-white/10">
                    {metrics.map((m, i) => (
                        <div
                            key={i}
                            className={`pt-10 pb-6 lg:pr-8 ${i > 0 ? 'lg:pl-8 lg:border-l border-white/10' : ''} ${i % 2 === 1 ? 'sm:pl-8 sm:border-l lg:border-l' : ''}`}
                        >
                            <Counter target={m.number} prefix={m.prefix} suffix={m.suffix} active={inView} />
                            <p className="font-google-sans text-[14px] text-[#A9B6DA] mt-4 leading-relaxed max-w-[260px]">{m.label}</p>
                        </div>
                    ))}
                </div>

                <Revelar className="mt-12">
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-5 py-2.5">
                        <span className="font-google-sans text-[13px] text-[#A9B6DA]">
                            Incubado en el <strong className="font-medium text-[#FEFEFE]">IGNA — Centro de Emprendedurismo e Innovación · UCC</strong>
                        </span>
                    </div>
                </Revelar>
            </div>
        </section>
    );
}
