import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@fontsource-variable/outfit';
import '@fontsource-variable/inter';
import './styles/variables.css';
import './styles/global.css';
import './styles/components.css';
import './styles/responsive.css';
import App from './App.jsx';

// Marca que JS está activo: las animaciones de "reveal" solo se ocultan si hay JS.
document.documentElement.classList.add('js');

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
