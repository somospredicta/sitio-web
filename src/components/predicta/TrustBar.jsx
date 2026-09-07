import React from 'react';
import { BarChart3, Shield, Zap, GraduationCap } from 'lucide-react';

const items = [
    { icon: BarChart3, label: '5 variables Non-Market' },
    { icon: Shield, label: '4 protocolos propietarios' },
    { icon: Zap, label: 'Resultado en 3 minutos' },
    { icon: GraduationCap, label: 'Metodología validada académicamente' },
];

export default function TrustBar() {
    return (
        <section className="bg-white border-b border-border/50">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                    {items.map((item, i) => (
                        <div key={i} className="flex items-center gap-3">
                            <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-accent flex items-center justify-center">
                                <item.icon className="w-[18px] h-[18px] text-primary" />
                            </div>
                            <span className="text-[13px] font-medium text-foreground leading-tight">{item.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}