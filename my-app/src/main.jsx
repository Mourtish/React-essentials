
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const animals =["Chat", "Chien", "Oiseau", "Poisson"];

createRoot(document.getElementById('root')).render(<App />)
