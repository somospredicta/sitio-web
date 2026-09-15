import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, useReducedMotion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, User, Swords, Scale, Truck, CheckCircle2, AlertTriangle, Wrench, Zap, ChevronDown } from 'lucide-react';

const pilares = [
    {
        nombre: 'Mercado Digital',
        icono: ShoppingCart,
        score: 4.7,
        dificultad: 1.3,
        tag: 'Accesible',
        color: '#22C55E',
        variables: [
            { nombre: 'Penetración e-commerce', puntaje: 5, texto: 'Alta proporción de la población compra online, entre los niveles más altos de la región.' },
            { nombre: 'Infraestructura de pagos', puntaje: 4, texto: 'Billetera digital dominante concentra la mayoría del volumen de pagos.' },
            { nombre: 'Concentración de plataformas', puntaje: 5, texto: 'El marketplace líder habilitó venta transfronteriza directa, sin necesidad de estructura local.' },
        ],
        lectura_analista: 'El canal digital de entrada ya está abierto. Para una marca que recién empieza a exportar, esto reduce la inversión inicial casi al costo de publicar el producto.',
        driver: 'El mercado de mayor penetración digital de la región es también el de menor barrera de entrada operativa.',
    },
    {
        nombre: 'Consumidor',
        icono: User,
        score: 3.6,
        dificultad: 2.4,
        tag: 'Preparación',
        color: '#F59E0B',
        variables: [
            { nombre: 'Demanda verificable de la categoría', puntaje: 3, texto: 'Hay competidores locales pero la categoría es emergente, sin datos de mercado consolidados.' },
            { nombre: 'Afinidad con marcas extranjeras', puntaje: 5, texto: 'Alta proporción de compras online se hacen en tiendas extranjeras. Afinidad cultural máxima.' },
            { nombre: 'Ticket promedio vs. precio local', puntaje: 3, texto: 'El producto de entrada compite en rango de precio local; la línea premium lo supera.' },
        ],
        lectura_analista: 'El consumidor no compra afuera por precio, compra por diseño y disponibilidad. El posicionamiento correcto es diferenciación, no competencia por costo.',
        riesgo: 'La línea premium supera el techo de precio del mercado local — empezar con el producto de entrada.',
    },
    {
        nombre: 'Competencia',
        icono: Swords,
        score: 3.4,
        dificultad: 2.6,
        tag: 'Moderada',
        color: '#F59E0B',
        variables: [
            { nombre: 'Intensidad competitiva', puntaje: 3, texto: 'Mercado no saturado, sin jugadores globales en la categoría específica.' },
            { nombre: 'Barreras de marca local', puntaje: 4, texto: 'Competidores locales sin inversión relevante en marketing digital ni comunidad consolidada.' },
        ],
        lectura_analista: 'La competencia es fragmentada y artesanal. La marca entra con ventaja real en comunidad y catálogo. El riesgo a futuro es la llegada de competidores internacionales de precio bajo.',
        riesgo: 'Vigilar el ingreso de competidores de bajo costo a medida que crece el comercio transfronterizo.',
    },
    {
        nombre: 'Regulación',
        icono: Scale,
        score: 4.2,
        dificultad: 1.8,
        tag: 'Preparación',
        color: '#F59E0B',
        variables: [
            { nombre: 'Régimen postal / courier', puntaje: 3, texto: 'Proceso simplificado por el programa de venta transfronteriza del marketplace líder.' },
            { nombre: 'Etiquetado y documentación', puntaje: 5, texto: 'Sin requisitos sanitarios especiales. Mismo idioma, sin registro previo necesario.' },
        ],
        lectura_analista: 'Marco regulatorio favorable, sin barreras relevantes para esta categoría de producto.',
        atencion: 'Impuesto local sobre compras internacionales ya gestionado automáticamente por la plataforma — no genera fricción operativa.',
    },
    {
        nombre: 'Logística',
        icono: Truck,
        score: 4.0,
        dificultad: 2.0,
        tag: 'Accesible',
        color: '#22C55E',
        variables: [
            { nombre: 'Disponibilidad de fulfillment', puntaje: 3, texto: 'Envío directo al consumidor sin intermediarios locales, vía programa de venta transfronteriza.' },
            { nombre: 'Confiabilidad logística', puntaje: 4, texto: 'Infraestructura logística sólida y corredor de envío corto y consolidado.' },
        ],
        lectura_analista: 'La distancia y los tiempos de entrega no son el problema — el costo de flete sobre productos pesados sí puede serlo.',
        variable_a_resolver: 'Cotizar flete para el producto de mayor peso antes de definir precio de publicación.',
    },
];

const sintesis = [
    { icono: CheckCircle2, label: 'Oportunidad', color: '#22C55E', texto: 'Programa de venta transfronteriza habilitado: entrada inmediata sin estructura local, con logística e impuestos gestionados por la plataforma.' },
    { icono: AlertTriangle, label: 'Riesgo', color: '#F59E0B', texto: 'Costo de flete en productos pesados puede erosionar el margen si supera el 15% del precio de venta.' },
    { icono: Wrench, label: 'Variable a resolver', color: '#0059FF', texto: 'Cotizar flete para los SKUs principales antes de publicar y fijar precio que absorba el costo logístico.' },
    { icono: Zap, label: 'Acción recomendada', color: '#0059FF', texto: 'Empezar el testeo con el producto de menor peso y ticket más competitivo con el mercado local.' },
];

const proximosPasos = [
    { paso: 1, titulo: 'Cotizar flete transfronterizo', texto: 'Pedir cotización a 2-3 couriers internacionales para los SKUs principales. Este dato define el precio de publicación.' },
    { paso: 2, titulo: 'Activar venta transfronteriza', texto: 'Habilitar el programa desde la cuenta existente en el marketplace y publicar el primer SKU con fotos de calidad.' },
    { paso: 3, titulo: 'Testear y medir', texto: 'Primeras ventas como experimento de mercado. Métricas clave: conversión, tiempo de envío real, reseñas.' },
];

const escala = [
    { de: 1.0, a: 2.0, color: '#22C55E', label: 'Accesible' },
    { de: 2.1, a: 3.0, color: '#F59E0B', label: 'Preparación' },
    { de: 3.1, a: 4.0, color: '#F97316', label: 'Compleja' },
    { de: 4.1, a: 5.0, color: '#EF4444', label: 'Alta dificultad' },
];

// Contador animado
function useCountUp(target, inView, duration = 1200) {
    const [val, setVal] = useState(0);
    const reduce = useReducedMotion();
    useEffect(() => {
        if (!inView) return;
        if (reduce) { setVal(target); return; }
        let raf;
        const start = performance.now();
        const tick = (now) => {
            const p = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setVal(+(target * eased).toFixed(1));
            if (p < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(raf);
    }, [inView, target, duration, reduce]);
    return val;
}

// Gauge circular SVG (score sobre 5)
function Gauge({ value, color, size = 76 }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, amount: 0.5 });
    const reduce = useReducedMotion();
    const R = (size - 10) / 2;
    const C = 2 * Math.PI * R;
    const frac = Math.max(0, Math.min(value / 5, 1));
    return (
        <svg ref={ref} width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="-rotate-90">
            <circle cx={size / 2} cy={size / 2} r={R} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="5" />
            <motion.circle
                cx={size / 2} cy={size / 2} r={R} fill="none" stroke={color} strokeWidth="5" strokeLinecap="round"
                strokeDasharray={C}
                initial={{ strokeDashoffset: C }}
                animate={{ strokeDashoffset: reduce || inView ? C * (1 - frac) : C }}
                transition={{ duration: 1, ease: 'easeOut' }}
            />
            <text x={size / 2} y={size / 2} transform={`rotate(90 ${size / 2} ${size / 2})`} textAnchor="middle" dominantBaseline="central"
                className="fill-white font-funnel" style={{ fontSize: size * 0.26, fontWeight: 700 }}>
                {value.toFixed(1)}
            </text>
        </svg>
    );
}

function PilarCard({ pilar, expanded, onToggle }) {
    const Icon = pilar.icono;
    return (
        <div
            role="button"
            tabIndex={0}
            onClick={onToggle}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onToggle(); } }}
            className={`border rounded-xl bg-[#0A0A35] cursor-pointer transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-[#0059FF] ${expanded ? 'border-[#0059FF]/60' : 'border-white/10 hover:border-[#0059FF]/40 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/30'}`}
        >
            <div className="p-5 flex flex-col items-center text-center gap-3">
                <div className="w-11 h-11 rounded-full bg-[#0059FF]/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-[#0059FF]" />
                </div>
                <h4 className="font-funnel text-[15px] font-bold text-white">{pilar.nombre}</h4>
                <Gauge value={pilar.score} color={pilar.color} />
                <span
                    className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-semibold font-google-sans"
                    style={{ backgroundColor: pilar.color + '22', color: pilar.color }}
                >
                    {pilar.tag}
                </span>
                <span className="flex items-center gap-1 text-[11px] text-white/40 font-google-sans">
                    Ver detalle <ChevronDown className={`w-3 h-3 transition-transform ${expanded ? 'rotate-180' : ''}`} />
                </span>
            </div>

            <AnimatePresence initial={false}>
                {expanded && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                    >
                        <div className="px-5 pb-5 space-y-3 text-left border-t border-white/5">
                            {pilar.variables.map((v, i) => (
                                <div key={i} className="pt-3">
                                    <div className="flex items-center justify-between mb-1">
                                        <span className="text-[12px] font-medium text-white font-google-sans">{v.nombre}</span>
                                        <span className="text-[12px] font-bold font-funnel" style={{ color: pilar.color }}>{v.puntaje}/5</span>
                                    </div>
                                    <div className="flex gap-1 mb-1.5">
                                        {[1, 2, 3, 4, 5].map(n => (
                                            <div key={n} className="h-1.5 flex-1 rounded-full" style={{ backgroundColor: n <= v.puntaje ? pilar.color : 'rgba(255,255,255,0.1)' }} />
                                        ))}
                                    </div>
                                    <p className="text-[12px] text-white/55 leading-relaxed font-google-sans">{v.texto}</p>
                                </div>
                            ))}

                            <div className="pt-2 mt-2 border-t border-white/5">
                                <p className="text-[11px] font-semibold text-[#0059FF] uppercase tracking-wider mb-1 font-google-sans">Lectura del analista</p>
                                <p className="text-[13px] text-white/80 leading-relaxed font-google-sans">{pilar.lectura_analista}</p>
                            </div>

                            {pilar.driver && (
                                <div className="border border-[#0059FF]/40 rounded-lg p-3 bg-[#0059FF]/5">
                                    <p className="text-[11px] font-semibold text-[#0059FF] uppercase tracking-wider mb-1 font-google-sans">Driver</p>
                                    <p className="text-[12px] text-white/75 leading-relaxed font-google-sans">{pilar.driver}</p>
                                </div>
                            )}
                            {pilar.riesgo && (
                                <div className="border border-[#F59E0B]/40 rounded-lg p-3 bg-[#F59E0B]/5">
                                    <p className="text-[11px] font-semibold uppercase tracking-wider mb-1 font-google-sans" style={{ color: '#F59E0B' }}>Riesgo</p>
                                    <p className="text-[12px] text-white/75 leading-relaxed font-google-sans">{pilar.riesgo}</p>
                                </div>
                            )}
                            {pilar.atencion && (
                                <div className="border border-[#0059FF]/40 rounded-lg p-3 bg-[#0059FF]/5">
                                    <p className="text-[11px] font-semibold text-[#0059FF] uppercase tracking-wider mb-1 font-google-sans">Atención</p>
                                    <p className="text-[12px] text-white/75 leading-relaxed font-google-sans">{pilar.atencion}</p>
                                </div>
                            )}
                            {pilar.variable_a_resolver && (
                                <div className="border border-[#0059FF]/40 rounded-lg p-3 bg-[#0059FF]/5">
                                    <p className="text-[11px] font-semibold text-[#0059FF] uppercase tracking-wider mb-1 font-google-sans">Variable a resolver</p>
                                    <p className="text-[12px] text-white/75 leading-relaxed font-google-sans">{pilar.variable_a_resolver}</p>
                                </div>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default function FichaPaisDemo() {
    const [expanded, setExpanded] = useState(null);
    const headerRef = useRef(null);
    const idpRef = useRef(null);
    const headerInView = useInView(headerRef, { once: true, amount: 0.3 });
    const idpInView = useInView(idpRef, { once: true, amount: 0.5 });
    const idpVal = useCountUp(2.1, idpInView, 1200);
    const reduce = useReducedMotion();
    const semaforoColor = '#F59E0B';

    const headerItems = [
        { label: 'Empresa', value: 'Marca Ejemplo · Línea Hogar' },
        { label: 'Categoría', value: 'Deco / Hogar' },
        { label: 'País destino', value: 'Uruguay' },
        { label: 'Ticket promedio', value: 'U$D 140' },
    ];

    return (
        <section id="ficha-pais" className="relative bg-[#000030] py-20 md:py-28 px-4 sm:px-6 overflow-hidden">

            {/* Badge fijo ejemplo ilustrativo */}
            <div className="fixed top-20 right-4 z-40 pointer-events-none hidden md:block">
                <span className="inline-flex items-center px-3 py-1.5 rounded-full text-[10px] font-semibold tracking-wider uppercase font-google-sans bg-[#0059FF]/15 text-[#0059FF] border border-[#0059FF]/30 backdrop-blur-sm">
                    Ejemplo ilustrativo · Datos no reales
                </span>
            </div>

            <div className="max-w-5xl mx-auto">
                {/* Apertura */}
                <div className="text-center mb-14">
                    <span className="text-[11px] font-semibold tracking-[0.18em] text-[#0059FF] uppercase font-google-sans mb-5 block">
                        Así es un entregable Predicta
                    </span>
                    <h2 className="font-funnel text-[32px] sm:text-[40px] md:text-[48px] font-bold text-white leading-[1.1] mb-5">
                        Esto es lo que recibís
                    </h2>
                    <p className="text-[15px] text-white/55 leading-relaxed max-w-2xl mx-auto font-google-sans">
                        Un ejemplo real de estructura y nivel de detalle. Los datos de abajo son ficticios — tu ficha se arma con fuentes verificadas para tu producto, tu mercado y tu decisión.
                    </p>
                </div>

                {/* Badge mobile */}
                <div className="md:hidden text-center mb-8">
                    <span className="inline-flex items-center px-3 py-1.5 rounded-full text-[10px] font-semibold tracking-wider uppercase font-google-sans bg-[#0059FF]/15 text-[#0059FF] border border-[#0059FF]/30">
                        Ejemplo ilustrativo · Datos no reales
                    </span>
                </div>

                {/* Header de la ficha */}
                <div ref={headerRef} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                    {headerItems.map((item, i) => (
                        <motion.div
                            key={item.label}
                            initial={reduce ? {} : { opacity: 0, y: 16 }}
                            animate={reduce || headerInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: i * 0.08, duration: 0.5, ease: 'easeOut' }}
                            className="border border-white/10 rounded-xl bg-[#0A0A35] p-4"
                        >
                            <p className="text-[10px] font-semibold text-white/40 uppercase tracking-wider mb-1 font-google-sans">{item.label}</p>
                            <p className="text-[15px] font-funnel font-bold text-white">{item.value}</p>
                        </motion.div>
                    ))}
                </div>

                {/* IDP global + semáforo + escala */}
                <div ref={idpRef} className="border border-[#0059FF]/30 rounded-2xl bg-[#0A0A35] p-6 md:p-8 mb-14">
                    <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
                        <div className="text-center md:text-left">
                            <p className="text-[11px] font-semibold text-white/40 uppercase tracking-wider mb-2 font-google-sans">IDP · Índice de Dificultad de Entrada</p>
                            <div className="flex items-baseline gap-2 justify-center md:justify-start">
                                <span className="font-funnel text-[64px] md:text-[80px] font-bold leading-none" style={{ color: semaforoColor }}>
                                    {idpVal.toFixed(1)}
                                </span>
                                <span className="text-[18px] text-white/30 font-funnel">/ 5</span>
                            </div>
                            <span
                                className="inline-flex items-center mt-3 px-3 py-1 rounded-full text-[12px] font-semibold font-google-sans"
                                style={{ backgroundColor: semaforoColor + '22', color: semaforoColor }}
                            >
                                Amarillo · Entrada con preparación
                            </span>
                        </div>

                        {/* Escala con indicador */}
                        <div className="flex-1 w-full">
                            <div className="relative">
                                <div className="flex h-3 rounded-full overflow-hidden">
                                    {escala.map((s, i) => (
                                        <div key={i} className="flex-1" style={{ backgroundColor: s.color + (idpInView || reduce ? 'cc' : '22'), transition: 'background-color 0.6s' }} />
                                    ))}
                                </div>
                                {/* Indicador deslizante */}
                                <motion.div
                                    className="absolute -top-1.5"
                                    initial={reduce ? { left: 'calc(27.5% - 8px)' } : { left: '0%' }}
                                    animate={reduce || idpInView ? { left: 'calc(27.5% - 8px)' } : { left: '0%' }}
                                    transition={{ duration: 1.1, ease: 'easeOut', delay: 0.1 }}
                                >
                                    <div className="w-4 h-6 rounded-sm bg-white shadow-lg" />
                                </motion.div>
                                <div className="flex mt-2">
                                    {escala.map((s, i) => (
                                        <div key={i} className="flex-1 text-center">
                                            <span className="text-[9px] sm:text-[10px] text-white/40 font-google-sans">{s.label}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <p className="text-[13px] text-white/55 leading-relaxed font-google-sans mt-4 max-w-xl">
                                {pilares.length ? 'Uruguay es uno de los mercados más accesibles de la región para esta categoría: infraestructura digital madura, afinidad cultural alta y competencia local débil. El principal frente a resolver es el costo logístico de productos de mayor peso.' : ''}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Pilares grid */}
                <div className="mb-8">
                    <h3 className="font-funnel text-[22px] md:text-[26px] font-bold text-white mb-2 text-center">
                        Los 5 pilares de la ficha
                    </h3>
                    <p className="text-[13px] text-white/45 text-center mb-8 font-google-sans">Tocá cada pilar para ver las variables y la lectura del analista.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-16">
                    {pilares.map((p, i) => (
                        <PilarCard key={p.nombre} pilar={p} expanded={expanded === i} onToggle={() => setExpanded(expanded === i ? null : i)} />
                    ))}
                </div>

                {/* Síntesis ejecutiva */}
                <div className="mb-16">
                    <h3 className="font-funnel text-[22px] md:text-[26px] font-bold text-white mb-8 text-center">
                        Síntesis ejecutiva
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {sintesis.map((s, i) => {
                            const Icon = s.icono;
                            return (
                                <motion.div
                                    key={s.label}
                                    initial={reduce ? {} : { opacity: 0, y: 16 }}
                                    whileInView={reduce ? {} : { opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.4 }}
                                    transition={{ delay: i * 0.08, duration: 0.5 }}
                                    className="border border-white/10 rounded-xl bg-[#0A0A35] p-5 flex gap-4"
                                >
                                    <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: s.color + '1a' }}>
                                        <Icon className="w-5 h-5" style={{ color: s.color }} />
                                    </div>
                                    <div>
                                        <p className="text-[12px] font-semibold uppercase tracking-wider mb-1 font-google-sans" style={{ color: s.color }}>{s.label}</p>
                                        <p className="text-[13px] text-white/75 leading-relaxed font-google-sans">{s.texto}</p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* Próximos pasos */}
                <div className="mb-16">
                    <h3 className="font-funnel text-[22px] md:text-[26px] font-bold text-white mb-8 text-center">
                        Próximos pasos
                    </h3>
                    <div className="relative">
                        {/* Línea conectora desktop */}
                        <div className="hidden md:block absolute top-6 left-[10%] right-[10%] h-0.5 bg-white/10">
                            <motion.div
                                className="h-full bg-[#0059FF] origin-left"
                                initial={reduce ? { scaleX: 1 } : { scaleX: 0 }}
                                whileInView={reduce ? {} : { scaleX: 1 }}
                                viewport={{ once: true, amount: 0.4 }}
                                transition={{ duration: 0.8, ease: 'easeOut' }}
                            />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
                            {proximosPasos.map((p, i) => (
                                <motion.div
                                    key={p.paso}
                                    initial={reduce ? {} : { opacity: 0, y: 16 }}
                                    whileInView={reduce ? {} : { opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.4 }}
                                    transition={{ delay: i * 0.15, duration: 0.5 }}
                                    className="text-center"
                                >
                                    <div className="w-12 h-12 mx-auto rounded-full bg-[#0059FF] flex items-center justify-center font-funnel font-bold text-white text-[18px] mb-4 relative z-10">
                                        {p.paso}
                                    </div>
                                    <h4 className="text-[15px] font-semibold text-white mb-2 font-funnel">{p.titulo}</h4>
                                    <p className="text-[13px] text-white/55 leading-relaxed font-google-sans">{p.texto}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Cierre */}
                <div className="text-center max-w-2xl mx-auto">
                    <p className="text-[13px] text-white/40 italic font-google-sans">
                        Esto es una vista simplificada. La ficha real completa tiene 6 páginas con fuentes citadas y metodología aplicada.
                    </p>
                </div>
            </div>
        </section>
    );
}