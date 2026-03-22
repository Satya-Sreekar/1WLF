import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { TmsApp } from './TmsApp'
import './styles/tms-global.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TmsApp />
  </StrictMode>,
)
