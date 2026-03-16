const BgImage = '/assets/bg/bg-header.png';
const Tanggal = '/assets/bg/3.png';

import React, { useRef, useState } from 'react';

function Header() {
  const audioRef = useRef(null);
  const [hasOpened, setHasOpened] = useState(false); // State untuk melacak apakah undangan sudah dibuka
  const [isPlaying, setIsPlaying] = useState(false); // State untuk play/pause musik

  const handleOpenInvitation = () => {
    if (audioRef.current) {
      audioRef.current.volume = 0.1; // Mengatur volume ke 50%
      audioRef.current.play();
      setHasOpened(true); // Undangan sekarang terbuka
      setIsPlaying(true); // Musik mulai berputar
    }
  };

  const toggleMusic = () => {
    if (audioRef.current.paused) {
      audioRef.current.play();
      setIsPlaying(true);
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };
  return (
    <section
      id="header"
      className="flex items-center justify-center min-h-screen bg-cover bg-center relative px-4 overflow-hidden bg-[url('/assets/bg/bg-main.png')]
      md:bg-[url('/assets/bg/bg-tablet.png')] lg:bg-[url('/assets/bg/bg-dekstop.png')]"
    >
      {/* Ornamen Tanggal - Diletakkan di pojok kanan atas */}
      <img
        src={Tanggal}
        alt="Ornamen Tanggal"
        className="
          absolute
          w-20 sm:w-24 md:w-28 lg:w-32
          right-3 sm:right-6 md:right-12 lg:right-20
          top-0
          shadow-lg
          rounded-b-3xl
          animate__animated
          animate__fadeInDown
          animate__delay-1s
          z-20
        "
      />

      <div className="text-center max-w-xl relative z-10">
        {/* Judul & Nama Pengantin */}
        <div className="judul-header">
          <h1 className="font-semibold tracking-[0.2em] text-xs sm:text-sm md:text-base poppins text-[#2F4058]/80 uppercase">Undangan Pernikahan</h1>

          <h2 className="font-bold great mt-4 text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-tight text-[#2F4058] drop-shadow-sm">
            Ichsan
            <span className="text-3xl sm:text-4xl md:text-5xl mx-4 font-light">&</span>
            Evi
          </h2>
        </div>

        {/* Bagian Tamu */}
        <div className="mt-10 mb-6 tamu-header">
          <p className="tracking-wide font-medium text-sm md:text-base poppins text-[#2F4058]/70">Kepada Yth.</p>
          <p className="font-bold text-xl sm:text-2xl md:text-3xl mt-1 text-[#2F4058]">Tamu Undangan</p>

          <section id="header" className="...">
            <audio ref={audioRef} loop>
              <source src="/assets/music/wedding-song.mp3" type="audio/mpeg" />
            </audio>

            {/* Tombol Buka Undangan Utama */}
            <a href="#couple" onClick={handleOpenInvitation} className="inline-flex items-center gap-2 mt-8 px-8 py-3 bg-[#2F4058] text-[#F3F6FA] rounded-full shadow-xl">
              <span>Buka Undangan</span>
            </a>

            {/* Tombol Musik Mengambang: Hanya muncul jika hasOpened = true */}
            {hasOpened && (
              <div className="fixed bottom-5 right-5 z-50">
                <button onClick={toggleMusic} className={`p-3 rounded-full text-white shadow-2xl transition-all duration-500 transform ${isPlaying ? 'bg-[#2F4058] animate-spin-slow scale-110' : 'bg-slate-400 scale-100'}`}>
                  {isPlaying ? (
                    /* Ikon Pause */
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                      <path fillRule="evenodd" d="M6.75 5.25a.75.75 0 0 1 .75.75v12a.75.75 0 0 1-1.5 0V6a.75.75 0 0 1 .75-.75ZM17.25 5.25a.75.75 0 0 1 .75.75v12a.75.75 0 0 1-1.5 0V6a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
                    </svg>
                  ) : (
                    /* Ikon Play */
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                      <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
                    </svg>
                  )}
                </button>
              </div>
            )}
          </section>
        </div>

        {/* Deskripsi Bawah */}
        <p className="text-center mx-auto text-[13px] sm:text-sm max-w-[280px] sm:max-w-[400px] leading-relaxed opacity-70 poppins italic invit">Tanpa mengurangi rasa hormat, kami mengundang Anda untuk hadir di acara pernikahan kami.</p>
      </div>
    </section>
  );
}

export default Header;
