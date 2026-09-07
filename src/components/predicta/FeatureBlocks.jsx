import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

function Feature({ id, bg, eyebrowColor, eyebrow, title, text, visual, reverse }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-60px' });
    const isDark = bg === 'dark';

    return (
        <section id={id} className={`py-16 md:py-24 ${isDark ? 'bg-[#000030]' : bg === 'gray' ? 'bg-[#F7F8FA]' : 'bg-white'}`}>
            <div className="max-w-5xl mx-auto px-4 sm:px-6">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 md:gap-16`}
                >
                    {/* Text */}
                    <div className="flex-1">
                        <span className={`text-[11px] font-semibold tracking-[0.15em] uppercase ${isDark ? 'text-white/40' : 'text-[#0059FF]'}`}>
                            {eyebrow}
                        </span>
                        <h2 className={`font-funnel text-[26px] md:text-[32px] font-bold lowercase mt-3 mb-5 leading-[1.1] ${isDark ? 'text-white' : 'text-[#020202]'}`}>
                            {title}
                        </h2>
                        <p className={`text-[15px] leading-relaxed font-google-sans ${isDark ? 'text-white/60' : 'text-[#555]'}`}>
                            {text}
                        </p>
                    </div>

                    {/* Visual */}
                    <div className="flex-1 w-full">
                        {visual}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

function IVPMockup() {
    return (
        <div className="bg-[#0D1B4B] rounded-2xl p-6 border border-white/10 shadow-2xl">
            <div className="text-[11px] text-white/40 uppercase tracking-widest mb-4">IVP — Índice de Viabilidad Predicta</div>
            <div className="flex items-end gap-4 mb-6">
                <span className="font-funnel text-[72px] font-bold text-[#0059FF] leading-none">3.8</span>
                <div className="mb-2">
                    <div className="text-white/40 text-[12px]">de 5.0</div>
                    <div className="inline-flex items-center gap-1.5 bg-yellow-500/10 border border-yellow-500/30 rounded-full px-3 py-1 mt-1">
                        <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
                        <span className="text-yellow-400 text-[11px] font-medium">Condicionar avance</span>
                    </div>
                </div>
            </div>
            <div className="space-y-2.5">
                {[
                    { label: 'Entorno Normativo', val: 4.2, color: '#22c55e' },
                    { label: 'Calidad Institucional', val: 2.8, color: '#f59e0b' },
                    { label: 'Viabilidad Financiera', val: 4.5, color: '#22c55e' },
                    { label: 'Inteligencia y Preparación', val: 2.1, color: '#ef4444' },
                ].map(v => (
                    <div key={v.label}>
                        <div className="flex justify-between text-[11px] mb-1">
                            <span className="text-white/50">{v.label}</span>
                            <span className="text-white/70 font-medium">{v.val}</span>
                        </div>
                        <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                            <div className="h-full rounded-full" style={{ width: `${(v.val / 5) * 100}%`, backgroundColor: v.color }} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

function TimelineMockup() {
    const events = [
        { date: 'Ene 2025', text: 'Nueva normativa de exportación', type: 'warn' },
        { date: 'Mar 2025', text: 'Cambio de gobierno provincial', type: 'alert' },
        { date: 'May 2025', text: 'Acuerdo bilateral firmado', type: 'ok' },
        { date: 'Jun 2025', text: 'Recalibración IVP → 4.1', type: 'ok' },
    ];
    return (
        <div className="bg-white border border-[#e5e7eb] rounded-2xl p-6 shadow-md">
            <div className="text-[11px] text-[#999] uppercase tracking-widest mb-5">Monitoreo de triggers · MEP Brasil</div>
            <div className="space-y-4">
                {events.map((e, i) => (
                    <div key={i} className="flex items-start gap-3">
                        <div className={`w-2 h-2 rounded-full mt-1.5 flex-shrink-0 ${e.type === 'ok' ? 'bg-green-500' : e.type === 'warn' ? 'bg-yellow-400' : 'bg-red-500'}`} />
                        <div>
                            <div className="text-[11px] text-[#999]">{e.date}</div>
                            <div className="text-[13px] text-[#020202] font-medium">{e.text}</div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="mt-5 pt-4 border-t border-[#eee] flex items-center justify-between">
                <span className="text-[12px] text-[#999]">Vigencia del análisis</span>
                <span className="text-[12px] font-semibold text-[#0059FF]">6 meses con recalibración</span>
            </div>
        </div>
    );
}

function VeredictoMockup() {
    return (
        <div className="bg-white border border-[#e5e7eb] rounded-2xl p-6 shadow-md">
            <div className="text-[11px] text-[#999] uppercase tracking-widest mb-4">Veredicto · IVC Argentina</div>
            <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-xl bg-yellow-50 border border-yellow-200 flex items-center justify-center">
                    <span className="text-xl">⚠️</span>
                </div>
                <div>
                    <div className="font-funnel text-[18px] font-bold text-[#020202] lowercase">condicionar avance</div>
                    <div className="text-[12px] text-[#999]">IVP 3.4 / 5.0</div>
                </div>
            </div>
            <div className="space-y-2 mb-5">
                <div className="text-[11px] font-semibold text-[#0059FF] uppercase tracking-wider mb-1.5">Deal-breakers</div>
                {['Historial de congelamiento de precios (P3)', 'Competidor con subsidio diferencial (P6)'].map(d => (
                    <div key={d} className="flex items-start gap-2 bg-red-50 rounded-lg px-3 py-2">
                        <span className="text-red-500 mt-0.5">✕</span>
                        <span className="text-[12px] text-[#444]">{d}</span>
                    </div>
                ))}
            </div>
            <div className="text-[11px] font-semibold text-[#0059FF] uppercase tracking-wider mb-1.5">Palanca crítica</div>
            <div className="flex items-start gap-2 bg-blue-50 rounded-lg px-3 py-2">
                <span className="text-[#0059FF] mt-0.5">→</span>
                <span className="text-[12px] text-[#444]">Mejorar Viabilidad Financiera (+0.6 pts potencial)</span>
            </div>
        </div>
    );
}

export default function FeatureBlocks() {
    return (
        <>
            <Feature
                id="metodologia"
                bg="dark"
                eyebrow="EL ENTORNO NON MARKET, CUANTIFICADO"
                title="Ingresá tu decisión. Nosotros cuantificamos el entorno."
                text="¿Estás evaluando expandirte a Brasil, instalar una planta en otra provincia o entrar en una licitación pública? Predicta analiza el entorno político, regulatorio e institucional de esa decisión y te entrega el IVP. No una opinión. Un índice construido sobre hechos verificables con fuentes externas."
                visual={<IVPMockup />}
                reverse={false}
            />
            <Feature
                bg="white"
                eyebrow="MONITOREO CONTINUO"
                title="el entorno cambia. tu análisis también."
                text="Olvidate de los informes que quedan obsoletos. Predicta monitorea los triggers políticos y regulatorios que afectan tu decisión: cambios de gobierno, nuevas normativas, conflictos de stakeholders, variaciones en el riesgo institucional. El diagnóstico tiene vigencia de 6 meses, con recalibración inmediata ante eventos críticos."
                visual={<TimelineMockup />}
                reverse={true}
            />
            <Feature
                bg="gray"
                eyebrow="VEREDICTO ACCIONABLE"
                title="Cada análisis incluye un veredicto concreto, no un informe para archivar."
                text="El IVP no es un PDF de 40 páginas. Es un número entre 1 y 5, con los deal-breakers identificados, las palancas de mejora señaladas y una recomendación directa: avanzar, condicionar o frenar. Lo que necesitás para decidir, sin lo que no necesitás."
                visual={<VeredictoMockup />}
                reverse={false}
            />
        </>
    );
}