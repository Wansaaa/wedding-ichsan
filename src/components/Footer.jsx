const BgImagePhone = '/assets/bg/phones/phones2.png';
const BgImageDekstop = '/assets/bg/dekstop/2.png';

function Footer() {
  return (
    <footer
      className="relative text-center bg-cover bg-top py-20 px-4 flex flex-col items-center justify-center
      bg-[url('/assets/bg/phones/phones2.png')] md:bg-[url('/assets/bg/dekstop/2.png')] text-[#2F4058] overflow-hidden"
    >
      {/* Overlay tipis untuk kelembutan visual */}
      <div className="absolute inset-0 bg-white/40 backdrop-blur-[1px]"></div>

      {/* Content Wrapper */}
      <div className="relative z-10 flex flex-col gap-4" data-aos="zoom-in" data-aos-duration="1000">
        <p className="poppins text-sm md:text-base tracking-[0.1em] opacity-90 [text-shadow:_1px_1px_2px_white]">Terima kasih atas doa dan kehadirannya</p>

        <h1 className="great text-5xl md:text-6xl font-semibold leading-normal [text-shadow:_2px_2px_8px_rgba(255,255,255,0.8)]">Ichsan & Evi</h1>

        {/* Ornamen Garis yang Lebih Artistik */}
        <div className="flex items-center justify-center gap-4 mt-2">
          <div className="w-12 h-[1px] bg-[#2F4058]/20"></div>
          <span className="text-[#2F4058]/40 text-xs">❦</span>
          <div className="w-12 h-[1px] bg-[#2F4058]/20"></div>
        </div>

        <div className="mt-6">
          <p className="text-[10px] uppercase tracking-[0.2em] opacity-60 font-sans font-bold">&copy; 2026 — Wedding Invitation</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
