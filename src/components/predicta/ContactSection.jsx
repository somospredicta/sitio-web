import React from 'react';
import { Mail, Calendar } from 'lucide-react';

export default function ContactSection() {
    return (
        <section id="contacto" className="bg-secondary py-16 md:py-24">
            <div className="max-w-lg mx-auto px-4 sm:px-6 text-center">
                <h2 className="text-[28px] md:text-[32px] font-semibold text-foreground mb-3">
                    ¿Tenés preguntas antes de empezar?
                </h2>
                <p className="text-[15px] text-muted-foreground mb-8">
                    Agendá una reunión sin costo o escribinos directamente.
                </p>

                <a
                    href="https://calendly.com/institucional-predicta/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full h-[52px] rounded-lg bg-primary text-white font-medium text-[15px] hover:bg-primary/90 transition-colors mb-2"
                >
                    <Calendar className="w-4 h-4" />
                    Agendar una reunión virtual con Predicta
                </a>
                <p className="text-[11px] text-muted-foreground mb-6">
                    30 minutos · Sin costo · Por videollamada
                </p>

                <div className="inline-flex flex-col items-center bg-white border border-border/60 rounded-xl px-8 py-6">
                    <div className="w-11 h-11 rounded-xl bg-accent flex items-center justify-center mb-3">
                        <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <a
                        href="mailto:institucional@predicta.ar"
                        className="text-[15px] font-medium text-primary hover:underline transition-colors"
                    >
                        institucional@predicta.ar
                    </a>
                </div>
            </div>
        </section>
    );
}