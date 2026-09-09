import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const criticalityBadge = {
    critical: { bg: 'bg-[#FCEBEB]', text: 'text-[#791F1F]', label: 'Crítico' },
    relevant: { bg: 'bg-[#FAEEDA]', text: 'text-[#633806]', label: 'Relevante' },
    accessory: { bg: 'bg-[#EAF3DE]', text: 'text-[#27500A]', label: 'Accesorio' },
};

export default function QuestionScreen({ questions, subtitle, onComplete }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [answers, setAnswers] = useState({});
    const [showAlert, setShowAlert] = useState(false);
    const [direction, setDirection] = useState(1);

    const total = questions.length;
    const q = questions[currentIndex];
    const progress = ((currentIndex) / total) * 100;
    const badge = criticalityBadge[q?.criticality] || criticalityBadge.relevant;

    const handleAnswer = (value) => {
        const newAnswers = { ...answers, [q.id]: value };
        setAnswers(newAnswers);

        // Show deal-breaker alert
        if (q.knockout && value === true) {
            setShowAlert(true);
            setTimeout(() => {
                setShowAlert(false);
                advance(newAnswers);
            }, 1500);
        } else {
            setShowAlert(false);
            setTimeout(() => advance(newAnswers), 300);
        }
    };

    const advance = (newAnswers) => {
        if (currentIndex < total - 1) {
            setDirection(1);
            setCurrentIndex(prev => prev + 1);
        } else {
            onComplete(newAnswers);
        }
    };

    return (
        <div className="max-w-xl mx-auto">
            {/* Subtitle */}
            {subtitle && (
                <p className="text-[13px] font-bold text-[#0059FF] uppercase tracking-wider text-center mb-6 font-google-sans">
                    {subtitle}
                </p>
            )}

            {/* Progress bar */}
            <div className="h-1.5 bg-slate-200 rounded-full mb-6 overflow-hidden">
                <motion.div
                    className="h-full bg-[#0059FF] rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                />
            </div>

            <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                    key={currentIndex}
                    custom={direction}
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -40 }}
                    transition={{ duration: 0.2, ease: 'easeOut' }}
                >
                    {/* Counter */}
                    <div className="text-right mb-6">
                        <span className="text-[12px] text-slate-500 font-google-sans">
                            Pregunta {currentIndex + 1} de {total}
                        </span>
                    </div>

                    {/* Criticality badge */}
                    <div className="mb-4">
                        <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-medium font-google-sans ${badge.bg} ${badge.text}`}>
                            {q.knockout && <span>⚡</span>}
                            {badge.label}
                        </span>
                    </div>

                    {/* Question */}
                    <h3 className="text-[20px] font-medium text-slate-900 leading-[1.5] mb-2 font-funnel">
                        {q.question}
                    </h3>

                    {/* Help text */}
                    {q.help && (
                        <p className="text-[13px] italic text-slate-500 mb-8 font-google-sans">
                            {q.help}
                        </p>
                    )}

                    {/* Buttons */}
                    <div className="flex gap-3">
                        <button
                            onClick={() => handleAnswer(true)}
                            className={`flex-1 h-[52px] rounded-lg border-2 font-medium text-[15px] transition-all duration-150 ${answers[q.id] === true
                                    ? 'bg-[#E74C3C] border-[#E74C3C] text-white'
                                    : 'border-[#E74C3C] text-[#791F1F] bg-transparent hover:bg-[#FCEBEB]'
                                }`}
                        >
                            Sí
                        </button>
                        <button
                            onClick={() => handleAnswer(false)}
                            className={`flex-1 h-[52px] rounded-lg border-2 font-medium text-[15px] transition-all duration-150 ${answers[q.id] === false
                                    ? 'bg-[#27AE60] border-[#27AE60] text-white'
                                    : 'border-[#27AE60] text-[#27500A] bg-transparent hover:bg-[#EAF3DE]'
                                }`}
                        >
                            No
                        </button>
                    </div>

                    {/* Deal-breaker alert */}
                    <AnimatePresence>
                        {showAlert && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.2 }}
                                className="mt-4"
                            >
                                <div className="bg-[#FCEBEB] border-l-[3px] border-[#E74C3C] px-3.5 py-2.5 rounded-r-lg">
                                    <p className="text-[13px] text-[#791F1F] leading-relaxed">
                                        ⚠ Esta condición es determinante para tu análisis. El diagnóstico la está registrando.
                                    </p>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            </AnimatePresence>
        </div>
    );
}