import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { useEffect, useState } from 'react';

const PreLoader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Kunci scroll saat loading
    if (loading) {
      document.body.style.overflow = 'hidden';
    }

    const timer = setTimeout(() => {
      setLoading(false);
      // Buka kembali scroll setelah loading selesai
      document.body.style.overflow = 'auto';
    }, 3000);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = 'auto'; // Pastikan scroll terbuka jika komponen unmount
    };
  }, [loading]);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-[#e3eaef] z-[9999]">
      {/* Container untuk Lottie agar ukurannya konsisten */}
      <div className="relative">
        <DotLottieReact src="https://lottie.host/ab3cb258-dc1e-4fc6-a17b-7d4851c2ecf4/UlGFgb8urI.lottie" style={{ width: '250px', height: '250px' }} loop autoplay />
      </div>

      {/* Teks dengan font 'great' agar senada dengan undangan */}
      <h2 className="great text-[#2F4058] text-3xl mt-4 animate-pulse">Ichsan & Evi</h2>

      <p className="text-[#2F4058]/60 text-xs mt-2 tracking-[0.3em] uppercase poppins">Menyiapkan Undangan...</p>
    </div>
  );
};

export default PreLoader;
