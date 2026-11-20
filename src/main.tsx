import { createRoot } from 'react-dom/client';
import App from './App';
import { GlassFX } from './components/GlassFX';
import { ThemeProvider } from './context/ThemeContext';
import { ParticleThemeProvider } from './context/ParticleThemeContext';
import { applyV2Fx, loadV2Fx } from './data/v2Fx';
import 'katex/dist/katex.min.css';
import './index.css';

/*
 * Applied before the first paint, not in an effect. The stylesheet's built-in
 * defaults are the Aurora gradient, so a learner who picked Sunset would
 * otherwise see one frame of the wrong colours before the effect corrected it —
 * a visible flash on every reload.
 */
applyV2Fx(loadV2Fx());

createRoot(document.getElementById('root')!).render(
  <ThemeProvider>
    <ParticleThemeProvider>
      <GlassFX />
      <App />
    </ParticleThemeProvider>
  </ThemeProvider>
);
