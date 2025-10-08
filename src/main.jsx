import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Profiler } from 'react'
import store from './Store.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <provider store={store}><App /></provider>
    
  </StrictMode>,
)
