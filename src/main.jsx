import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import './App.css'

// Ponto de entrada da aplicacao React.
ReactDOM.createRoot(document.getElementById('root')).render(
  // BrowserRouter permite navegar entre paginas sem recarregar o site.
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
