import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Tambahkan import ini
import './index.css';
import App from './App.jsx';

// Animate Style
import 'animate.css';

// Remix Icon
import 'remixicon/fonts/remixicon.css';

// Animasi AOS
import AOS from 'aos';
import 'aos/dist/aos.css';

// Inisialisasi AOS di sini atau di dalam App.jsx (disarankan di App.jsx)
AOS.init({
  duration: 1000,
  once: true,
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
