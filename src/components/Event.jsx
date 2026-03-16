const FlowerTop = '/assets/flower/1.png';
const flowerSideRight = '/assets/flower/2.png';
const flowerSideLeft = '/assets/flower/3.png';
const LocationIcon = '/assets/location.png'; // Menamai ulang agar tidak bentrok dengan keyword sistem
const Line = '/assets/line.png';

function Event() {
  return (
    <section
      id="event"
      className="min-h-screen bg-cover bg-center bg-[url('/assets/bg/phones/phones2.png')]
      md:bg-[url('/assets/bg/dekstop/2.png')] flex flex-col items-center justify-center gap-6 py-10 overflow-hidden"
    >
      {/* Header Tanggal Utama */}
      <div className="text-center z-10" data-aos="fade-down">
        <h1 className="text-4xl md:text-5xl great font-semibold text-[#2F4058] mb-4">Save The Date</h1>
        <div className="bg-[#2F4058] rounded-full px-6 py-2 text-[#F3F6FA] text-lg md:text-xl font-medium inline-block shadow-md">Kamis, 26 Maret 2026</div>
      </div>

      {/* Card Detail Acara */}
      <div
        className="
        bg-gradient-to-b from-[#6F87A6] to-[#2F4058]
        backdrop-blur-md
        shadow-2xl
        rounded-t-[10rem] md:rounded-[3rem]
        w-[90%] max-w-sm sm:max-w-md md:max-w-lg
        text-center
        px-6 pt-20 pb-12
        flex flex-col items-center
        relative
        text-[#F3F6FA]
        "
        data-aos="fade-up"
      >
        {/* Ornamen Bunga */}
        <img src={FlowerTop} alt="" className="absolute -top-12 w-56 md:w-64 z-20" />
        <img src={flowerSideRight} alt="" className="absolute -right-6 -bottom-8 w-28 md:w-32 z-20" />
        <img src={flowerSideLeft} alt="" className="absolute -left-10 -bottom-10 w-28 md:w-32 z-20" />

        <div className="flex flex-col gap-6 z-10 w-full">
          {/* Akad Nikah */}
          <div className="group">
            <h2 className="text-3xl md:text-4xl font-semibold mb-1 tracking-wide">Akad Nikah</h2>
            <div className="w-10 h-[1px] bg-white/30 mx-auto mb-2"></div>
            <p className="text-lg md:text-xl font-light">Pukul 09:00 WIB</p>
          </div>

          {/* Divider Custom */}
          <div className="h-6 w-full bg-contain bg-no-repeat bg-center opacity-50" style={{ backgroundImage: `url(${Line})` }}></div>

          {/* Resepsi */}
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold mb-1 tracking-wide">Resepsi</h2>
            <div className="w-10 h-[1px] bg-white/30 mx-auto mb-2"></div>
            <p className="text-lg md:text-xl font-light">Pukul 11:00 s/d Selesai</p>
          </div>

          {/* Lokasi */}
          <div className="mt-4 flex flex-col items-center">
            <img src={LocationIcon} alt="Location" className="w-16 md:w-20 mb-4 animate-bounce-slow" />
            <h3 className="font-bold text-base md:text-lg mb-2 border-b border-white/20 pb-1">Kediaman Mempelai Pria</h3>
            <p className="text-xs md:text-sm leading-relaxed opacity-90 px-4">
              Jalan Kemuning 4B Gg. Hasan Suaib 2 No. 37 <br />
              RT 10 RW 06 Pejaten Timur, Pasar Minggu <br />
              Jakarta Selatan, DKI Jakarta
            </p>
            <p className="text-[10px] mt-2 italic opacity-60">(Patokan: Pos RT 10 RW 06)</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Event;
