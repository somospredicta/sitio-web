import React from 'react';

const team = [
    {
        name: 'Agustina Martínez',
        role: 'Dirección Estratégica e Inteligencia Comercial',
        description: 'Lic. en Relaciones Internacionales (UCC). Maestría en Comercio Internacional (UNC) en curso. Especialista en metodología Non-Market y análisis de riesgo político para decisiones empresariales.',
        initials: 'AM',
        photo: 'https://media.base44.com/images/public/6a10ca1504aa640dc039c6a0/24b29ce38_QuienesAgustina.png',
    },
    {
        name: 'Giuliano Doffo',
        role: 'Asuntos Públicos y Comunicación Institucional',
        description: 'Lic. en Ciencia Política (UCC). Asesor legislativo activo en Córdoba. Especialista en estrategia comunicacional institucional y relaciones con actores de poder.',
        initials: 'GD',
        photo: 'https://media.base44.com/images/public/6a10ca1504aa640dc039c6a0/61e146afc_QuienesGiuliano.png',
    },
];

export default function TeamSection() {
    return (
        <section id="equipo" className="bg-[#000030] py-16 md:py-24 border-t border-white/10">
            <div className="max-w-4xl mx-auto px-4 sm:px-6">
                <div className="text-center mb-14">
                    <h2 className="text-[28px] md:text-[32px] font-semibold text-white mb-3 font-funnel">
                        El equipo detrás de <span className="text-[#0059FF]">Predicta</span>
                    </h2>
                    <p className="text-[15px] text-white/60 max-w-xl mx-auto leading-relaxed font-google-sans">
                        Combinamos formación académica, experiencia institucional y tecnología para cuantificar lo que otros solo describen.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {team.map((member) => (
                        <div
                            key={member.name}
                            className="bg-[#0A0A35] border border-white/10 rounded-xl p-6 text-center hover:border-[#0059FF]/40 transition-colors shadow-lg"
                        >
                            {/* Avatar */}
                            <div className="w-20 h-20 rounded-full border-2 border-[#0059FF] mx-auto mb-4 overflow-hidden bg-white/10 flex items-center justify-center">
                                {member.photo ? (
                                    <img src={member.photo} alt={member.name} className={`w-full h-full object-cover ${member.name === 'Giuliano Doffo' ? 'object-center scale-125' : 'object-top'}`} />
                                ) : (
                                    <span className="text-[20px] font-bold text-[#0059FF]">{member.initials}</span>
                                )}
                            </div>

                            <h3 className="text-[16px] font-semibold text-white mb-1 font-funnel">{member.name}</h3>
                            <p className="text-[13px] font-medium text-[#0059FF] mb-3 font-google-sans">{member.role}</p>
                            <p className="text-[13px] text-white/70 leading-[1.6] font-google-sans">{member.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}