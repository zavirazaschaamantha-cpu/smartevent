import { motion } from 'motion/react';
import { Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Siti Aminah',
      role: 'Ketua BEM Kampus',
      image: 'https://i.pravatar.cc/150?u=siti',
      content: 'SmartEvent mengubah segalanya untuk rangkaian acara puncak kami. Dulu kami kesulitan dengan check-in, tapi sekarang hanya butuh hitungan detik dengan pemindai QR.',
      rating: 5,
    },
    {
      name: 'Dr. Budi Santoso',
      role: 'Dosen Pembimbing Kemahasiswaan',
      image: 'https://i.pravatar.cc/150?u=budi',
      content: 'Analitik yang diberikan memberi kami data tak ternilai tentang partisipasi mahasiswa. Profesional, handal, dan sangat mudah digunakan.',
      rating: 5,
    },
    {
      name: 'Ahmad Fauzi',
      role: 'Koordinator IT Fest',
      image: 'https://i.pravatar.cc/150?u=ahmad',
      content: 'Mengelola 200+ pendaftaran menjadi sangat mudah. Saya sangat menyukai dasbor waktu nyata yang melacak peserta saat mereka tiba.',
      rating: 5,
    },
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-brand-purple uppercase tracking-widest mb-3">Ulasan Pengguna</h2>
          <h3 className="text-4xl font-display font-extrabold text-gray-900">Apa Kata Panitia</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl glass soft-shadow hover:premium-shadow transition-all group"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} size={16} className="fill-brand-orange text-brand-orange" />
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed italic mb-8">
                "{t.content}"
              </p>
              <div className="flex items-center gap-4">
                <img 
                  src={t.image} 
                  alt={t.name} 
                  className="w-12 h-12 rounded-full border-2 border-brand-purple/20 shadow-md group-hover:scale-110 transition-transform"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <div className="font-display font-bold text-gray-900">{t.name}</div>
                  <div className="text-xs font-medium text-gray-500 uppercase tracking-wider">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
