import React from 'react';
import { Globe, FileCheck, Users, BarChart3 } from 'lucide-react';

const iconMap = { Globe, FileCheck, Users, BarChart3 };

const protocols = [
    {
        short: 'MEP',
        name: 'Modelo de Expansión Predicta',
        icon: 'Globe',
        description: '¿Querés entrar a un nuevo mercado? Medimos si el entorno político e institucional del destino está listo para recibirte.',
    },
    {
        short: 'IRR',
        name: 'Resiliencia Regulatoria',
        icon: 'FileCheck',
        description: '¿Una nueva ley afecta tu negocio? Cuantificamos tu capacidad de absorber el cambio normativo sin perder viabilidad.',
    },
    {
        short: 'IGS',
        name: 'Gestión de Stakeholders',
        icon: 'Users',
        description: '¿Tenés un conflicto social o sindical? Mapeamos el poder real de cada actor y tu capacidad de gestionar el conflicto.',
    },
    {
        short: 'IVC',
        name: 'Viabilidad de Inversión de Capital',
        icon: 'BarChart3',
        description: 'Analizamos si el entorno garantiza las condiciones para una inversión viable.',
    },
];

export default function ProtocolsSection() {
    return (
        <section id="protocolos" className="bg-white py-16 md:py-24">
            <div className="max-w-5xl mx-auto px-4 sm:px-6">
                <div className="text-center mb-14">
                    <h2 className="text-[28px] md:text-[32px] font-semibold text-foreground mb-3">
                        4 protocolos propietarios. Un solo índice.
                    </h2>
                    <p className="text-[15px] text-muted-foreground">
                        Cada protocolo está calibrado para un tipo de decisión específica.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {protocols.map((p) => {
                        const Icon = iconMap[p.icon];
                        return (
                            <div
                                key={p.short}
                                className="border border-border/60 rounded-xl p-6 hover:border-primary/30 transition-all duration-200 group"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-accent flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                                        <Icon className="w-5 h-5 text-primary" />
                                    </div>
                                    <div>
                                        <div className="text-[11px] font-semibold text-primary tracking-wider mb-1">{p.short}</div>
                                        <h3 className="text-[15px] font-semibold text-foreground mb-2">{p.name}</h3>
                                        <p className="text-[13px] text-muted-foreground leading-relaxed">{p.description}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}