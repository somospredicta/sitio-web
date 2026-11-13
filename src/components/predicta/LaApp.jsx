import React, { useEffect, useState } from 'react';
import { ArrowRight, Bell, CalendarDays, GitBranch, LayoutGrid, MessageCircle, Send, UserRound } from 'lucide-react';
import { SEMAFORO } from './HeroApp';
import './home-app.css';

const PASOS = [
    {
        etiqueta: 'Tu empresa',
        titulo: 'Contanos de tu empresa.',
        bajada: 'Qué hacés, dónde estás, cuántos son y a dónde vendés. Un minuto.',
        foto: '/media/desk.jpg',
    },
    {
        etiqueta: 'Tablero',
        titulo: 'Tu exposición, en un número.',
        bajada: 'Un número del uno al cinco y un semáforo para cada frente.',
        foto: '/media/factory.jpg',
    },
    {
        etiqueta: 'Agenda',
        titulo: 'Solo lo que te afecta.',
        bajada: 'Las leyes, elecciones y políticas que tocan a tu negocio, y en qué te afectan.',
        foto: '/media/depot.jpg',
    },
    {
        etiqueta: 'Escenarios',
        titulo: '¿Y si no avanza?',
        bajada: 'Para cada escenario: impacto en tu empresa y qué hacer hoy.',
        foto: '/media/money.jpg',
    },
    {
        etiqueta: 'Consultá',
        titulo: 'Preguntale, como a un analista.',
        bajada: 'Si tenés una duda, preguntale. Te responde sobre tu empresa.',
        foto: '/media/crane.jpg',
        proximamente: true,
    },
];

const DURACION = 6000;

export default function LaApp() {
    const [paso, setPaso] = useState(0);
    const [frenado, setFrenado] = useState(false);

    // Con "reducir movimiento" no hay loop: queda el primer paso.
    useEffect(() => {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) setFrenado(true);
    }, []);

    useEffect(() => {
        if (frenado) return;
        const t = setTimeout(() => setPaso((p) => (p + 1) % PASOS.length), DURACION);
        return () => clearTimeout(t);
    }, [paso, frenado]);

    const elegir = (i) => {
        setPaso(i);
        setFrenado(true);
    };

    const p = PASOS[paso];

    return (
        <section id="la-app" className="relative min-h-[900px] overflow-hidden bg-[#000030]">
            {/* Fotos de fondo, muy desenfocadas, con fundido entre pasos */}
            {PASOS.map((x, i) => (
                <img
                    key={x.foto}
                    src={x.foto}
                    alt=""
                    loading="lazy"
                    aria-hidden="true"
                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-[1200ms]"
                    style={{ filter: 'blur(16px) brightness(.55)', transform: 'scale(1.08)', opacity: i === paso ? 1 : 0 }}
                />
            ))}
            <div className="absolute inset-0" style={{ background: 'linear-gradient(90deg, rgba(0,0,48,.92), rgba(0,0,48,.35))' }} />
            <div className="absolute inset-x-0 top-0 h-[200px]" style={{ background: 'linear-gradient(180deg, #000030, rgba(0,0,48,0))' }} />
            <div className="absolute inset-x-0 bottom-0 h-[200px]" style={{ background: 'linear-gradient(0deg, #000030, rgba(0,0,48,0))' }} />

            <div className="relative max-w-6xl mx-auto px-4 sm:px-6 min-h-[900px] py-24 flex flex-col lg:flex-row items-center justify-between gap-14">
                {/* Texto */}
                <div className="w-full max-w-[620px]">
                    <p className="font-google-sans text-[13px] font-medium uppercase tracking-[0.2em] text-[#4D8BFF]">
                        {String(paso + 1).padStart(2, '0')} · {p.etiqueta}
                        {p.proximamente && (
                            <span className="ml-3 align-middle rounded-full border border-[#4D8BFF]/60 px-2.5 py-0.5 text-[11px] tracking-[0.08em] text-[#FEFEFE]">
                                Próximamente
                            </span>
                        )}
                    </p>
                    <h2
                        key={`t${paso}`}
                        className="pantalla-entra font-funnel text-[42px] sm:text-[60px] lg:text-[84px] font-semibold leading-[1.0] tracking-tight text-[#FEFEFE] mt-5"
                    >
                        {p.titulo}
                    </h2>
                    <p key={`b${paso}`} className="pantalla-entra font-google-sans text-[18px] sm:text-[21px] leading-[1.7] mt-6">
                        <span
                            className="text-[#FEFEFE] px-2 py-0.5 rounded"
                            style={{ background: 'rgba(0,0,30,.72)', boxDecorationBreak: 'clone', WebkitBoxDecorationBreak: 'clone' }}
                        >
                            {p.bajada}
                        </span>
                    </p>

                    <div className="mt-8 inline-flex flex-wrap items-center gap-x-4 gap-y-1 rounded-full border border-white/15 bg-[#000030]/60 px-4 py-2 font-google-sans text-[13px] text-[#D6DEF5]">
                        <span className="inline-flex items-center gap-1.5"><span className="w-2 h-2 rounded-full" style={{ background: SEMAFORO.rojo }} />Rojo: riesgo</span>
                        <span className="inline-flex items-center gap-1.5"><span className="w-2 h-2 rounded-full" style={{ background: SEMAFORO.amarillo }} />Amarillo: cautela</span>
                        <span className="inline-flex items-center gap-1.5"><span className="w-2 h-2 rounded-full" style={{ background: SEMAFORO.verde }} />Verde: sin riesgo</span>
                    </div>

                    {/* Pestañas tipo historias */}
                    <div className="mt-12 grid grid-cols-5 gap-2 sm:gap-3" role="tablist" aria-label="Pantallas de la app">
                        {PASOS.map((x, i) => (
                            <button
                                key={x.etiqueta}
                                type="button"
                                role="tab"
                                aria-selected={i === paso}
                                onClick={() => elegir(i)}
                                className="group text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4D8BFF] rounded"
                            >
                                <span className="block h-[3px] rounded-full bg-white/20 overflow-hidden">
                                    {i < paso && <span className="block h-full w-full bg-[#FEFEFE]" />}
                                    {i === paso && (
                                        <span
                                            key={`${paso}-${frenado}`}
                                            className={`block h-full w-full bg-[#FEFEFE] ${frenado ? '' : 'barra-paso'}`}
                                        />
                                    )}
                                </span>
                                <span
                                    className={`mt-2.5 block font-google-sans text-[11px] sm:text-[13px] transition-colors ${i === paso ? 'text-[#FEFEFE]' : 'text-white/50 group-hover:text-white/80'}`}
                                >
                                    <span className="hidden sm:inline">{String(i + 1).padStart(2, '0')} · </span>
                                    {x.etiqueta}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Celular */}
                <div className="relative shrink-0">
                    <div
                        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full pointer-events-none"
                        style={{ background: 'radial-gradient(closest-side, rgba(0,89,255,.45), rgba(0,89,255,0) 70%)' }}
                    />
                    <div className="celular-flota relative">
                        <Celular>
                            <div key={paso} className="pantalla-entra absolute inset-0">
                                {paso === 0 && <PantallaEmpresa />}
                                {paso === 1 && <PantallaTablero />}
                                {paso === 2 && <PantallaAgenda />}
                                {paso === 3 && <PantallaEscenarios />}
                                {paso === 4 && <PantallaConsulta />}
                            </div>
                            {paso > 0 && <BarraInferior activa={[null, 0, 1, 2, 3][paso]} />}
                        </Celular>
                    </div>
                    <p className="relative mt-4 text-center font-google-sans text-[11px] text-white/40">Pantallas de ejemplo</p>
                </div>
            </div>
        </section>
    );
}

/* ---------- Celular y pantallas (recreadas en HTML, como en el video) ---------- */

function Celular({ children }) {
    return (
        <div className="relative w-[290px] h-[600px] sm:w-[310px] sm:h-[640px] rounded-[48px] p-[10px] bg-gradient-to-b from-[#2a2a6e] via-[#14144a] to-[#2a2a6e] shadow-[0_40px_120px_-20px_rgba(0,89,255,0.5),0_0_0_1px_rgba(255,255,255,0.08)]">
            <div className="relative h-full w-full overflow-hidden rounded-[38px] bg-[#000030] font-google-sans text-[#FEFEFE]">
                <div className="absolute top-2.5 left-1/2 -translate-x-1/2 z-30 h-[26px] w-[96px] rounded-full bg-[#020202]" />
                <div className="absolute top-0 inset-x-0 z-20 flex h-[46px] items-center justify-between px-7 text-[12px] font-semibold">
                    <span>9:41</span>
                    <span className="h-[10px] w-[20px] rounded-[3px] border border-white/80 p-[1.5px]">
                        <span className="block h-full w-3/4 rounded-[1.5px] bg-white" />
                    </span>
                </div>
                {children}
            </div>
        </div>
    );
}

function Chip({ color, children, chico }) {
    return (
        <span
            className={`inline-flex items-center rounded-full font-semibold text-[#020202] ${chico ? 'px-2 py-[1px] text-[9.5px]' : 'px-2.5 py-0.5 text-[11px]'}`}
            style={{ background: color }}
        >
            {children}
        </span>
    );
}

const tarjeta = 'rounded-2xl border border-[#23236A] bg-[#0A0A45]';

function Contenido({ children }) {
    return <div className="absolute inset-0 px-4 pt-[54px] pb-[78px] overflow-hidden">{children}</div>;
}

function PantallaEmpresa() {
    const sectores = ['Exportación', 'Industria', 'Tecnología', 'Servicios'];
    return (
        <Contenido>
            <img src="/img/logo-predicta.svg" alt="" className="h-[18px] w-auto" />
            <p className="font-funnel text-[22px] font-semibold leading-tight mt-4">Contanos de tu empresa</p>
            <p className="text-[11px] text-[#A9A9CC] mt-1">Con esto te mostramos solo lo que te toca.</p>
            <p className="text-[11px] font-medium mt-4 mb-1.5">Sector</p>
            <div className="grid grid-cols-2 gap-2">
                {sectores.map((s, i) => (
                    <div key={s} className={`rounded-xl border px-2.5 py-2.5 text-[12px] ${i === 0 ? 'border-[#0059FF] bg-[#0A0A45]' : 'border-[#23236A] bg-[#0A0A45] text-[#A9A9CC]'}`}>
                        {s}
                    </div>
                ))}
            </div>
            <p className="text-[11px] font-medium mt-4 mb-1.5">Provincia</p>
            <div className="grid grid-cols-2 gap-2">
                <div className="rounded-xl border border-[#0059FF] bg-[#0A0A45] py-2 text-center text-[12px]">Córdoba</div>
                <div className="rounded-xl border border-[#23236A] bg-[#0A0A45] py-2 text-center text-[12px] text-[#A9A9CC]">Resto del país</div>
            </div>
            <p className="text-[11px] font-medium mt-4 mb-1.5">Tamaño</p>
            <div className="flex gap-1.5">
                {['1 a 9', '10 a 49', '50 a 199', '200+'].map((t, i) => (
                    <span key={t} className={`flex-1 rounded-lg border py-1.5 text-center text-[10.5px] ${i === 1 ? 'border-[#0059FF]' : 'border-[#23236A] text-[#A9A9CC]'}`}>
                        {t}
                    </span>
                ))}
            </div>
            <div className="mt-6 flex items-center justify-center gap-1.5 rounded-full bg-[#0059FF] py-3 text-[13px] font-medium">
                Ver mi tablero <ArrowRight className="w-3.5 h-3.5" />
            </div>
        </Contenido>
    );
}

function PantallaTablero() {
    const frentes = [
        { n: 'Regulatorio', c: SEMAFORO.cauteloso, e: 'Rojo cauteloso' },
        { n: 'Social y laboral', c: SEMAFORO.amarillo, e: 'Amarillo' },
        { n: 'Internacional', c: SEMAFORO.rojo, e: 'Rojo crítico' },
    ];
    return (
        <Contenido>
            <p className="text-[11px] text-[#A9A9CC]">Hola,</p>
            <p className="font-funnel text-[20px] font-semibold leading-tight">Tu empresa</p>
            <div className={`${tarjeta} p-3.5 mt-3`}>
                <p className="text-[11px] text-[#A9A9CC]">Tu exposición hoy</p>
                <div className="flex items-end justify-between mt-1">
                    <span className="font-funnel text-[40px] font-semibold leading-none">
                        2,8<span className="text-[16px] text-[#A9A9CC]">/5</span>
                    </span>
                    <Chip color={SEMAFORO.cauteloso}>Rojo cauteloso</Chip>
                </div>
                <div className="mt-3 flex h-1.5 overflow-hidden rounded-full">
                    <span className="flex-1" style={{ background: SEMAFORO.rojo }} />
                    <span className="flex-1" style={{ background: SEMAFORO.cauteloso }} />
                    <span className="flex-1" style={{ background: SEMAFORO.amarillo }} />
                    <span className="flex-1" style={{ background: SEMAFORO.verde }} />
                </div>
            </div>
            <div className="mt-2.5 space-y-2">
                {frentes.map((f) => (
                    <div key={f.n} className={`${tarjeta} flex items-center justify-between px-3 py-2.5`}>
                        <span className="text-[12px] font-medium">{f.n}</span>
                        <Chip color={f.c} chico>{f.e}</Chip>
                    </div>
                ))}
            </div>
            <p className="font-funnel text-[14px] font-semibold mt-4">Se viene en 30 días</p>
            <div className={`${tarjeta} mt-2 px-3 py-2.5`}>
                <p className="text-[10px] text-[#A9A9CC]">Legislativo · en 6 días</p>
                <p className="text-[12px] font-medium mt-0.5">Votación de una ley que te toca</p>
            </div>
        </Contenido>
    );
}

function PantallaAgenda() {
    const eventos = [
        { t: 'Legislativo', c: SEMAFORO.amarillo, e: 'Amarillo', titulo: 'Ley en tratamiento', afecta: 'impuestos', cuando: 'En 6 días' },
        { t: 'Mundo', c: SEMAFORO.rojo, e: 'Rojo crítico', titulo: 'Nuevo arancel en un destino', afecta: 'precio de venta', cuando: 'En 12 días' },
        { t: 'Economía', c: SEMAFORO.verde, e: 'Verde', titulo: 'Vencimiento de un impuesto', afecta: 'caja del mes', cuando: 'En 2 días' },
    ];
    return (
        <Contenido>
            <p className="font-funnel text-[20px] font-semibold leading-tight">Agenda que te toca</p>
            <div className="mt-3 flex gap-1.5 overflow-hidden">
                {['Todo', 'Economía', 'Legislativo', 'Elecciones', 'Judicial', 'Mundo'].map((f, i) => (
                    <span key={f} className={`shrink-0 rounded-full border px-2.5 py-1 text-[10.5px] ${i === 0 ? 'border-[#0059FF]' : 'border-[#23236A] text-[#A9A9CC]'}`}>
                        {f}
                    </span>
                ))}
            </div>
            <div className="mt-3 space-y-2.5">
                {eventos.map((e) => (
                    <div key={e.titulo} className={`${tarjeta} p-3`}>
                        <div className="flex justify-between text-[10px] text-[#A9A9CC]">
                            <span>{e.t}</span>
                            <span>{e.cuando}</span>
                        </div>
                        <p className="text-[13px] font-semibold mt-1 leading-snug">{e.titulo}</p>
                        <p className="text-[10.5px] text-[#A9A9CC] mt-1">
                            Te afecta en: <span className="text-[#FEFEFE]">{e.afecta}</span>
                        </p>
                        <div className="mt-2">
                            <Chip color={e.c} chico>{e.e}</Chip>
                        </div>
                    </div>
                ))}
            </div>
        </Contenido>
    );
}

function PantallaEscenarios() {
    return (
        <Contenido>
            <p className="text-[10px] text-[#A9A9CC]">Legislativo · En 6 días</p>
            <p className="font-funnel text-[19px] font-semibold leading-tight mt-0.5">Ley en tratamiento</p>
            <div className="mt-3 grid grid-cols-3 gap-1 rounded-full border border-[#23236A] bg-[#0A0A45] p-1">
                {['Optimista', 'Intermedio', 'Pesimista'].map((x, i) => (
                    <span key={x} className={`rounded-full py-1.5 text-center text-[10.5px] font-medium ${i === 2 ? 'bg-[#0059FF]' : 'text-[#A9A9CC]'}`}>
                        {x}
                    </span>
                ))}
            </div>
            <div className={`${tarjeta} p-3.5 mt-3`}>
                <div className="flex items-center justify-between">
                    <span className="text-[11px] text-[#A9A9CC]">Impacto en tu empresa</span>
                    <Chip color={SEMAFORO.cauteloso} chico>Rojo cauteloso</Chip>
                </div>
                <p className="text-[9.5px] font-medium uppercase tracking-wider text-[#A9A9CC] mt-3">Qué te pasa</p>
                <ul className="mt-1 space-y-1 text-[11.5px] leading-snug">
                    <li>· Se cae un beneficio de tu sector.</li>
                    <li>· Suben tus costos el próximo trimestre.</li>
                </ul>
                <p className="text-[9.5px] font-medium uppercase tracking-wider text-[#A9A9CC] mt-3">Qué hacer ahora</p>
                <ul className="mt-1 space-y-1 text-[11.5px] leading-snug">
                    <li>· Revisá tu flujo de caja a 90 días.</li>
                    <li>· Hablá con tu contador esta semana.</li>
                </ul>
            </div>
            <div className="mt-3 flex items-center justify-center gap-1.5 rounded-full border border-[#0059FF] py-2.5 text-[11.5px] font-medium">
                <Bell className="w-3.5 h-3.5" /> Avisame si cambia el escenario
            </div>
        </Contenido>
    );
}

function PantallaConsulta() {
    return (
        <Contenido>
            <p className="font-funnel text-[20px] font-semibold leading-tight">Preguntale a Predicta</p>
            <div className="mt-4 space-y-3">
                <div className="ml-auto max-w-[80%] rounded-2xl rounded-br-md bg-[#0059FF] px-3 py-2 text-[12px] leading-snug">
                    ¿Me conviene adelantar compras de insumos importados?
                </div>
                <div className={`${tarjeta} max-w-[90%] rounded-bl-md px-3 py-2.5 text-[12px] leading-snug`}>
                    <div className="mb-1.5">
                        <Chip color={SEMAFORO.amarillo} chico>Amarillo</Chip>
                    </div>
                    Para tu empresa, el impacto es moderado. Te conviene asegurar el stock de los próximos dos meses.
                </div>
            </div>
            <div className="absolute inset-x-4 bottom-[86px] flex items-center gap-2 rounded-full border border-[#23236A] bg-[#0A0A45] px-3.5 py-2.5 text-[11.5px] text-[#A9A9CC]">
                <span className="flex-1">Escribí tu duda</span>
                <Send className="w-3.5 h-3.5 text-[#0059FF]" />
            </div>
        </Contenido>
    );
}

function BarraInferior({ activa }) {
    const tabs = [
        { i: LayoutGrid, n: 'Tablero' },
        { i: CalendarDays, n: 'Agenda' },
        { i: GitBranch, n: 'Escenarios' },
        { i: MessageCircle, n: 'Consultar' },
        { i: UserRound, n: 'Perfil' },
    ];
    return (
        <div className="absolute inset-x-0 bottom-0 z-20 grid grid-cols-5 border-t border-[#23236A] bg-[#000030]/95 px-2 pt-2 pb-6">
            {tabs.map(({ i: Icono, n }, k) => (
                <div key={n} className={`flex flex-col items-center gap-0.5 ${k === activa ? 'text-[#0059FF]' : 'text-[#A9A9CC]'}`}>
                    <Icono className="w-[18px] h-[18px]" strokeWidth={1.75} />
                    <span className="text-[9px]">{n}</span>
                </div>
            ))}
            <span className="absolute bottom-1.5 left-1/2 h-1 w-[34%] -translate-x-1/2 rounded-full bg-white/80" />
        </div>
    );
}
