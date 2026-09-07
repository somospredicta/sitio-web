import React from 'react';
import { motion } from 'framer-motion';

export default function GaugeSVG({ score, size = 180 }) {
    const color = score >= 4.1 ? '#27AE60' : score >= 3.1 ? '#F39C12' : '#E74C3C';
    const radius = 70;
    const strokeWidth = 8;
    const circumference = Math.PI * radius;
    const normalizedScore = Math.max(0, Math.min(5, score));
    const dashOffset = circumference - (normalizedScore / 5) * circumference;

    return (
        <svg width={size} height={size / 2 + 10} viewBox="0 0 180 100" className="mx-auto">
            {/* Background arc */}
            <path
                d="M 15 90 A 70 70 0 0 1 165 90"
                fill="none"
                stroke="#E2E8F0"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
            />
            {/* Score arc */}
            <motion.path
                d="M 15 90 A 70 70 0 0 1 165 90"
                fill="none"
                stroke={color}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeDasharray={circumference}
                initial={{ strokeDashoffset: circumference }}
                animate={{ strokeDashoffset: dashOffset }}
                transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
            />
        </svg>
    );
}