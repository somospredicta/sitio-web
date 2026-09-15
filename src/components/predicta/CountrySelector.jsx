import React, { useState } from 'react';
import { Check, Lock, ArrowRight } from 'lucide-react';

const GROUPS = [
    {
        label: 'MERCOSUR',
        countries: [
            { code: 'BR', flag: '🇧🇷', name: 'Brasil', protocol: 'MEP', available: true },
            { code: 'PY', flag: '🇵🇾', name: 'Paraguay', protocol: 'MEP', available: true },
            { code: 'UY', flag: '🇺🇾', name: 'Uruguay', protocol: 'MEP', available: true },
        ]
    },
    {
        label: 'PAÍSES ANDINOS',
        countries: [
            { code: 'CL', flag: '🇨🇱', name: 'Chile', protocol: 'MEP', available: true },
            { code: 'CO', flag: '🇨🇴', name: 'Colombia', protocol: 'MEP', available: true },
            { code: 'PE', flag: '🇵🇪', name: 'Perú', protocol: 'MEP', available: true },
            { code: 'BO', flag: '🇧🇴', name: 'Bolivia', protocol: 'MEP', available: false },
            { code: 'EC', flag: '🇪🇨', name: 'Ecuador', protocol: 'MEP', available: false },
        ]
    },
    {
        label: 'CENTROAMÉRICA Y MÉXICO',
        countries: [
            { code: 'MX', flag: '🇲🇽', name: 'México', protocol: 'MEP', available: true },
            { code: 'PA', flag: '🇵🇦', name: 'Panamá', protocol: 'MEP', available: false },
            { code: 'CR', flag: '🇨🇷', name: 'Costa Rica', protocol: 'MEP', available: false },
        ]
    },
    {
        label: 'OTROS MERCADOS',
        countries: [
            { code: 'VE', flag: '🇻🇪', name: 'Venezuela', protocol: 'MEP', available: true, warning: true },
            { code: 'EU', flag: '🇪🇺', name: 'Unión Europea', protocol: 'MEP', available: true, badge: 'Módulo ICA activo' },
        ]
    },
];

export default function CountrySelector() {
    const [selected, setSelected] = useState(null);

    const scrollTo = (href) => {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="paises" className="bg-white py-16 md:py-24">
            <div className="max-w-5xl mx-auto px-4 sm:px-6">
                {/* Eyebrow */}
                <div className="text-center mb-10">
                    <span className="text-[11px] font-semibold tracking-[0.15em] text-[#0059FF] uppercase">
                        COBERTURA GEOGRÁFICA
                    </span>
                    <h2 className="font-funnel text-[28px] md:text-[36px] font-bold text-[#020202] mt-3 mb-3">
                        Seleccioná el país donde vas a tomar tu próxima decisión
                    </h2>
                    <p className="text-[15px] text-[#555] max-w-xl mx-auto font-google-sans">
                        Para empresas que necesitan cuantificar el riesgo político antes de expandirse,
                        invertir o negociar en mercados con alta incertidumbre institucional.
                    </p>
                </div>

                {/* Country groups */}
                <div className="space-y-8 mb-8">
                    {GROUPS.map(group => (
                        <div key={group.label}>
                            <p className="text-[11px] font-semibold tracking-[0.12em] text-[#999] uppercase mb-3 border-b border-[#eee] pb-2">
                                {group.label}
                            </p>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5">
                                {group.countries.map(country => {
                                    const isSelected = selected?.code === country.code;
                                    const isLocked = !country.available;

                                    return (
                                        <button
                                            key={country.code}
                                            disabled={isLocked}
                                            onClick={() => setSelected(isSelected ? null : country)}
                                            className={`relative flex items-center gap-2.5 px-3.5 py-3 rounded-xl border text-left transition-all duration-150
                        ${isLocked
                                                    ? 'border-[#eee] bg-[#fafafa] cursor-not-allowed opacity-60'
                                                    : isSelected
                                                        ? 'border-[#0059FF] bg-[#0059FF]/5 shadow-sm'
                                                        : 'border-[#e5e7eb] bg-white hover:border-[#0059FF]/40 hover:bg-[#0059FF]/[0.03]'
                                                }`}
                                        >
                                            <span className="text-xl leading-none">{country.flag}</span>
                                            <div className="flex-1 min-w-0">
                                                <span className="text-[13px] font-medium text-[#020202] block truncate">
                                                    {country.name}
                                                </span>
                                                {country.badge && (
                                                    <span className="text-[10px] text-[#0059FF] font-medium">{country.badge}</span>
                                                )}
                                                {isLocked && (
                                                    <span className="text-[10px] text-[#999]">Bajo consulta</span>
                                                )}
                                            </div>
                                            {isLocked && <Lock className="w-3 h-3 text-[#bbb] flex-shrink-0" />}
                                            {country.warning && !isLocked && (
                                                <span className="text-orange-500 text-[13px]">⚠</span>
                                            )}
                                            {isSelected && (
                                                <div className="w-4 h-4 rounded-full bg-[#0059FF] flex items-center justify-center flex-shrink-0">
                                                    <Check className="w-2.5 h-2.5 text-white" />
                                                </div>
                                            )}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Dynamic line */}
                {selected && (
                    <div className="bg-[#0059FF]/5 border border-[#0059FF]/20 rounded-xl px-5 py-4 mb-6 flex items-center justify-between gap-4 flex-wrap">
                        <p className="text-[14px] text-[#020202] font-google-sans">
                            Seleccionaste <strong>{selected.name}</strong> → el protocolo recomendado para este mercado es{' '}
                            <strong className="text-[#0059FF]">{selected.protocol}</strong>
                        </p>
                        <button
                            onClick={() => scrollTo('#test')}
                            className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#0059FF] hover:underline flex-shrink-0"
                        >
                            Iniciar autodiagnóstico
                            <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                    </div>
                )}

                {/* Main CTA */}
                <button
                    onClick={() => scrollTo('#test')}
                    className="w-full h-[52px] rounded-full bg-[#0059FF] text-white font-medium text-[15px] hover:bg-[#0059FF]/90 transition-colors flex items-center justify-center gap-2"
                >
                    Confirmar selección e iniciar diagnóstico
                    <ArrowRight className="w-4 h-4" />
                </button>

                <p className="text-center text-[12px] text-[#999] mt-4 font-google-sans">
                    Para mercados bloqueados o análisis complejos,{' '}
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=institucional@predicta.ar" target="_blank" rel="noopener noreferrer" className="text-[#0059FF] hover:underline">
                        contactanos directamente →
                    </a>{' '}
                    institucional@predicta.ar
                </p>
            </div>
        </section>
    );
}