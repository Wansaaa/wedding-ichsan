const BgImagePhone = '/assets/bg/phones/phones1.png';
import Event from './Event';
import Address from './Address';
import Footer from './Footer';
import WeddingGift from './WeddingGift';
import Gallery from './Gallery';
const BgImageDekstop = '/assets/bg/dekstop/1.png';
const flowerTop = '/assets/flower/1.png';
const flowerSideRight = '/assets/flower/2.png';
const flowerSideLeft = '/assets/flower/3.png';

function Couple() {
  return (
    <>
      <section
        id="couple-top"
        className="h-screen overflow-hidden bg-cover bg-center flex items-center justify-center p-4 sm:p-6 md:p-8 bg-[url('/assets/bg/phones/phones1.png')]
      md:bg-[url('/assets/bg/dekstop/1.png')] "
      >
        <div
          className="
        bg-gradient-to-b from-[#6F87A6] to-[#2F4058]
        backdrop-blur
        shadow-2xl
        rounded-4xl
        w-full
        max-w-sm
        sm:max-w-md
        md:max-w-lg
        lg:max-w-xl
        text-center
        px-6
        py-10
        md:py-6
        flex
        flex-col
        items-center
        animate__animated animate__fadeInUp
        "
          data-aos="fade-up"
        >
          <img src={flowerTop} alt="" className="absolute -top-15 w-64" />
          <img src={flowerSideRight} alt="" className="absolute -right-8 -bottom-11 w-32 " />
          <img src={flowerSideLeft} alt="" className="absolute -left-16 -bottom-12 w-32 " />

          {/* Title */}
          <div className="mb-8">
            <h1 className="text-[#F3F6FA] text-2xl sm:text-3xl md:text-4xl great font-semibold">The Happy Couple</h1>

            {/* Divider */}
            <div className="w-20 h-[2px] bg-[#F3F6FA] mx-auto my-4 opacity-70"></div>

            <p className="text-[#F3F6FA] text-sm sm:text-base">Assalamualaikum Wr. Wb</p>

            <p className="text-[#F3F6FA] text-xs sm:text-sm md:text-base mt-2 max-w-md mx-auto opacity-90">Dengan memohon Rahmat dan Ridho Allah SWT, kami bermaksud menyelenggarakan Akad Nikah dan Resepsi Pernikahan putra-putri kami :</p>
          </div>

          <div className="flex flex-col gap-4 w-full z-10">
            {/* Groom (Pria) */}
            <div className="flex flex-col items-center sm:flex-row sm:justify-start group">
              <div className="relative">
                <img src="/assets/profil/ichsan.png" alt="pengantin pria" className="w-24 md:w-28 rounded-full border-4 border-white/20 shadow-xl transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="mt-4 sm:mt-0 sm:ml-6 sm:text-left">
                <h2 className="text-[#F3F6FA] text-2xl md:text-3xl font-semibold great tracking-wider">Ichsan Sanusi</h2>
                <p className="text-[#F3F6FA] text-xs md:text-sm mt-1 opacity-70 poppins">
                  Putra pertama dari <br className="sm:hidden" />
                  <span className="font-medium">Bpk. Yunus & Ibu Dede Kurniasih</span>
                </p>
              </div>
            </div>

            {/* Separator Icon */}
            <div className="flex items-center justify-center w-full">
              <span className="h-[1px] w-12 bg-white/20"></span>
              <span className="mx-4 text-[#F3F6FA] text-xl md:text-2xl animate-bounce-slow">❦</span>
              <span className="h-[1px] w-12 bg-white/20"></span>
            </div>

            {/* Bride (Wanita) */}
            <div className="flex flex-col items-center sm:flex-row-reverse sm:text-right group">
              <div className="relative">
                <img src="/assets/profil/evi.png" alt="pengantin wanita" className="w-24 md:w-28 rounded-full border-4 border-white/20 shadow-xl transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="mt-4 sm:mt-0 sm:mr-6">
                <h2 className="text-[#F3F6FA] text-2xl md:text-3xl font-semibold great tracking-wider">Evi Sulastri</h2>
                <p className="text-[#F3F6FA] text-xs md:text-sm mt-1 opacity-70 poppins">
                  Putri pertama dari <br className="sm:hidden" />
                  <span className="font-medium">Bpk. Suleman & Ibu Misyani</span>
                </p>
              </div>
            </div>
          </div>

          {/* Quote */}
          <q className="text-[#F3F6FA] italic text-xs sm:text-sm mt-8 opacity-80 max-w-md">Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan pasangan untukmu dari jenismu sendiri agar kamu merasa tenteram kepadanya.</q>
          <p className="text-[#F3F6FA] text-[10px] mt-2 opacity-50 font-sans tracking-widest">(Ar-Rum: 21)</p>
        </div>
      </section>
      <Event />
      <Address />
      <WeddingGift />
      <Gallery />
      <Footer />
    </>
  );
}

export default Couple;
