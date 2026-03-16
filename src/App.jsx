import React, { useState, useEffect, useRef } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
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

  // Music State
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasOpened, setHasOpened] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });

    const timer = setTimeout(() => {
      setLoading(false);
      setTimeout(() => AOS.refresh(), 100);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

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
      {/* 1. Tambahkan tag audio di sini */}
      <audio ref={audioRef} loop>
        <source src="/assets/music/wedding-song.mp3" type="audio/mpeg" />
      </audio>

      {loading ? (
        <PreLoader />
      ) : (
        <div className="animate__animated animate__fadeIn">
          <Routes>
            {/* 2. Cara kirim props onOpen yang benar */}
            <Route path="/" element={<Header onOpen={handleOpenInvitation} />} />
            <Route path="/couple" element={<Couple />} />
          </Routes>

          {/* 3. FloatingNav hanya muncul jika undangan sudah dibuka */}
          {hasOpened && <FloatingNav isPlaying={isPlaying} toggleMusic={toggleMusic} />}
        </div>
      )}
    </>
  );
}

export default App;
