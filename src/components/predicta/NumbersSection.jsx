import React, { useRef, useState, useEffect } from 'react';
import { useInView } from 'framer-motion';

const metrics = [
    { number: 100, suffix: '+', label: 'variables del entorno político y regulatorio contempladas en cada análisis' },
    { number: 2, suffix: '', label: 'founders que van a atender tu caso de forma personalizada' },
    { number: 4, suffix: '', label: 'protocolos especializados según el tipo de decisión: expansión · regulación · stakeholders · capital' },
    { number: 31, suffix: '', label: 'países cubiertos por el módulo de cumplimiento del Acuerdo UE-Mercosur' },
];

function Counter({ target, suffix, active }) {
    const [val, setVal] = useState(0);

    useEffect(() => {
        if (!active) return;
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
        <span className="font-funnel text-[56px] md:text-[72px] font-bold text-[#0059FF] leading-none">
            {val}{suffix}
        </span>
    );
}

export default function NumbersSection() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-80px' });

    return (
        <section id="numeros" className="bg-white py-16 md:py-24">
            <div className="max-w-5xl mx-auto px-4 sm:px-6">
                <div className="text-center mb-14">
                    <span className="text-[11px] font-semibold tracking-[0.15em] text-[#0059FF] uppercase">
                        POR QUÉ ELEGIRNOS
                    </span>
                </div>

                <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6 mb-12">
                    {metrics.map((m, i) => (
                        <div key={i} className="text-center">
                            <Counter target={m.number} suffix={m.suffix} active={inView} />
                            <p className="text-[13px] text-[#555] mt-3 leading-snug font-google-sans">
                                {m.label}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="text-center">
                    <div className="inline-flex items-center gap-2 bg-[#F7F8FA] border border-[#e5e7eb] rounded-full px-5 py-2.5">
                        <span className="text-[13px] text-[#555] font-google-sans">
                            Incubado en el <strong className="text-[#020202]">IGNA — Centro de Emprendedurismo e Innovación · UCC</strong>
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}