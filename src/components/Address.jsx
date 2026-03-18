const flowerSideRight = '/assets/flower/2.png'; // Mengambil ornamen yang sama

function Address() {
  return (
    <section
      id="address"
      className="min-h-screen bg-cover bg-center bg-[url('/assets/bg/phones/phones1.png')] 
      md:bg-[url('/assets/bg/dekstop/1.png')] flex flex-col items-center gap-8 pb-10 overflow-hidden"
    >
      {/* Judul dengan Animasi AOS */}
      <div className="text-center pt-10 mx-auto" data-aos="fade-down" data-aos-duration="1000">
        <h1 className="text-4xl font-semibold text-[#2F4058] great">Denah Lokasi</h1>
        <div className="w-16 h-[1px] bg-[#2F4058]/30 mx-auto mt-2"></div>
      </div>

      {/* Kartu Peta */}
      <div
        className="
        bg-gradient-to-b from-[#6F87A6] to-[#2F4058]
        backdrop-blur-md
        shadow-2xl
        rounded-[2.5rem]
        w-[90%]
        max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl
        text-center
        p-4 md:p-6
        flex flex-col items-center
        justify-center 
        relative
        text-[#F3F6FA]
        "
        data-aos="zoom-in-up"
        data-aos-duration="1000"
      >
        {/* Ornamen bunga kecil di pojok kartu agar serasi dengan section Couple */}
        <img src={flowerSideRight} alt="" className="absolute -right-6 -top-10 w-24 md:w-32 z-10 opacity-90" />

        {/* Container Peta */}
        <div className="w-full h-[400px] md:h-[450px] rounded-2xl overflow-hidden shadow-inner border-2 border-white/20 relative z-0">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d247.86921475122097!2d106.8493243753606!3d-6.275900088850621!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f30055886b91%3A0x2088f9278275b340!2sPos%20RT%2010!5e0!3m2!1sen!2sid!4v1773808776032!5m2!1sen!2sid"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="Lokasi Pernikahan"
          ></iframe>
        </div>

        {/* Tombol Navigasi */}
        <a
          href="https://maps.app.goo.gl/3xCLBtxxUiqM6Vyp7"
          target="_blank"
          rel="noopener noreferrer"
          className="
            mt-6 px-8 py-3 
            bg-[#F3F6FA] text-[#2F4058] 
            rounded-full font-semibold
            hover:bg-white hover:scale-105 
            transition-all duration-300 
            shadow-xl flex items-center gap-2 text-sm
          "
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
          </svg>
          Petunjuk Jalan via Google Maps
        </a>
      </div>
    </section>
  );
}

export default Address;
