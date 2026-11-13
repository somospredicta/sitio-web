import React from 'react';
import { Check } from 'lucide-react';
import Revelar, { estilo } from './nuevo/Revelar';

const rows = [
    {
        pain: '"Tomé una decisión de expansión que parecía sólida y el entorno político la destruyó."',
        solution: 'Identificamos los riesgos no-mercado antes de que tomes la decisión, no después.',
    },
    {
        pain: '"Mis asesores me dicen que el país es complicado, pero nadie me dice cuánto."',
        solution: 'El IVP convierte el riesgo político en un número concreto y verificable.',
    },
    {
        pain: '"Perdí tiempo y plata en una negociación que nunca iba a prosperar por razones regulatorias."',
        solution: 'Detectamos los deal-breakers estructurales en la etapa de evaluación, no al final.',
    },
    {
        pain: '"No sé si el problema es el mercado o el entorno político."',
        solution: 'El doble eje IVP-PI / IAS separa el riesgo institucional del atractivo comercial.',
    },
];

export default function SalesPain() {
    return (
        <section className={estilo.seccion}>
            <div className={estilo.contenedor}>
                <Revelar className="max-w-3xl">
                    <p className={estilo.eyebrow}>Por qué los empresarios usan Predicta</p>
                    <h2 className={`${estilo.titulo} mt-5`}>¿Reconocés alguna de estas situaciones?</h2>
                </Revelar>

                <div className="mt-14 grid gap-4 md:grid-cols-2 md:gap-5">
                    {rows.map((row, i) => (
                        <Revelar key={i} retraso={i * 0.08}>
                            <div className={`${estilo.tarjeta} h-full p-7 md:p-8 flex flex-col`}>
                                <p className="font-funnel text-[20px] md:text-[22px] leading-snug text-[#FEFEFE]/90 pb-6 border-b border-white/10">{row.pain}</p>
                                <div className="mt-auto pt-6 flex items-start gap-3">
                                    <span className="mt-0.5 w-6 h-6 rounded-full bg-[#0059FF] flex items-center justify-center shrink-0">
                                        <Check className="w-3.5 h-3.5 text-white" />
                                    </span>
                                    <p className="font-google-sans text-[15px] leading-relaxed text-[#D6DEF5]">{row.solution}</p>
                                </div>
                            </div>
                        </Revelar>
                    ))}
                </div>
            </div>
        </section>
    );
}
