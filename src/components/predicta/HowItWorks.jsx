import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const steps = [
    {
        num: '01.',
        title: 'Describís tu decisión',
        desc: 'Expansión a un nuevo mercado, inversión en infraestructura, negociación con un socio estratégico, cambio regulatorio que te afecta. El sistema identifica el protocolo correcto.',
    },
    {
        num: '02.',
        title: 'Respondés el diagnóstico',
        desc: '9 a 12 preguntas basadas en lo que ya sabés de tu empresa y tu contexto. Sin consultores intermediarios. Sin datos que no tenés.',
    },
    {
        num: '03.',
        title: 'Recibís tu IVP',
        desc: 'Un número entre 1 y 5, los deal-breakers identificados, las palancas de mejora y una recomendación concreta: avanzar, condicionar o frenar.',
    },
];

function Step({ step, index }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-50px' });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className="flex flex-col"
        >
            <span className="font-funnel text-[48px] font-bold text-[#0059FF] leading-none mb-4">
                {step.num}
            </span>
            <h3 className="font-funnel text-[20px] font-semibold text-[#020202] mb-3">
                {step.title}
            </h3>
            <p className="text-[14px] text-[#555] leading-relaxed font-google-sans">
                {step.desc}
            </p>
        </motion.div>
    );
}

export default function HowItWorks() {
    return (
        <section id="como-funciona" className="bg-[#F7F8FA] py-16 md:py-24">
            <div className="max-w-5xl mx-auto px-4 sm:px-6">
                <div className="text-center mb-14">
                    <span className="text-[11px] font-semibold tracking-[0.15em] text-[#0059FF] uppercase">
                        ASÍ FUNCIONA PREDICTA
                    </span>
                    <h2 className="font-funnel text-[28px] md:text-[36px] font-bold text-[#020202] mt-3">
                        Del dato a la decisión en tres pasos
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
                    {steps.map((step, i) => (
                        <Step key={i} step={step} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}