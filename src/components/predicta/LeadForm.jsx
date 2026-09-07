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
                <h3 className="text-[18px] font-bold text-foreground mb-2">
                    Desbloqueá tu diagnóstico completo
                </h3>
                <p className="text-[13px] text-muted-foreground">
                    Ingresá tus datos para ver el análisis variable por variable y la palanca crítica de tu caso.
                </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1.5">
                        <Label htmlFor="first_name" className="text-[12px]">Nombre completo</Label>
                        <Input
                            id="first_name"
                            value={form.first_name}
                            onChange={(e) => handleChange('first_name', e.target.value)}
                            className="h-12 text-[14px]"
                            placeholder="Juan"
                        />
                    </div>
                    <div className="space-y-1.5">
                        <Label htmlFor="last_name" className="text-[12px]">Apellido</Label>
                        <Input
                            id="last_name"
                            value={form.last_name}
                            onChange={(e) => handleChange('last_name', e.target.value)}
                            className="h-12 text-[14px]"
                            placeholder="García"
                        />
                    </div>
                </div>

                <div className="space-y-1.5">
                    <Label htmlFor="company" className="text-[12px]">Empresa</Label>
                    <Input
                        id="company"
                        value={form.company}
                        onChange={(e) => handleChange('company', e.target.value)}
                        className="h-12 text-[14px]"
                        placeholder="Tu empresa"
                    />
                </div>

                <div className="space-y-1.5">
                    <Label htmlFor="email" className="text-[12px]">Email corporativo</Label>
                    <Input
                        id="email"
                        type="email"
                        value={form.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        className="h-12 text-[14px]"
                        placeholder="juan@empresa.com"
                    />
                </div>

                <div className="space-y-1.5">
                    <Label htmlFor="position" className="text-[12px]">Cargo</Label>
                    <Input
                        id="position"
                        value={form.position}
                        onChange={(e) => handleChange('position', e.target.value)}
                        className="h-12 text-[14px]"
                        placeholder="Director Comercial"
                    />
                </div>

                <div className="space-y-1.5">
                    <Label className="text-[12px]">Sector</Label>
                    <select
                        value={form.sector}
                        onChange={(e) => handleChange('sector', e.target.value)}
                        className="w-full h-12 rounded-md border border-input bg-background px-3 text-[14px] text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    >
                        <option value="">Seleccioná tu sector</option>
                        {SECTORS.map(s => (
                            <option key={s} value={s}>{s}</option>
                        ))}
                    </select>
                </div>

                <p className="text-[11px] text-muted-foreground">
                    Tu información es confidencial y no será compartida con terceros.
                </p>

                <button
                    type="submit"
                    disabled={!isValid || isSubmitting}
                    className="w-full h-[52px] rounded-lg bg-primary text-white font-medium text-[15px] hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
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

                <p className="text-center text-[11px] text-muted-foreground">
                    Sin spam. Solo tu diagnóstico.
                </p>
            </form>
        </div>
    );
}