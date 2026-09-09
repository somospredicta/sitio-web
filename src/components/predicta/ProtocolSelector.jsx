import React from 'react';
import { Globe, FileCheck, Users, BarChart3, Check, ArrowRight } from 'lucide-react';
import { PROTOCOLS } from './testData';

const iconMap = { Globe, FileCheck, Users, BarChart3 };

export default function ProtocolSelector({ selected, onSelect, onContinue }) {
    const protocols = Object.keys(PROTOCOLS);

    return (
        <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
                <h2 className="text-[24px] md:text-[28px] font-semibold text-slate-900 mb-2 font-funnel">
                    ¿Cuál de estas situaciones describe mejor tu caso?
                </h2>
                <p className="text-[14px] text-slate-500 font-google-sans">
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
                            className={`relative text-left p-6 rounded-2xl border-2 transition-all duration-200 ${isSelected
                                    ? 'border-[#0059FF] bg-white shadow-lg shadow-[#0059FF]/10 ring-2 ring-[#0059FF]/20'
                                    : hasSelection
                                        ? 'border-slate-200 bg-white opacity-60 hover:opacity-100 hover:border-slate-300 shadow-sm'
                                        : 'border-slate-200 bg-white hover:border-[#0059FF]/50 hover:shadow-md shadow-sm'
                                }`}
                        >
                            {isSelected && (
                                <div className="absolute top-4 right-4 w-6 h-6 rounded-full bg-[#0059FF] flex items-center justify-center">
                                    <Check className="w-3.5 h-3.5 text-white" />
                                </div>
                            )}
                            <div className="flex items-start gap-4">
                                <div className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center ${isSelected ? 'bg-blue-50 text-[#0059FF]' : 'bg-blue-50/80 text-[#0059FF]'}`}>
                                    <Icon className="w-5 h-5 text-[#0059FF]" />
                                </div>
                                <div>
                                    <div className="text-[11px] font-bold text-[#0059FF] tracking-wider mb-1 font-google-sans uppercase">{p.short}</div>
                                    <h3 className="text-[15px] font-semibold text-slate-900 mb-1.5 font-funnel">{p.tagline}</h3>
                                    <p className="text-[13px] text-slate-500 leading-relaxed font-google-sans">{p.description}</p>
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