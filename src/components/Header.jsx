const Tanggal = '/assets/bg/3.png';

import { Link } from 'react-router-dom';

// Terima prop onOpen dari App.jsx
function Header({ onOpen }) {
  return (
    <section
      id="header"
      className="flex items-center justify-center min-h-screen bg-cover bg-center relative px-4 overflow-hidden bg-[url('/assets/bg/bg-main.png')]
      md:bg-[url('/assets/bg/bg-tablet.png')] lg:bg-[url('/assets/bg/bg-dekstop.png')]"
    >
      {/* Ornamen Tanggal */}
      <img src={Tanggal} alt="Ornamen Tanggal" className="absolute w-20 sm:w-24 md:w-28 lg:w-32 right-3 sm:right-6 md:right-12 lg:right-20 top-0 shadow-lg rounded-b-3xl animate__animated animate__fadeInDown animate__delay-1s z-20" />

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

          <div className="mt-8">
            {/* Tombol Buka Undangan memanggil onOpen dari App.jsx */}
            <Link to="/couple" onClick={onOpen} className="inline-flex items-center gap-2 px-8 py-3 bg-[#2F4058] text-[#F3F6FA] rounded-full shadow-xl hover:bg-[#3d526e] transition-all transform hover:scale-105 active:scale-95">
              <i className="ri-mail-open-line text-xl"></i>
              <span className="font-medium poppins">Buka Undangan</span>
            </Link>
          </div>
        </div>

        {/* Deskripsi Bawah */}
        <p className="text-center mx-auto text-[13px] sm:text-sm max-w-[280px] sm:max-w-[400px] leading-relaxed opacity-70 poppins italic invit">Tanpa mengurangi rasa hormat, kami mengundang Anda untuk hadir di acara pernikahan kami.</p>
      </div>
    </section>
  );
}

export default Header;
