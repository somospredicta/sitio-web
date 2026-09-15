import React, { useState } from 'react';
import { Globe, Users, FileText, Check, X } from 'lucide-react';
import FichaPaisDemo from '@/components/predicta/FichaPaisDemo';
import { createCountrySheetLead } from '@/services/api';

const cards = [
    {
        icon: Globe,
        title: 'El mercado digital',
        description: 'Penetración de e-commerce, plataformas dominantes, medios de pago disponibles y acceso para vendedores externos.',
    },
    {
        icon: Users,
        title: 'El consumidor y la competencia',
        description: 'Demanda real de tu categoría, afinidad con marcas extranjeras, ticket promedio del mercado y quién ya está vendiendo lo que vos querés vender.',
    },
    {
        icon: FileText,
        title: 'Regulación y logística',
        description: 'Aranceles de importación por canal online, requisitos de etiquetado, restricciones de tu categoría y opciones de envío desde Argentina al país destino.',
    },
];

const includes = [
    'Análisis de mercado digital, consumidor y competencia',
    'Regulación y logística de entrada para tu categoría',
    'IDP — Índice de Dificultad de Entrada (1 a 5)',
    'Entregable en PDF con lectura del analista',
    'Una ronda de consultas incluida',
];

const PAIS_OPTIONS = [
    'Argentina', 'Bolivia', 'Brasil', 'Chile', 'Colombia', 'Costa Rica', 'Cuba', 'Ecuador', 'El Salvador',
    'Guatemala', 'Honduras', 'México', 'Nicaragua', 'Panamá', 'Paraguay', 'Perú', 'República Dominicana',
    'Uruguay', 'Venezuela',
    'Estados Unidos', 'Canadá',
    'Unión Europea', 'Asia', 'Oceanía',
    'Otro',
];
const EMPTY_FORM = { nombre_completo: '', mail: '', telefono: '', marca: '', producto: '', pais: '', pais_otro: '' };

export default function FichaDesembarco() {
    const [showForm, setShowForm] = useState(false);
    const [form, setForm] = useState(EMPTY_FORM);
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const isValid = form.mail.trim() !== '';

    const handleChange = (e) => {
        setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!isValid) return;
        setLoading(true);
        try {
            const paisFinal = form.pais === 'Otro' ? form.pais_otro : form.pais;
            await createCountrySheetLead({
                first_name: form.nombre_completo,
                last_name: '',
                email: form.mail,
                company: form.marca,
                source: 'ficha_pais',
                answers: { telefono: form.telefono, producto: form.producto, pais: paisFinal, tipo: 'ficha_desembarco' },
            });
        } catch (err) {
            console.error('Error al guardar lead ficha país:', err);
        }
        setLoading(false);
        setSubmitted(true);
    };

    return (
        <section id="ficha-desembarco" className="bg-[#000030]">

            {/* SUB-BLOQUE 1 — EYEBROW + TÍTULO + SUBTÍTULO */}
            <div className="py-20 md:py-28 px-4 sm:px-6 text-center max-w-3xl mx-auto">
                <span className="text-[11px] font-semibold tracking-[0.18em] text-[#0059FF] uppercase font-google-sans mb-5 block">
                    Nuevo Producto · Para E-Commerce
                </span>
                <h2 className="font-funnel text-[32px] sm:text-[40px] md:text-[48px] font-bold text-white leading-[1.1] mb-6">
                    Antes de entrar a un mercado nuevo, conocé{' '}
                    <span className="text-[#0059FF]">con qué te vas a encontrar.</span>
                </h2>
                <p className="text-[16px] text-white/60 leading-relaxed max-w-2xl mx-auto font-google-sans">
                    La Ficha de Desembarco País es el análisis que toda marca propia necesita antes de vender en el exterior. No te dice si te conviene entrar. Te dice qué te vas a encontrar cuando lo hagas.
                </p>
            </div>

            {/* SUB-BLOQUE 2 — QUÉ INCLUYE */}
            <div className="bg-[#0A0A35] py-16 md:py-20 px-4 sm:px-6">
                <div className="max-w-5xl mx-auto">
                    <h3 className="font-funnel text-[28px] md:text-[34px] font-bold text-white text-center mb-12">
                        Qué analizamos por vos
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                        {cards.map((card) => {
                            const Icon = card.icon;
                            return (
                                <div key={card.title} className="border border-[#0059FF]/25 rounded-xl p-6">
                                    <Icon className="w-6 h-6 text-[#0059FF] mb-4 stroke-[1.5]" />
                                    <h4 className="text-[16px] font-semibold text-white mb-2 font-funnel">{card.title}</h4>
                                    <p className="text-[14px] text-white/55 leading-relaxed font-google-sans">{card.description}</p>
                                </div>
                            );
                        })}
                    </div>
                    <p className="text-center text-[13px] text-white/40 italic font-google-sans">
                        "El análisis lo hace Predicta con fuentes verificadas. Vos solo nos decís a dónde querés ir y qué querés vender."
                    </p>
                </div>
            </div>

            {/* SUB-BLOQUE 3 — ENTREGABLE PREDICTA (DEMO) */}
            <FichaPaisDemo />

            {/* SUB-BLOQUE 4 — PRECIO Y CTA */}
            <div className="bg-[#000030] py-20 md:py-28 px-4 sm:px-6">
                <div className="max-w-xl mx-auto text-center">
                    <h3 className="font-funnel text-[28px] md:text-[34px] font-bold text-white mb-10">
                        Tu Ficha de Desembarco País
                    </h3>

                    <div className="border border-[#0059FF]/30 rounded-2xl p-8 md:p-10 bg-[#0A0A35] relative">
                        {/* Badge */}
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                            <span className="bg-[#0059FF] text-white text-[11px] font-semibold px-4 py-1.5 rounded-full font-google-sans whitespace-nowrap">
                                Precio de lanzamiento · Solo este mes
                            </span>
                        </div>

                        {/* Prices */}
                        <div className="mb-8 mt-2">
                            <div className="text-[22px] text-white/40 font-google-sans line-through mb-1">U$D 60</div>
                            <div className="text-[52px] font-bold text-[#0059FF] font-funnel leading-none">U$D 35</div>
                        </div>

                        {/* Includes */}
                        <ul className="text-left space-y-3 mb-8">
                            {includes.map((item) => (
                                <li key={item} className="flex items-start gap-3">
                                    <Check className="w-4 h-4 text-[#22C55E] mt-0.5 flex-shrink-0" />
                                    <span className="text-[14px] text-white font-google-sans">{item}</span>
                                </li>
                            ))}
                        </ul>

                        {/* CTA Button */}
                        <button
                            onClick={() => { setShowForm(true); setSubmitted(false); setTimeout(() => document.getElementById('form-desembarco')?.scrollIntoView({ behavior: 'smooth' }), 100); }}
                            className="w-full h-[52px] rounded-full bg-[#0059FF] text-white font-bold text-[15px] hover:bg-[#0059FF]/90 transition-colors font-google-sans mb-3"
                        >
                            Quiero mi Ficha de Desembarco País
                        </button>
                        <p className="text-[12px] text-white/40 font-google-sans">
                            Completá el formulario y nos contactamos en menos de 24 horas.
                        </p>
                    </div>
                </div>
            </div>

            {/* SUB-BLOQUE 5 — FORMULARIO */}
            {showForm && (
                <div id="form-desembarco" className="bg-[#0A0A35] border-t border-[#0059FF]/20 py-16 md:py-20 px-4 sm:px-6">
                    <div className="max-w-xl mx-auto">
                        {submitted ? (
                            <div className="text-center py-10">
                                <Check className="w-12 h-12 text-[#22C55E] mx-auto mb-5" />
                                <p className="text-[18px] text-white font-google-sans leading-relaxed">
                                    ¡Listo! Recibimos tu solicitud. Nos contactamos en menos de 24 horas para confirmar los detalles de tu Ficha de Desembarco País.
                                </p>
                            </div>
                        ) : (
                            <>
                                <div className="flex items-center justify-between mb-8">
                                    <h3 className="font-funnel text-[26px] md:text-[30px] font-bold text-white">Contanos tu caso</h3>
                                    <button onClick={() => setShowForm(false)} className="text-white/40 hover:text-white transition-colors p-1">
                                        <X className="w-5 h-5" />
                                    </button>
                                </div>
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <input name="nombre_completo" value={form.nombre_completo} onChange={handleChange} placeholder="Nombre completo" className="w-full h-12 px-4 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/30 text-[14px] font-google-sans focus:outline-none focus:border-[#0059FF] transition-colors" />
                                    <input name="mail" type="email" value={form.mail} onChange={handleChange} placeholder="tu@mail.com" className="w-full h-12 px-4 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/30 text-[14px] font-google-sans focus:outline-none focus:border-[#0059FF] transition-colors" />
                                    <input name="telefono" value={form.telefono} onChange={handleChange} placeholder="Opcional: Tu teléfono" className="w-full h-12 px-4 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/30 text-[14px] font-google-sans focus:outline-none focus:border-[#0059FF] transition-colors" />
                                    <input name="marca" value={form.marca} onChange={handleChange} placeholder="¿Cómo se llama tu marca?" className="w-full h-12 px-4 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/30 text-[14px] font-google-sans focus:outline-none focus:border-[#0059FF] transition-colors" />
                                    <input name="producto" value={form.producto} onChange={handleChange} placeholder="¿Qué producto querés exportar?" className="w-full h-12 px-4 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/30 text-[14px] font-google-sans focus:outline-none focus:border-[#0059FF] transition-colors" />
                                    <select name="pais" value={form.pais} onChange={handleChange} className="w-full h-12 px-4 rounded-lg bg-white/5 border border-white/10 text-[14px] font-google-sans focus:outline-none focus:border-[#0059FF] transition-colors appearance-none text-white/60">
                                        <option value="" disabled className="bg-[#0A0A35] text-white/30">¿A qué país estás pensando en entrar?</option>
                                        {PAIS_OPTIONS.map((p) => (
                                            <option key={p} value={p} className="bg-[#0A0A35] text-white">{p}</option>
                                        ))}
                                    </select>
                                    {form.pais === 'Otro' && (
                                        <input name="pais_otro" value={form.pais_otro} onChange={handleChange} placeholder="Escribí el país" className="w-full h-12 px-4 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/30 text-[14px] font-google-sans focus:outline-none focus:border-[#0059FF] transition-colors" />
                                    )}
                                    <button type="submit" disabled={!isValid || loading} className="w-full h-[52px] rounded-full bg-[#0059FF] text-white font-bold text-[15px] hover:bg-[#0059FF]/90 transition-colors font-google-sans disabled:opacity-50 disabled:cursor-not-allowed">
                                        {loading ? 'Enviando...' : 'Enviar solicitud'}
                                    </button>
                                    <p className="text-center text-[12px] text-white/40 font-google-sans">
                                        Te respondemos en menos de 24hs, sin compromiso.
                                    </p>
                                </form>
                            </>
                        )}
                    </div>
                </div>
            )}

            {/* SUB-BLOQUE 6 — NO E-COMMERCE */}
            <div className="bg-[#06061A] border-t border-[#0059FF]/15 py-10 px-4 sm:px-6">
                <p className="text-center text-[13px] text-white/35 italic font-google-sans max-w-2xl mx-auto">
                    ¿Tu empresa no es un e-commerce pero querés entender el entorno de un mercado antes de tomar una decisión? El análisis se adapta. Escribinos a{' '}
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=institucional@predicta.ar" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white/70 underline transition-colors">institucional@predicta.ar</a>
                </p>
            </div>

        </section>
    );
}