import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

// Import required modules
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';

const GallerySlider = () => {
  const photos = [
    { id: 1, src: '/assets/gallery/1.jpg' },
    { id: 3, src: '/assets/gallery/3.jpg' },
    { id: 2, src: '/assets/gallery/2.jpg' },
  ];

  return (
    <section
      id="gallery"
      className="h-screen py-20 bg-cover bg-center bg-[url('/assets/bg/phones/phones1.png')] 
      md:bg-[url('/assets/bg/dekstop/1.png')] "
    >
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-10" data-aos="fade-up">
          <h2 className="great text-[#2F4058] text-5xl mb-2">Our Moments</h2>
          <p className="poppins text-xs tracking-widest text-slate-400 uppercase">Slide to see more</p>
        </div>

        <div data-aos="zoom-in" className="cursor-grab active:cursor-grabbing">
          <Swiper
            spaceBetween={0}
            effect={'fade'} // Efek transisi halus
            loop={true}
            grabCursor={true} // Menyalakan fitur kursor bawaan swiper
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            modules={[EffectFade, Pagination, Autoplay]}
            className="rounded-3xl shadow-2xl overflow-hidden border-8 border-white"
          >
            {photos.map((photo) => (
              <SwiperSlide key={photo.id}>
                <div className="relative h-[500px] w-full">
                  <img src={photo.src} alt={`Gallery ${photo.id}`} className="w-full h-full object-cover object-top" />
                  {/* Overlay gradasi agar lebih estetik */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <p className="text-center mt-8 poppins italic text-sm text-[#2F4058]/60" data-aos="fade-up">
          "Setiap detik bersamamu adalah cerita yang ingin aku abadikan selamanya."
        </p>
      </div>
    </section>
  );
};

export default GallerySlider;
