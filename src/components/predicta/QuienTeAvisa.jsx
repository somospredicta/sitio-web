import React, { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';

export default function QuienTeAvisa() {
    const ref = useRef(null);
    const visible = useInView(ref, { once: true, margin: '-80px' });
    const quieto = useReducedMotion();
    const anim = (retraso) =>
        quieto
            ? {}
            : {
                  initial: { opacity: 0, y: 24 },
                  animate: visible ? { opacity: 1, y: 0 } : {},
                  transition: { duration: 0.8, delay: retraso, ease: [0.2, 0.8, 0.2, 1] },
              };

    return (
        <section className="bg-[#000030] py-[120px]">
            <div ref={ref} className="max-w-3xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center">
                <motion.p {...anim(0)} className="font-google-sans text-[18px] sm:text-[22px] leading-relaxed text-[#A9B6DA]">
                    Todos los días, miles de empresas argentinas se levantan a producir. Una ley cambia. Un arancel sube. Una
                    elección da vuelta las reglas.
                </motion.p>
                <motion.h2
                    {...anim(0.25)}
                    className="font-funnel text-[42px] sm:text-[56px] lg:text-[68px] font-semibold leading-[1.04] tracking-tight text-[#FEFEFE] mt-10"
                >
                    ¿Quién te avisa?
                </motion.h2>
                <motion.img {...anim(0.5)} src="/img/isotipo-predicta.svg" alt="Predicta" className="h-14 w-auto mt-10" />
            </div>
        </section>
    );
}
