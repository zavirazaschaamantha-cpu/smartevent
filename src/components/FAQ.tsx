import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Apakah SmartEvent gratis untuk organisasi mahasiswa kecil?',
      a: 'Ya! Kami memiliki Paket Gratis permanen yang mengizinkan hingga 50 peserta per acara, yang sangat cocok untuk pertemuan klub kecil.'
    },
    {
      q: 'Apakah peserta perlu mengunduh aplikasi?',
      a: 'Tidak. Peserta dapat mendaftar dan menerima tiket melalui email. Mereka hanya perlu menunjukkan kode QR (digital atau cetak) saat check-in.'
    },
    {
      q: 'Dapatkah saya mengekspor data peserta ke Excel?',
      a: 'Tentu saja. Semua paket (termasuk Paket Gratis) memungkinkan Anda mengekspor daftar hadir dan laporan dasar dalam format CSV.'
    },
    {
      q: 'Apakah aplikasi pemindai kehadiran kompatibel dengan semua ponsel?',
      a: 'Pemindai kami bekerja langsung di browser seluler ponsel pintar modern apa pun. Tidak perlu mengunduh dari app store.'
    }
  ];

  return (
    <section id="faq" className="py-24 bg-brand-bg">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-16">
          <div className="inline-flex p-3 bg-brand-purple/10 text-brand-purple rounded-2xl mb-4">
            <HelpCircle size={24} />
          </div>
          <h3 className="text-3xl font-display font-extrabold text-gray-900">Pertanyaan yang Sering Diajukan</h3>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="glass rounded-2xl overflow-hidden border border-gray-100 soft-shadow">
              <button
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-white/50 transition-colors"
                onClick={() => setActiveIndex(activeIndex === i ? null : i)}
              >
                <span className="font-display font-bold text-gray-900">{faq.q}</span>
                <ChevronDown 
                  size={20} 
                  className={`text-gray-400 transition-transform ${activeIndex === i ? 'rotate-180' : ''}`} 
                />
              </button>
              <AnimatePresence>
                {activeIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                  >
                    <div className="px-8 pb-6 text-gray-600 leading-relaxed text-sm">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
