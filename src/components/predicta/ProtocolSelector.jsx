import React from 'react';
import { Globe, FileCheck, Users, BarChart3, Check, ArrowRight } from 'lucide-react';
import { PROTOCOLS } from './testData';

const iconMap = { Globe, FileCheck, Users, BarChart3 };

export default function ProtocolSelector({ selected, onSelect, onContinue }) {
    const protocols = Object.keys(PROTOCOLS);

    return (
        <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
                <h2 className="text-[24px] md:text-[28px] font-semibold text-white mb-2 font-funnel">
                    ¿Cuál de estas situaciones describe mejor tu caso?
                </h2>
                <p className="text-[14px] text-white/60 font-google-sans">
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
                            type="button"
                            onClick={() => onSelect(key)}
                            className={`relative text-left p-5 rounded-xl border-2 transition-all duration-200 ${isSelected
                                    ? 'border-[#0059FF] bg-[#0059FF]/15 shadow-lg shadow-[#0059FF]/10'
                                    : hasSelection
                                        ? 'border-white/10 bg-[#0A0A35]/60 opacity-60 hover:opacity-100 hover:border-white/30'
                                        : 'border-white/15 bg-[#0A0A35] hover:border-[#0059FF]/50 hover:bg-[#0A0A35]/80'
                                }`}
                        >
                            {isSelected && (
                                <div className="absolute top-3 right-3 w-6 h-6 rounded-full bg-[#0059FF] flex items-center justify-center">
                                    <Check className="w-3.5 h-3.5 text-white" />
                                </div>
                            )}
                            <div className="flex items-start gap-3.5">
                                <div className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center ${isSelected ? 'bg-[#0059FF]/30 text-white' : 'bg-white/10 text-[#0059FF]'}`}>
                                    <Icon className="w-5 h-5 text-[#0059FF]" />
                                </div>
                                <div>
                                    <div className="text-[11px] font-semibold text-[#0059FF] tracking-wider mb-0.5 font-google-sans uppercase">{p.short}</div>
                                    <h3 className="text-[15px] font-semibold text-white mb-1.5 font-funnel">{p.tagline}</h3>
                                    <p className="text-[13px] text-white/70 leading-relaxed font-google-sans">{p.description}</p>
                                </div>
                            </div>
                        </button>
                    );
                })}
            </div>

            {selected && (
                <div className="mt-8 text-center">
                    <button
                        type="button"
                        onClick={onContinue}
                        className="inline-flex items-center gap-2 h-[52px] px-8 rounded-full bg-[#0059FF] text-white font-medium text-[15px] hover:bg-[#0059FF]/90 transition-all duration-200 font-google-sans shadow-lg shadow-[#0059FF]/20"
                    >
                        Continuar
                        <ArrowRight className="w-4 h-4" />
                    </button>
                </div>
            )}
        </div>
    );
}