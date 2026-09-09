import React, { useState } from 'react';
import { ArrowRight, Loader2 } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const SECTORS = [
    'Agro / AgroTech',
    'Industria / Manufactura',
    'Servicios / IT',
    'Energía / Minería',
    'Otro',
];

export default function LeadForm({ onSubmit, isSubmitting }) {
    const [form, setForm] = useState({
        first_name: '',
        last_name: '',
        company: '',
        email: '',
        position: '',
        sector: '',
    });

    const handleChange = (field, value) => {
        setForm(prev => ({ ...prev, [field]: value }));
    };

    const isValid = form.first_name && form.last_name && form.company && form.email && form.position && form.sector;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isValid) onSubmit(form);
    };

    return (
        <div className="max-w-md mx-auto">
            <div className="text-center mb-8">
                <h3 className="text-[18px] font-bold text-slate-900 mb-2 font-funnel">
                    Desbloqueá tu diagnóstico completo
                </h3>
                <p className="text-[13px] text-slate-500 font-google-sans">
                    Ingresá tus datos para ver el análisis variable por variable y la palanca crítica de tu caso.
                </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1.5">
                        <Label htmlFor="first_name" className="text-[12px] font-medium text-slate-700 font-google-sans">Nombre completo</Label>
                        <Input
                            id="first_name"
                            value={form.first_name}
                            onChange={(e) => handleChange('first_name', e.target.value)}
                            className="h-12 text-[14px] bg-white border-slate-300 text-slate-900 placeholder:text-slate-400 focus-visible:ring-[#0059FF] font-google-sans"
                            placeholder="Juan"
                        />
                    </div>
                    <div className="space-y-1.5">
                        <Label htmlFor="last_name" className="text-[12px] font-medium text-slate-700 font-google-sans">Apellido</Label>
                        <Input
                            id="last_name"
                            value={form.last_name}
                            onChange={(e) => handleChange('last_name', e.target.value)}
                            className="h-12 text-[14px] bg-white border-slate-300 text-slate-900 placeholder:text-slate-400 focus-visible:ring-[#0059FF] font-google-sans"
                            placeholder="García"
                        />
                    </div>
                </div>

                <div className="space-y-1.5">
                    <Label htmlFor="company" className="text-[12px] font-medium text-slate-700 font-google-sans">Empresa</Label>
                    <Input
                        id="company"
                        value={form.company}
                        onChange={(e) => handleChange('company', e.target.value)}
                        className="h-12 text-[14px] bg-white border-slate-300 text-slate-900 placeholder:text-slate-400 focus-visible:ring-[#0059FF] font-google-sans"
                        placeholder="Tu empresa"
                    />
                </div>

                <div className="space-y-1.5">
                    <Label htmlFor="email" className="text-[12px] font-medium text-slate-700 font-google-sans">Email corporativo</Label>
                    <Input
                        id="email"
                        type="email"
                        value={form.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        className="h-12 text-[14px] bg-white border-slate-300 text-slate-900 placeholder:text-slate-400 focus-visible:ring-[#0059FF] font-google-sans"
                        placeholder="juan@empresa.com"
                    />
                </div>

                <div className="space-y-1.5">
                    <Label htmlFor="position" className="text-[12px] font-medium text-slate-700 font-google-sans">Cargo</Label>
                    <Input
                        id="position"
                        value={form.position}
                        onChange={(e) => handleChange('position', e.target.value)}
                        className="h-12 text-[14px] bg-white border-slate-300 text-slate-900 placeholder:text-slate-400 focus-visible:ring-[#0059FF] font-google-sans"
                        placeholder="Director Comercial"
                    />
                </div>

                <div className="space-y-1.5">
                    <Label className="text-[12px] font-medium text-slate-700 font-google-sans">Sector</Label>
                    <select
                        value={form.sector}
                        onChange={(e) => handleChange('sector', e.target.value)}
                        className="w-full h-12 rounded-md border border-slate-300 bg-white px-3 text-[14px] text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0059FF] font-google-sans"
                    >
                        <option value="" className="bg-white text-slate-900">Seleccioná tu sector</option>
                        {SECTORS.map(s => (
                            <option key={s} value={s} className="bg-white text-slate-900">{s}</option>
                        ))}
                    </select>
                </div>

                <p className="text-[11px] text-slate-500 font-google-sans">
                    Tu información es confidencial y no será compartida con terceros.
                </p>

                <button
                    type="submit"
                    disabled={!isValid || isSubmitting}
                    className="w-full h-[52px] rounded-lg bg-[#0059FF] text-white font-medium text-[15px] hover:bg-[#0059FF]/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 font-google-sans"
                >
                    {isSubmitting ? (
                        <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                        <>
                            Ver mi diagnóstico completo
                            <ArrowRight className="w-4 h-4" />
                        </>
                    )}
                </button>

                <p className="text-center text-[11px] text-slate-500 font-google-sans">
                    Sin spam. Solo tu diagnóstico.
                </p>
            </form>
        </div>
    );
}