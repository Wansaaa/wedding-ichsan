import React from 'react';

const Gallery = () => {
  // Data foto - Ganti path ini dengan foto asli kamu di folder assets
  const photos = [
    { id: 1, src: '/assets/gallery/1.jpg', aos: 'fade-up' },
    { id: 3, src: '/assets/gallery/3.jpg', aos: 'fade-down' },
    { id: 2, src: '/assets/gallery/2.jpg', aos: 'fade-up' },
    // { id: 4, src: '/assets/gallery/4.png', aos: 'fade-down' },
    // { id: 5, src: '/assets/gallery/5.png', aos: 'fade-up' },
    // { id: 6, src: '/assets/gallery/6.png', aos: 'fade-down' },
  ];

  return (
    <section
      id="gallery"
      className="py-20 px-4 bg-cover bg-center bg-[url('/assets/bg/phones/phones1.png')] 
      md:bg-[url('/assets/bg/dekstop/1.png')] "
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Judul Gallery */}
        <div className="mb-12" data-aos="zoom-in">
          <h2 className="great text-[#2F4058] text-5xl mb-2">Our Moments</h2>
          <div className="w-24 h-[2px] bg-[#2F4058]/20 mx-auto mb-4"></div>
          <p className="poppins text-sm text-[#2F4058]/70 italic">"Kisah kasih dalam bingkai abadi"</p>
        </div>

        {/* Grid Foto */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {photos.map((photo) => (
            <div key={photo.id} className="relative group overflow-hidden rounded-2xl shadow-md" data-aos={photo.aos}>
              <img src={photo.src} alt={`Gallery ${photo.id}`} className="w-full h-72 object-top object-cover transition-transform duration-700 group-hover:scale-110 cursor-pointer" loading="lazy" />

              {/* Overlay saat di-hover */}
              {/* <div className="absolute inset-0 bg-[#2F4058]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none flex items-center justify-center">
                <i className="ri-search-line text-white text-3xl"></i>
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
