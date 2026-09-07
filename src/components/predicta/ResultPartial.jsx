import React from 'react';
import { motion } from 'framer-motion';
import GaugeSVG from './GaugeSVG';
import { PROTOCOLS, VARIABLE_NAMES } from './testData';

function getVerdict(score, hasKnockouts) {
    if (hasKnockouts) return { bg: 'bg-[#C0392B]', text: 'text-white', label: '● ROJO CRÍTICO — No avanzar' };
    if (score >= 4.1) return { bg: 'bg-[#EAF3DE]', text: 'text-[#27500A]', label: '● VERDE — Condiciones favorables' };
    if (score >= 3.1) return { bg: 'bg-[#FAEEDA]', text: 'text-[#633806]', label: '● AMARILLO — Precaución' };
    if (score >= 2.1) return { bg: 'bg-[#FCEBEB]', text: 'text-[#791F1F]', label: '● ROJO CAUTELOSO — Pausar' };
    return { bg: 'bg-[#C0392B]', text: 'text-white', label: '● ROJO CRÍTICO — No avanzar' };
}

function getScoreColor(score) {
    if (score >= 4.1) return 'text-[#27AE60]';
    if (score >= 3.1) return 'text-[#F39C12]';
    return 'text-[#E74C3C]';
}

function getInterpretation(score, hasKnockouts) {
    if (hasKnockouts) return 'Se detectaron condiciones críticas que requieren atención inmediata antes de avanzar.';
    if (score >= 4.1) return 'El entorno presenta condiciones favorables para avanzar con tu decisión.';
    if (score >= 3.1) return 'Existen factores que requieren atención antes de tomar una decisión definitiva.';
    return 'El nivel de riesgo actual no recomienda avanzar sin abordar las vulnerabilidades detectadas.';
}

export default function ResultPartial({ result, protocol }) {
    const protocolData = PROTOCOLS[protocol];
    const verdict = getVerdict(result.ivpScore, result.hasKnockouts);
    const scoreColor = getScoreColor(result.ivpScore);

    return (
        <div className="max-w-xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
            >
                {/* Protocol badge */}
                <div className="text-center mb-6">
                    <span className="inline-flex px-3 py-1 rounded-full bg-accent text-primary text-[12px] font-medium">
                        Protocolo {protocolData.short}
                    </span>
                </div>

                {/* Score */}
                <div className="text-center mb-2">
                    <GaugeSVG score={result.ivpScore} />
                    <div className={`text-[56px] font-bold ${scoreColor} -mt-4`}>
                        {result.ivpScore.toFixed(2)}
                    </div>
                    <p className="text-[13px] text-muted-foreground">sobre 5.0</p>
                </div>

                {/* Verdict badge */}
                <div className="text-center mb-4">
                    <span className={`inline-flex px-4 py-1.5 rounded-full text-[13px] font-medium ${verdict.bg} ${verdict.text}`}>
                        {verdict.label}
                    </span>
                </div>

                {/* Interpretation */}
                <p className="text-center text-[14px] text-muted-foreground mb-8">
                    {getInterpretation(result.ivpScore, result.hasKnockouts)}
                </p>

                {/* Separator */}
                <div className="border-t border-dashed border-border my-8" />
                <p className="text-center text-[12px] text-muted-foreground mb-6">
                    Diagnóstico variable por variable
                </p>

                {/* Blurred section */}
                <div className="relative">
                    <div className="blur-[5px] pointer-events-none select-none">
                        <div className="bg-white rounded-xl border p-4 space-y-3">
                            {protocolData.variables.map((v) => (
                                <div key={v} className="flex items-center justify-between py-2 border-b border-border/40 last:border-0">
                                    <span className="text-[14px] font-medium">{VARIABLE_NAMES[v]}</span>
                                    <div className="flex items-center gap-3">
                                        <span className="text-[14px] font-semibold">3.50</span>
                                        <span className="px-2 py-0.5 rounded-full text-[11px] bg-[#FAEEDA] text-[#633806]">Amarillo</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="absolute inset-0 bg-white/55 rounded-xl" />
                </div>
            </motion.div>
        </div>
    );
}