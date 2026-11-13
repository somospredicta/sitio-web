import React from 'react';
import { SEMAFORO } from './HeroApp';
import './home-app.css';

const ESCENAS = [
    {
        area: 'Dueño',
        titulo: 'Decidir.',
        foto: '/media/dash.jpg',
        tarjeta: {
            encabezado: 'Tu exposición hoy',
            dato: '2,8/5',
            chip: { color: SEMAFORO.cauteloso, texto: 'Rojo cauteloso' },
            texto: 'Te bajó la exposición por el arancel anunciado a legumbres y maní.',
        },
    },
    {
        area: 'Comercio exterior',
        titulo: 'Elegir el mercado.',
        foto: '/media/comex.jpg',
        tarjeta: {
            encabezado: 'Internacional',
            chip: { color: SEMAFORO.rojo, texto: 'Rojo crítico' },
            texto: 'Un socio comercial del Pacífico anunció un arancel del 18% a legumbres y maní.',
        },
    },
    {
        area: 'Finanzas',
        titulo: 'Planificar sin sorpresas.',
        foto: '/media/money.jpg',
        tarjeta: {
            encabezado: 'Vencimiento',
            dato: 'en 2 días',
            texto: 'IVA y retenciones del mes. Te afecta en: caja del mes.',
        },
    },
    {
        area: 'Compras',
        titulo: 'Anticiparse.',
        foto: '/media/depot.jpg',
        tarjeta: {
            encabezado: 'Nuevo arancel',
            chip: { color: SEMAFORO.amarillo, texto: 'Amarillo' },
            texto: 'Rige en 30 días para un insumo que importás. Conviene adelantar la compra.',
        },
    },
];

export default function MideTuEmpresa() {
    return (
        <section className="relative h-[720px] overflow-hidden bg-[#000030]">
            {/* Escenas que se turnan en fundido */}
            <div className="absolute inset-0">
                {ESCENAS.map((e, i) => (
                    <div key={e.area} className="escena absolute inset-0" style={{ animationDelay: `${i * 6}s` }}>
                        <img
                            src={e.foto}
                            alt=""
                            loading="lazy"
                            className="escena-foto absolute inset-0 w-full h-full object-cover"
                            style={{ animationDelay: `${i * 6}s` }}
                        />
                        <div className="absolute inset-0" style={{ background: 'linear-gradient(0deg, rgba(0,0,48,.95) 0%, rgba(0,0,48,.55) 40%, rgba(0,0,48,.15) 70%)' }} />
                        <div className="relative h-full max-w-6xl mx-auto px-4 sm:px-6 flex flex-col lg:flex-row lg:items-end justify-end lg:justify-between gap-6 pb-14 lg:pb-20">
                            <div>
                                <p className="font-google-sans text-[13px] font-medium uppercase tracking-[0.2em] text-[#4D8BFF]">{e.area}</p>
                                <p className="font-funnel text-[42px] sm:text-[56px] lg:text-[72px] font-semibold leading-[1.02] tracking-tight text-[#FEFEFE] mt-3">
                                    {e.titulo}
                                </p>
                            </div>
                            <Tarjeta {...e.tarjeta} />
                        </div>
                    </div>
                ))}
            </div>

            {/* Título fijo arriba */}
            <div className="absolute inset-x-0 top-0 h-[260px] pointer-events-none" style={{ background: 'linear-gradient(180deg, #000030 0%, rgba(0,0,48,.75) 45%, rgba(0,0,48,0) 100%)' }} />
            <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-16 lg:pt-20">
                <h2 className="font-funnel text-[42px] sm:text-[56px] lg:text-[68px] font-semibold leading-[1.02] tracking-tight text-[#FEFEFE]">
                    Predicta mide <span className="text-[#4D8BFF]">tu empresa.</span>
                </h2>
            </div>
        </section>
    );
}

function Tarjeta({ encabezado, dato, chip, texto }) {
    return (
        <div
            className="w-full max-w-[360px] rounded-2xl px-5 py-4 backdrop-blur-md font-google-sans"
            style={{ background: 'rgba(5,8,42,.9)', border: '1px solid rgba(254,254,254,.14)' }}
        >
            <div className="flex items-center gap-2 flex-wrap text-[13px]">
                <img src="/img/isotipo-predicta.svg" alt="" className="h-4 w-auto" />
                <span className="font-bold text-[#FEFEFE]">{encabezado}</span>
                {dato && <span className="text-[#A9B6DA]">· {dato}</span>}
                {chip && (
                    <span className="ml-auto rounded-full px-2.5 py-0.5 text-[11px] font-semibold text-[#020202]" style={{ background: chip.color }}>
                        {chip.texto}
                    </span>
                )}
            </div>
            <p className="text-[14px] leading-snug text-[#D6DEF5] mt-2">{texto}</p>
        </div>
    );
}
