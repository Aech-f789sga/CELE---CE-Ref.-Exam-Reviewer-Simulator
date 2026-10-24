import { createRoot } from 'react-dom/client';
import App from './App';
import { ThemeProvider } from './context/ThemeContext';
import { ParticleThemeProvider } from './context/ParticleThemeContext';
import 'katex/dist/katex.min.css';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <ThemeProvider>
    <ParticleThemeProvider>
      <App />
    </ParticleThemeProvider>
  </ThemeProvider>
);
