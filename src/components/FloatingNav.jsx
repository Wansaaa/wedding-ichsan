import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const FloatingNav = ({ isPlaying, toggleMusic }) => {
  const location = useLocation();

  // LOGIKA BARU:
  // Sembunyikan HANYA JIKA (bukan di /couple) DAN (musik sedang mati)
  if (location.pathname !== '/couple' && !isPlaying) {
    return null;
  }

  return (
    <div className="fixed bottom-6 right-6 z-[9999] animate__animated animate__fadeInRight">
      <div className="flex flex-col gap-4">
        {/* Tombol Musik - Akan selalu terlihat jika musik nyala */}
        <button
          onClick={toggleMusic}
          className={`flex items-center justify-center w-12 h-12 rounded-full shadow-xl transition-all duration-300 border border-white/20 ${isPlaying ? 'bg-[#2F4058] text-white' : 'bg-white text-[#2F4058]'}`}
          title={isPlaying ? 'Matikan Musik' : 'Putar Musik'}
        >
          <i className={`${isPlaying ? 'ri-disc-line animate-spin-slow' : 'ri-play-circle-line'} text-2xl`}></i>
        </button>

        {/* Tombol Home - Kita munculkan HANYA jika berada di /couple */}
        {location.pathname === '/couple' && (
          <Link
            to="/"
            className="flex items-center justify-center w-12 h-12 bg-white text-[#2F4058] rounded-full shadow-xl hover:bg-[#F3F6FA] transition-all border border-slate-200 animate__animated animate__zoomIn"
            title="Kembali ke Beranda"
          >
            <i className="ri-home-4-line text-xl"></i>
          </Link>
        )}
      </div>
    </div>
  );
};

export default FloatingNav;
