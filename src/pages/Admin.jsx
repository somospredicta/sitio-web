import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getLeads } from '@/services/api';

const ADMIN_USER = 'Predicta26';
const ADMIN_PASS = 'Predicta26';

function AdminLogin({ onLogin }) {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user === ADMIN_USER && pass === ADMIN_PASS) {
      onLogin();
    } else {
      setError(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#000030] flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="flex flex-col items-center mb-8">
          <img
            src="https://media.base44.com/images/public/6a10ca1504aa640dc039c6a0/c82ed7f4c_isotitpoazulespectro.png"
            alt="Predicta"
            className="h-10 w-auto mb-3"
          />
          <span className="text-2xl font-funnel font-bold text-white tracking-tight">Predicta</span>
          <p className="text-white/40 text-sm mt-1 font-google-sans">Panel interno</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-[#0A0A35] border border-white/10 rounded-2xl p-8 space-y-4">
          <div>
            <label className="block text-white/60 text-xs font-medium mb-1.5 font-google-sans">Usuario</label>
            <input
              type="text"
              value={user}
              onChange={e => { setUser(e.target.value); setError(false); }}
              className="w-full h-11 px-4 rounded-lg bg-white/5 border border-white/10 text-white text-sm font-google-sans focus:outline-none focus:border-[#0059FF] transition-colors"
              autoComplete="username"
            />
          </div>
          <div>
            <label className="block text-white/60 text-xs font-medium mb-1.5 font-google-sans">Contraseña</label>
            <input
              type="password"
              value={pass}
              onChange={e => { setPass(e.target.value); setError(false); }}
              className="w-full h-11 px-4 rounded-lg bg-white/5 border border-white/10 text-white text-sm font-google-sans focus:outline-none focus:border-[#0059FF] transition-colors"
              autoComplete="current-password"
            />
          </div>
          {error && <p className="text-red-400 text-xs font-google-sans">Usuario o contraseña incorrectos.</p>}
          <button
            type="submit"
            className="w-full h-11 rounded-full bg-[#0059FF] text-white text-sm font-medium hover:bg-[#0059FF]/90 transition-colors font-google-sans mt-2"
          >
            Ingresar
          </button>
        </form>
      </div>
    </div>
  );
}

const fichaAnswers = (lead) => lead.answers || {};
const getTelefono = (lead) => fichaAnswers(lead).telefono || '—';
const getProducto = (lead) => fichaAnswers(lead).producto || '—';
const getPais = (lead) => fichaAnswers(lead).pais || '—';
const SOURCE_LABELS = { MEP: 'Autodiagnóstico', IRR: 'Autodiagnóstico', IGS: 'Autodiagnóstico', IVC: 'Autodiagnóstico', ficha_pais: 'Ficha País' };

function scoreColor(score) {
  if (!score) return 'text-gray-400';
  if (score >= 4) return 'text-green-600';
  if (score >= 2.5) return 'text-yellow-600';
  return 'text-red-600';
}

export default function Admin() {
  const [auth, setAuth] = useState(false);
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');
  const [selected, setSelected] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth) return;
    setLoading(true);
    getLeads()
      .then(data => {
        setLeads(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error al cargar leads:', err);
        setLoading(false);
      });
  }, [auth]);

  if (!auth) return <AdminLogin onLogin={() => setAuth(true)} />;

  const filtered = filter === 'all' ? leads : leads.filter(l =>
    filter === 'ficha' ? l.source === 'ficha_pais' : (l.protocol === filter && l.source !== 'ficha_pais')
  );

  const tabs = [
    { key: 'all', label: 'Todos' },
    { key: 'ficha', label: 'Ficha País' },
    { key: 'MEP', label: 'MEP' },
    { key: 'IRR', label: 'IRR' },
    { key: 'IGS', label: 'IGS' },
    { key: 'IVC', label: 'IVC' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-[#000030] px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button onClick={() => navigate('/')} className="text-white/50 hover:text-white text-sm">← Volver</button>
          <span className="text-white/30">|</span>
          <span className="text-white font-funnel font-bold text-lg">Panel de Leads</span>
        </div>
        <span className="text-white/40 text-sm">{leads.length} registros totales</span>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Tabs */}
        <div className="flex gap-2 mb-6 flex-wrap">
          {tabs.map(t => (
            <button
              key={t.key}
              onClick={() => setFilter(t.key)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${filter === t.key ? 'bg-[#0059FF] text-white' : 'bg-white text-gray-600 border border-gray-200 hover:border-[#0059FF]'}`}
            >
              {t.label}
              <span className="ml-1.5 text-xs opacity-70">
                ({t.key === 'all' ? leads.length : t.key === 'ficha' ? leads.filter(l => l.source === 'ficha_pais').length : leads.filter(l => l.protocol === t.key && l.source !== 'ficha_pais').length})
              </span>
            </button>
          ))}
        </div>

        {loading ? (
          <div className="text-center py-20 text-gray-400">Cargando...</div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-20 text-gray-400">No hay leads en esta categoría aún.</div>
        ) : (
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden overflow-x-auto">
            <table className="w-full text-sm whitespace-nowrap">
              <thead>
                <tr className="border-b border-gray-100 bg-gray-50">
                  <th className="text-left px-4 py-3 font-medium text-gray-500">Nombre completo</th>
                  <th className="text-left px-4 py-3 font-medium text-gray-500">Email</th>
                  <th className="text-left px-4 py-3 font-medium text-gray-500">Teléfono</th>
                  <th className="text-left px-4 py-3 font-medium text-gray-500">Marca</th>
                  <th className="text-left px-4 py-3 font-medium text-gray-500">Producto a exportar</th>
                  <th className="text-left px-4 py-3 font-medium text-gray-500">País</th>
                  <th className="text-left px-4 py-3 font-medium text-gray-500">Fecha</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map(lead => (
                  <tr key={lead.id} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-3 font-medium text-gray-800">
                      {lead.first_name || lead.last_name ? `${lead.first_name || ''} ${lead.last_name || ''}`.trim() : '—'}
                    </td>
                    <td className="px-4 py-3 text-gray-600">
                      <a href={`mailto:${lead.email}`} className="text-[#0059FF] hover:underline">{lead.email || '—'}</a>
                    </td>
                    <td className="px-4 py-3 text-gray-600">{getTelefono(lead)}</td>
                    <td className="px-4 py-3 text-gray-600">{lead.company || '—'}</td>
                    <td className="px-4 py-3 text-gray-600 max-w-[220px] truncate" title={getProducto(lead)}>{getProducto(lead)}</td>
                    <td className="px-4 py-3 text-gray-600">{getPais(lead)}</td>
                    <td className="px-4 py-3 text-gray-400 text-xs">
                      {lead.created_date ? new Date(lead.created_date).toLocaleDateString('es-AR', { day: '2-digit', month: '2-digit', year: '2-digit' }) : '—'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Detail modal */}
      {selected && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setSelected(null)}>
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-xl max-h-[80vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
            <div className="flex items-start justify-between mb-4">
              <div>
                <h2 className="font-funnel text-xl font-bold text-gray-900">
                  {selected.first_name || selected.last_name ? `${selected.first_name || ''} ${selected.last_name || ''}`.trim() : selected.email}
                </h2>
                <p className="text-sm text-gray-500">{selected.position ? `${selected.position} · ` : ''}{selected.company || ''}</p>
              </div>
              <button onClick={() => setSelected(null)} className="text-gray-400 hover:text-gray-600 text-xl font-light">×</button>
            </div>

            <div className="space-y-3 text-sm">
              {selected.source === 'ficha_pais' ? (
                <>
                  <Row label="Nombre completo" value={selected.first_name} />
                  <Row label="Email" value={<a href={`mailto:${selected.email}`} className="text-[#0059FF]">{selected.email}</a>} />
                  <Row label="Teléfono" value={getTelefono(selected)} />
                  <Row label="Marca" value={selected.company} />
                  <Row label="Producto a exportar" value={getProducto(selected)} />
                  <Row label="País de interés" value={getPais(selected)} />
                  <div className="flex justify-between items-center py-1 border-b border-gray-50">
                    <span className="text-gray-500">Origen</span>
                    <span className="text-gray-800">Ficha País</span>
                  </div>
                </>
              ) : (
                <>
                  <Row label="Email" value={<a href={`mailto:${selected.email}`} className="text-[#0059FF]">{selected.email}</a>} />
                  <Row label="Sector" value={selected.sector} />
                  <Row label="Origen" value={`Autodiagnóstico ${selected.protocol || ''}`} />
                  {selected.ivp_score && <Row label="Score IVP" value={<span className={`font-semibold ${scoreColor(selected.ivp_score)}`}>{selected.ivp_score.toFixed(2)} / 5</span>} />}
                  {selected.knockouts_count > 0 && <Row label="Knockouts" value={<span className="text-red-600 font-medium">{selected.knockouts_count} condición(es) crítica(s)</span>} />}
                  {selected.variable_scores && (
                    <div className="pt-2">
                      <p className="text-gray-500 font-medium mb-2">Scores por variable</p>
                      <div className="space-y-1">
                        {Object.entries(selected.variable_scores).map(([k, v]) => (
                          <div key={k} className="flex justify-between items-center bg-gray-50 rounded px-3 py-1.5">
                            <span className="text-gray-600">{k}</span>
                            <span className={`font-semibold ${scoreColor(v)}`}>{Number(v).toFixed(2)}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </>
              )}
              <Row label="Fecha" value={selected.created_date ? new Date(selected.created_date).toLocaleString('es-AR') : '—'} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function Row({ label, value }) {
  return (
    <div className="flex justify-between items-center py-1 border-b border-gray-50">
      <span className="text-gray-500">{label}</span>
      <span className="text-gray-800">{value || '—'}</span>
    </div>
  );
}