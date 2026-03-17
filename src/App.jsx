import React, { useState, useEffect, useRef } from 'react';
import { Routes, Route, useLocation, useNavigate, Navigate } from 'react-router-dom'; // Tambahkan useNavigate & Navigate
import AOS from 'aos';

// Components
import PreLoader from './components/Preloader';
import Header from './components/Header';
import Couple from './components/Couple';
import FloatingNav from './components/FloatingNav';

// Styles
import 'aos/dist/aos.css';
import 'animate.css';

function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const navigate = useNavigate(); // Deklarasi sekali saja

  // Music State
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasOpened, setHasOpened] = useState(false);

  // 1. Logic Refresh & Inisialisasi
  useEffect(() => {
    // Cek Refresh: Balik ke home jika reload
    const isReload = window.performance
      .getEntriesByType('navigation')
      .map((nav) => nav.type)
      .includes('reload');

    if (isReload && location.pathname !== '/') {
      navigate('/', { replace: true });
    }

    // Inisialisasi AOS
    AOS.init({
      duration: 1000,
      once: false,
    });

    // Simulasi Loading
    const timer = setTimeout(() => {
      setLoading(false);
      setTimeout(() => AOS.refresh(), 100);
    }, 3000);

    return () => clearTimeout(timer);
  }, []); // Kosongkan dependency agar hanya jalan sekali saat mount

  // 2. Logic Scroll & AOS Refresh setiap pindah halaman
  useEffect(() => {
    if (location.pathname === '/couple') {
      const scrollTimer = setTimeout(() => {
        const element = document.getElementById('couple-top');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        AOS.refresh();
      }, 100);
      return () => clearTimeout(scrollTimer);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  // 3. Music Handlers
  const handleOpenInvitation = () => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3;
      audioRef.current.play().catch((err) => console.log('Autoplay dicegah browser', err));
      setHasOpened(true);
      setIsPlaying(true);
    }
  };

  const toggleMusic = () => {
    if (audioRef.current) {
      if (audioRef.current.paused) {
        audioRef.current.play();
        setIsPlaying(true);
      } else {
        audioRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <>
      {/* File audio ditaruh paling luar agar tidak terpengaruh re-render */}
      <audio ref={audioRef} loop>
        <source src="/assets/music/song.mp3" type="audio/mpeg" />
      </audio>

      {loading ? (
        <PreLoader />
      ) : (
        <div className="animate__animated animate__fadeIn">
          <Routes>
            <Route path="/" element={<Header onOpen={handleOpenInvitation} />} />

            {/* Proteksi rute /couple */}
            <Route path="/couple" element={hasOpened ? <Couple /> : <Navigate to="/" replace />} />
          </Routes>

          {/* FloatingNav tetap muncul jika musik play meskipun balik ke home */}
          {(hasOpened || isPlaying) && <FloatingNav isPlaying={isPlaying} toggleMusic={toggleMusic} />}
        </div>
      )}
    </>
  );
}

export default App;
