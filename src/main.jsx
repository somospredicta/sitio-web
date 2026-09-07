import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// Importás el Tooltip de shadcn acá arriba:
import { TooltipProvider } from "@/components/ui/tooltip"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Envolvés el componente App así: */}
    <TooltipProvider>
      <App />
    </TooltipProvider>
  </React.StrictMode>,
)