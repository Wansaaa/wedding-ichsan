import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import Header from './components/Header';
import Footer from './components/Footer';

// Animate Style
import 'animate.css';

// Animasi AOS
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

// remix icon
import 'remixicon/fonts/remixicon.css';
import PreLaoder from './components/Preloader.jsx';

// Preloader

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
