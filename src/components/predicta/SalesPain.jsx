import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Check } from 'lucide-react';

const rows = [
    {
        pain: '"Tomé una decisión de expansión que parecía sólida y el entorno político la destruyó."',
        solution: 'Identificamos los riesgos no-mercado antes de que tomes la decisión, no después.',
    },
    {
        pain: '"Mis asesores me dicen que el país es complicado, pero nadie me dice cuánto."',
        solution: 'El IVP convierte el riesgo político en un número concreto y verificable.',
    },
    {
        pain: '"Perdí tiempo y plata en una negociación que nunca iba a prosperar por razones regulatorias."',
        solution: 'Detectamos los deal-breakers estructurales en la etapa de evaluación, no al final.',
    },
    {
        pain: '"No sé si el problema es el mercado o el entorno político."',
        solution: 'El doble eje IVP-PI / IAS separa el riesgo institucional del atractivo comercial.',
    },
];

export default function SalesPain() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-60px' });

    return (
        <section className="bg-[#000030] py-16 md:py-24">
            <div className="max-w-5xl mx-auto px-4 sm:px-6">
                <div className="text-center mb-12">
                    <span className="text-[11px] font-semibold tracking-[0.15em] text-white/30 uppercase">
                        POR QUÉ LOS EMPRESARIOS USAN PREDICTA
                    </span>
                    <h2 className="font-funnel text-[28px] md:text-[36px] font-bold text-white mt-3">
                        ¿Reconocés alguna de estas situaciones?
                    </h2>
                </div>

                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="space-y-4"
                >
                    {rows.map((row, i) => (
                        <div key={i} className="grid grid-cols-1 md:grid-cols-2 gap-0 rounded-xl overflow-hidden">
                            {/* Pain */}
                            <div className="bg-[#0D1B4B] px-6 py-5">
                                <p className="text-[14px] text-white/70 italic font-google-sans leading-relaxed">
                                    {row.pain}
                                </p>
                            </div>
                            {/* Solution */}
                            <div className="bg-[#0059FF]/15 border border-[#0059FF]/20 px-6 py-5 flex items-center gap-3">
                                <div className="w-5 h-5 rounded-full bg-[#0059FF] flex items-center justify-center flex-shrink-0">
                                    <Check className="w-3 h-3 text-white" />
                                </div>
                                <p className="text-[14px] text-white/80 font-google-sans leading-relaxed">
                                    {row.solution}
                                </p>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}