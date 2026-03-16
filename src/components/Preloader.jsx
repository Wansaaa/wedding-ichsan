function Preloader() {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#F3F6FA]">
      {/* Ornamen Bunga Kecil yang Berputar Halus */}
      <div className="relative flex items-center justify-center">
        <div className="w-24 h-24 border-4 border-[#2F4058]/10 border-t-[#2F4058] rounded-full animate-spin"></div>
        <span className="absolute great text-2xl text-[#2F4058]">I & E</span>
      </div>

      {/* Teks Loading */}
      <h2 className="mt-6 great text-3xl text-[#2F4058] animate-pulse">Sedang Menyiapkan Kebahagiaan...</h2>
      <div className="mt-2 w-48 h-[2px] bg-slate-200 overflow-hidden relative">
        <div className="absolute inset-0 bg-[#2F4058] animate-loading-bar"></div>
      </div>
    </div>
  );
}

export default Preloader;
