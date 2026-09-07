import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const messages = [
    'Analizando tu entorno regulatorio...',
    'Calculando tu exposición al riesgo...',
    'Generando tu Índice de Viabilidad...',
];

export default function CalculatingScreen({ onDone }) {
    const [msgIndex, setMsgIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setMsgIndex(prev => (prev + 1) % messages.length);
        }, 600);

        const timer = setTimeout(() => {
            clearInterval(interval);
            onDone();
        }, 1800);

        return () => {
            clearInterval(interval);
            clearTimeout(timer);
        };
    }, [onDone]);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-[#0B1527] flex items-center justify-center"
        >
            <div className="text-center px-4">
                {/* Logo */}
                <p className="text-white text-[20px] font-bold tracking-tight mb-10">predicta</p>

                {/* Spinner */}
                <div className="w-10 h-10 mx-auto mb-8 border-[3px] border-white/10 border-t-primary rounded-full animate-spin" />

                {/* Rotating text */}
                <p className="text-[14px] text-[#93C5FD] h-5 transition-opacity duration-200">
                    {messages[msgIndex]}
                </p>

                {/* Static subtext */}
                <p className="text-[12px] text-[#64748B] mt-3">
                    Esto puede tardar un momento
                </p>
            </div>
        </motion.div>
    );
}