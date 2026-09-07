import React from 'react';
import { Globe, FileCheck, Users, BarChart3, Check, ArrowRight } from 'lucide-react';
import { PROTOCOLS } from './testData';

const iconMap = { Globe, FileCheck, Users, BarChart3 };

export default function ProtocolSelector({ selected, onSelect, onContinue }) {
    const protocols = Object.keys(PROTOCOLS);

    return (
        <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
                <h2 className="text-[24px] md:text-[28px] font-semibold text-foreground mb-2">
                    ¿Cuál de estas situaciones describe mejor tu caso?
                </h2>
                <p className="text-[14px] text-muted-foreground">
                    Elegí una — el diagnóstico se adapta a tu situación
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {protocols.map((key) => {
                    const p = PROTOCOLS[key];
                    const Icon = iconMap[p.icon];
                    const isSelected = selected === key;
                    const hasSelection = !!selected;

                    return (
                        <button
                            key={key}
                            onClick={() => onSelect(key)}
                            className={`relative text-left p-5 rounded-xl border-2 transition-all duration-200 ${isSelected
                                    ? 'border-primary bg-accent shadow-sm'
                                    : hasSelection
                                        ? 'border-border/40 bg-white opacity-45'
                                        : 'border-border/60 bg-white hover:border-primary/40'
                                }`}
                        >
                            {isSelected && (
                                <div className="absolute top-3 right-3 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                                    <Check className="w-3.5 h-3.5 text-white" />
                                </div>
                            )}
                            <div className="flex items-start gap-3.5">
                                <div className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center ${isSelected ? 'bg-primary/10' : 'bg-secondary'}`}>
                                    <Icon className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                    <div className="text-[11px] font-semibold text-primary tracking-wider mb-0.5">{p.short}</div>
                                    <h3 className="text-[15px] font-semibold text-foreground mb-1.5">{p.tagline}</h3>
                                    <p className="text-[13px] text-muted-foreground leading-relaxed">{p.description}</p>
                                </div>
                            </div>
                        </button>
                    );
                })}
            </div>

            {selected && (
                <div className="mt-8 text-center">
                    <button
                        onClick={onContinue}
                        className="inline-flex items-center gap-2 h-[52px] px-8 rounded-lg bg-primary text-white font-medium text-[15px] hover:bg-primary/90 transition-all duration-200"
                    >
                        Continuar
                        <ArrowRight className="w-4 h-4" />
                    </button>
                </div>
            )}
        </div>
    );
}