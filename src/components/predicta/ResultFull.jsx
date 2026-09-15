import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Calendar, Mail, RotateCcw } from 'lucide-react';
import GaugeSVG from './GaugeSVG';
import { PROTOCOLS, VARIABLE_NAMES, VARIABLE_WARNINGS } from './testData';

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

function getScoreBadge(score) {
    if (score >= 4.1) return { bg: 'bg-[#EAF3DE]', text: 'text-[#27500A]', label: 'Verde' };
    if (score >= 3.1) return { bg: 'bg-[#FAEEDA]', text: 'text-[#633806]', label: 'Amarillo' };
    return { bg: 'bg-[#FCEBEB]', text: 'text-[#791F1F]', label: 'Rojo' };
}

function getLeverAction(variable) {
    const actions = {
        I1: 'Revisá la normativa vigente y consultá con un especialista regulatorio antes de avanzar.',
        I2: 'Mapeá los actores clave y construí una red de aliados para tu decisión.',
        I3: 'Evaluá el historial institucional y diseñá contingencias ante posible arbitrariedad.',
        I4: 'Invertí en inteligencia del entorno: asesoría local, estudios de mercado y red de contactos.',
        I5: 'Construí un modelo financiero robusto con escenarios y validación profesional externa.',
        CAGE: 'Reducí la distancia estructural con el mercado destino a través de socios locales y logística.',
    };
    return actions[variable] || '';
}

export default function ResultFull({ result, protocol, leadData, onRestart }) {
    const protocolData = PROTOCOLS[protocol];
    const verdict = getVerdict(result.ivpScore, result.hasKnockouts);
    const now = new Date();
    const monthYear = now.toLocaleDateString('es-AR', { month: 'long', year: 'numeric' });

    const mailSubject = encodeURIComponent(`Solicitud de análisis completo IVP — ${leadData.company}`);
    const mailBody = encodeURIComponent(
        `Hola equipo Predicta, completé el autodiagnóstico express y quisiera avanzar con el análisis completo.\n\nMi IVP Express fue ${result.ivpScore.toFixed(2)}.\n\nNombre: ${leadData.first_name} ${leadData.last_name}\nEmpresa: ${leadData.company}\nEmail: ${leadData.email}\n\nQuedo a disposición.`
    );

    return (
        <div className="max-w-2xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
            >
                {/* Disclaimer */}
                <div className="bg-[#F7F8FA] border border-[#e5e7eb] rounded-xl px-5 py-4 mb-6">
                    <p className="text-[13px] text-[#555] leading-relaxed font-google-sans mb-2">
                        Este diagnóstico mide tu nivel de preparación para esta decisión. Las preguntas que respondiste son las que vos podés responder desde adentro de tu empresa.
                    </p>
                    <p className="text-[13px] text-[#555] leading-relaxed font-google-sans">
                        El análisis completo IVP de Predicta incorpora adicionalmente el análisis del entorno político, regulatorio e institucional con fuentes externas verificadas — la parte del riesgo que no podés ver desde adentro.
                    </p>
                </div>

                {/* Section 1 — Summary */}
                <div className="text-center mb-8">
                    <p className="text-[13px] text-slate-500 font-google-sans mb-4">
                        Diagnóstico de {leadData.company} — {monthYear.charAt(0).toUpperCase() + monthYear.slice(1)}
                    </p>

                    <GaugeSVG score={result.ivpScore} size={200} />

                    <div className={`text-[36px] font-bold ${getScoreColor(result.ivpScore)} -mt-2`}>
                        {result.ivpScore.toFixed(2)}
                    </div>
                    <p className="text-[13px] text-slate-500 font-google-sans mb-3">sobre 5.0</p>

                    <span className={`inline-flex px-4 py-1.5 rounded-full text-[13px] font-semibold font-google-sans ${verdict.bg} ${verdict.text}`}>
                        {verdict.label}
                    </span>
                </div>

                {/* Section 2 — Variable table */}
                <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-5 mb-6">
                    <div className="grid grid-cols-3 text-[11px] font-semibold text-slate-400 uppercase tracking-wider pb-3 border-b border-slate-100 mb-1 font-google-sans">
                        <span>Variable</span>
                        <span className="text-center">Score</span>
                        <span className="text-right">Estado</span>
                    </div>
                    {protocolData.variables.map((v) => {
                        const score = result.variableScores[v] || 5;
                        const badge = getScoreBadge(score);
                        const showWarning = score < 4.1;

                        return (
                            <div key={v} className="py-3 border-b border-slate-100 last:border-0 font-google-sans">
                                <div className="grid grid-cols-3 items-center">
                                    <span className="text-[14px] font-medium text-slate-800">{VARIABLE_NAMES[v]}</span>
                                    <div className="text-center">
                                        <span className={`inline-flex px-2.5 py-0.5 rounded-full text-[13px] font-semibold ${badge.bg} ${badge.text}`}>
                                            {score.toFixed(2)}
                                        </span>
                                    </div>
                                    <span className={`text-right text-[12px] font-medium ${badge.text}`}>{badge.label}</span>
                                </div>
                                {showWarning && (
                                    <p className="text-[12px] italic text-slate-500 mt-1.5 pl-0">
                                        {VARIABLE_WARNINGS[v]}
                                    </p>
                                )}
                            </div>
                        );
                    })}
                </div>

                {/* Section 3 — Knockouts */}
                {result.hasKnockouts && (
                    <div className="bg-[#FCEBEB] border-l-[3px] border-[#E74C3C] rounded-r-lg px-4 py-3 mb-6">
                        <p className="text-[14px] font-semibold text-[#791F1F] mb-1 font-google-sans">
                            ⚠ {result.knockouts.length} condicion{result.knockouts.length === 1 ? '' : 'es'} crítica{result.knockouts.length === 1 ? '' : 's'} detectada{result.knockouts.length === 1 ? '' : 's'}
                        </p>
                        <p className="text-[13px] text-[#791F1F] font-google-sans">
                            Estas condiciones requieren resolución antes de avanzar, independientemente del score promedio.
                        </p>
                    </div>
                )}

                {/* Section 4 — Critical lever */}
                {result.criticalLever && (
                    <div className="border-2 border-[#0059FF] rounded-2xl bg-blue-50/50 p-5 mb-8">
                        <div className="flex items-start gap-3">
                            <div className="flex-shrink-0 mt-0.5">
                                <Lightbulb className="w-5 h-5 text-[#0059FF]" />
                            </div>
                            <div>
                                <h4 className="text-[14px] font-bold text-slate-900 mb-1 font-funnel">Tu palanca crítica</h4>
                                <p className="text-[14px] text-slate-800 font-google-sans">
                                    Si resolvés <strong>{VARIABLE_NAMES[result.criticalLever]}</strong>, tu IVP pasa de{' '}
                                    <strong>{result.ivpScore.toFixed(2)}</strong> a{' '}
                                    <strong>{result.projectedScore.toFixed(2)}</strong>
                                </p>
                                <p className="text-[13px] text-slate-500 mt-1.5 font-google-sans">
                                    {getLeverAction(result.criticalLever)}
                                </p>
                            </div>
                        </div>
                    </div>
                )}

                {/* Section 5 — CTAs */}
                <div className="text-center font-google-sans">
                    <h3 className="text-[18px] font-semibold text-slate-900 mb-6 font-funnel">
                        ¿Qué querés hacer con este diagnóstico?
                    </h3>

                    <a
                        href="https://calendly.com/institucional-predicta/30min"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 w-full h-[52px] rounded-lg bg-[#0059FF] text-white font-medium text-[15px] hover:bg-[#0059FF]/90 transition-colors mb-2"
                    >
                        <Calendar className="w-4 h-4" />
                        Agendar una reunión virtual con Predicta
                    </a>
                    <p className="text-[11px] text-slate-500 mb-5">
                        30 minutos · Sin costo · Por videollamada
                    </p>

                    <p className="text-[12px] text-slate-400 mb-5">o</p>

                    <a
                        href={`mailto:institucional@predicta.ar?subject=${mailSubject}&body=${mailBody}`}
                        className="flex items-center justify-center gap-2 w-full h-[52px] rounded-lg border border-slate-300 bg-white text-slate-900 font-medium text-[15px] hover:bg-slate-50 transition-colors mb-2"
                    >
                        <Mail className="w-4 h-4" />
                        Quiero el análisis completo IVP
                    </a>
                    <p className="text-[11px] text-slate-500 mb-8">
                        Protocolo completo de 85 preguntas con informe ejecutivo
                    </p>

                    <button
                        onClick={onRestart}
                        className="inline-flex items-center gap-1.5 text-[13px] text-slate-500 hover:text-slate-900 transition-colors"
                    >
                        <RotateCcw className="w-3.5 h-3.5" />
                        Hacer el diagnóstico de nuevo
                    </button>
                </div>
            </motion.div>
        </div>
    );
}