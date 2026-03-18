import React, { useState } from 'react';
import Swal from 'sweetalert2';

const WeddingGift = () => {
  const showAddress = () => {
    const alamatLengkap = 'Jln Kemuning 4B Gg. Hasan Suaib 2 No. 37 RT 10 RW 06, Pejaten Timur. Jakarta Selatan 12510';

    Swal.fire({
      title: 'Alamat Pengiriman',
      html: `
      <div class="text-center poppins px-2">
        <i class="ri-map-pin-2-fill text-[#2F4058] text-3xl mb-3 block"></i>
        <p class="font-bold text-lg text-[#2F4058]">Ichsan Sanusi</p>
        <p class="text-sm leading-relaxed text-slate-600 mt-2">
          ${alamatLengkap}
        </p>
        <p class="text-xs text-slate-400 mt-1">(No. HP: 0896-6093-4413)</p>
      </div>
    `,
      showCancelButton: true,
      confirmButtonText: '<i class="ri-file-copy-line"></i> Salin Alamat',
      cancelButtonText: 'Tutup',
      confirmButtonColor: '#2F4058',
      cancelButtonColor: '#6F87A6',
      reverseButtons: true,
      customClass: {
        popup: 'rounded-3xl',
        title: 'great text-3xl text-[#2F4058]',
        confirmButton: 'rounded-full px-6 py-2 text-sm',
        cancelButton: 'rounded-full px-6 py-2 text-sm',
      },
    }).then((result) => {
      /* Logika ketika tombol Salin diklik */
      if (result.isConfirmed) {
        navigator.clipboard.writeText(alamatLengkap);
        Swal.fire({
          icon: 'success',
          title: 'Tersalin!',
          text: 'Alamat berhasil disalin ke clipboard.',
          showConfirmButton: false,
          timer: 1500,
          customClass: {
            popup: 'rounded-2xl',
          },
        });
      }
    });
  };

  const [copiedAccount, setCopiedAccount] = useState(null);

  const bankData = [
    {
      id: 1,
      bankName: 'Bank BRI',
      accountNumber: '094501007185534', // Ganti dengan no rek BRI kamu
      accountHolder: 'Dede Kurniasih',
      logo: 'https://rekreartive.com/wp-content/uploads/2019/04/Logo-BRI-Bank-Rakyat-Indonesia-PNG-Terbaru.png',
    },
    {
      id: 2,
      bankName: 'DANA',
      accountNumber: '089660934413', // Ganti dengan no DANA kamu
      accountHolder: 'Dede Kurniasih',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fe/Logo_DANA.png', // Catatan: Jika logo di atas tidak muncul, gunakan:
      // https://upload.wikimedia.org/wikipedia/commons/5/52/Dana_logo.svg
    },
  ];

  const handleCopy = (number) => {
    navigator.clipboard.writeText(number);
    setCopiedAccount(number);
    setTimeout(() => setCopiedAccount(null), 2000);
  };

  return (
    <section
      id="gift"
      className="md:h-screen bg-cover bg-center py-20 bg-[#F3F6FA] px-4 bg-[url('/assets/bg/phones/phones2.png')] 
      md:bg-[url('/assets/bg/dekstop/2.png')] "
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Header Section */}
        <div data-aos="fade-up">
          <h2 className="great text-[#2F4058] text-5xl mb-4">Wedding Gift</h2>
          <p className="poppins text-sm text-slate-700 max-w-md mx-auto mb-12">Doa restu dan Kehadiran Anda merupakan karunia terindah bagi kami. Namun jika Anda ingin memberikan tanda kasih, Anda dapat melakukannya melalui:</p>
        </div>

        {/* Card Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {bankData.map((bank) => (
            <div key={bank.id} data-aos="zoom-in" className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center relative overflow-hidden">
              {/* Ganti <img> dengan blok ikon ini */}
              <div className="mb-4 flex flex-col items-center">
                {bank.bankName === 'Bank BRI' ? (
                  <div className="flex items-center gap-2">
                    <i className="ri-bank-line text-3xl text-blue-600"></i>
                    <span className="font-bold text-blue-800 text-xl tracking-tighter italic">BRI</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <i className="ri-wallet-3-line text-3xl text-blue-400"></i>
                    <span className="font-bold text-blue-500 text-xl tracking-widest">DANA</span>
                  </div>
                )}
              </div>

              {/* Sisa kode lainnya (nomor rekening, dll) */}
              <p className="poppins text-xs text-slate-400 uppercase tracking-widest mb-2">Nomor Rekening</p>
              <h3 className="text-xl font-bold text-[#2F4058] mb-1">{bank.accountNumber}</h3>
              <p className="poppins text-sm text-[#2F4058]/80 mb-6">a.n {bank.accountHolder}</p>

              <button
                onClick={() => handleCopy(bank.accountNumber)}
                className={`flex items-center gap-2 px-6 py-2 rounded-full text-sm transition-all ${copiedAccount === bank.accountNumber ? 'bg-green-500 text-white' : 'bg-[#2F4058] text-white hover:bg-[#3d526e]'}`}
              >
                <i className={copiedAccount === bank.accountNumber ? 'ri-check-line' : 'ri-file-copy-line'}></i>
                {copiedAccount === bank.accountNumber ? 'Berhasil Salin' : 'Salin Rekening'}
              </button>
            </div>
          ))}
        </div>

        {/* Kirim Kado Fisik */}
        <div className="mt-12 p-6 border-2 border-dashed border-[#2F4058]/20 rounded-2xl inline-block" data-aos="fade-up">
          <p className="poppins text-sm text-[#2F4058]/70">
            <i className="ri-gift-line mr-2"></i>
            Ingin mengirimkan kado fisik?
            <span onClick={showAddress} className="ml-1 font-bold underline cursor-pointer hover:text-[#2F4058] transition-colors">
              Klik untuk Alamat Pengiriman
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default WeddingGift;
