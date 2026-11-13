import React, { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';

/** Aparece suave (sube y gana opacidad) cuando entra en pantalla. Sin animación con "reducir movimiento". */
export default function Revelar({ children, retraso = 0, className = '' }) {
    const ref = useRef(null);
    const visible = useInView(ref, { once: true, margin: '-60px' });
    const quieto = useReducedMotion();
    if (quieto) return <div className={className}>{children}</div>;
    return (
        <motion.div
            ref={ref}
            className={className}
            initial={{ opacity: 0, y: 28 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: retraso, ease: [0.2, 0.8, 0.2, 1] }}
        >
            {children}
        </motion.div>
    );
}

/** Estilos compartidos del diseño nuevo. */
export const estilo = {
    seccion: 'relative bg-[#000030] py-24 md:py-32',
    contenedor: 'max-w-6xl mx-auto px-4 sm:px-6',
    eyebrow: 'font-google-sans text-[12px] sm:text-[13px] font-medium uppercase tracking-[0.2em] text-[#4D8BFF]',
    titulo: 'font-funnel text-[38px] sm:text-[52px] lg:text-[64px] font-semibold leading-[1.04] tracking-tight text-[#FEFEFE]',
    bajada: 'font-google-sans text-[17px] sm:text-[19px] leading-relaxed text-[#A9B6DA]',
    tarjeta: 'rounded-3xl border border-white/[0.12] bg-[rgba(8,12,60,.72)] backdrop-blur-md',
    boton:
        'inline-flex items-center justify-center gap-2 h-[54px] px-8 rounded-full bg-[#0059FF] text-[#FEFEFE] font-google-sans font-medium text-[16px] hover:bg-[#0059FF]/90 transition-colors shadow-lg shadow-[#0059FF]/30',
    botonSecundario:
        'inline-flex items-center justify-center gap-2 h-[54px] px-8 rounded-full border border-white/25 text-[#FEFEFE] font-google-sans font-medium text-[16px] hover:bg-white/10 transition-colors',
};
