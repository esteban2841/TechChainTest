import { createRoot } from 'react-dom/client'
import './index.css'
import LandingPage from './templates/LandingPage'

const root = createRoot(document.getElementById('root')!)
root.render(<LandingPage />)
