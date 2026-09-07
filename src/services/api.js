const API_BASE_URL = (import.meta.env.VITE_API_URL || 'http://localhost:8000').replace(/\/+$/, '');

export async function createAutodiagnosticLead(leadData) {
  const response = await fetch(`${API_BASE_URL}/api/leads/autodiagnostic`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(leadData),
  });
  if (!response.ok) {
    throw new Error(`Error ${response.status}: Error al guardar el autodiagnóstico`);
  }
  return response.json();
}

export async function createCountrySheetLead(leadData) {
  const response = await fetch(`${API_BASE_URL}/api/leads/file`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(leadData),
  });
  if (!response.ok) {
    throw new Error(`Error ${response.status}: Error al guardar la ficha país`);
  }
  return response.json();
}

export async function getLeads() {
  const response = await fetch(`${API_BASE_URL}/api/leads`);
  if (!response.ok) {
    throw new Error(`Error ${response.status}: Error al obtener los leads`);
  }
  return response.json();
}
