import { motion } from 'motion/react';
import { Check } from 'lucide-react';
import Button from './Button';

export default function Pricing() {
  const plans = [
    {
      name: 'Paket Gratis',
      price: '0',
      desc: 'Sempurna untuk mencoba fitur dasar SmartEvent.',
      features: ['Maksimal 1 acara per bulan', 'Fitur registrasi peserta dasar', 'Daftar nama peserta'],
      cta: 'Mulai Gratis',
      popular: false,
    },
    {
      name: 'Paket Dasar',
      price: '49.000',
      desc: 'Ideal untuk organisasi kampus yang aktif menyelenggarakan acara.',
      features: ['Acara tak terbatas', 'Tiket digital & Kode QR', 'Pemindai kehadiran otomatis', 'Laporan peserta', 'Dukungan standar'],
      cta: 'Pilih Dasar',
      popular: false,
    },
    {
      name: 'Paket Pro',
      price: '99.000',
      desc: 'Solusi lengkap untuk seminar dan konferensi skala besar.',
      features: ['Semua fitur Paket Dasar', 'Dasbor analitik lanjutan', 'Statistik & laporan waktu nyata', 'Branding acara kustom', 'Dukungan pelanggan prioritas', 'Penyimpanan cloud lebih besar'],
      cta: 'Mulai Uji Coba Pro',
      popular: true,
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-brand-bg relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-brand-purple/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-brand-orange/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-brand-purple/10 text-brand-purple text-xs font-bold uppercase tracking-widest mb-4"
          >
            Harga Hemat
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-display font-black text-gray-900 mb-6 leading-tight">Investasi Kecil untuk<br /><span className="gradient-text">Dampak Besar</span></h2>
          <p className="text-gray-500 max-w-xl mx-auto font-medium">Platform manajemen acara terbaik dengan fitur premium yang dapat diakses oleh seluruh organisasi kampus.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch pt-8">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`relative p-8 rounded-[2.5rem] transition-all duration-500 group flex flex-col ${
                plan.popular 
                ? 'bg-white premium-shadow border-2 border-brand-purple shadow-[0_0_40px_-15px_rgba(139,92,246,0.3)] py-12 scale-105 z-20' 
                : 'bg-white/70 backdrop-blur-sm border border-gray-100 hover:bg-white hover:border-brand-purple/20 soft-shadow z-10'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-brand-purple to-brand-orange text-white px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg">
                  Paling Populer
                </div>
              )}

              <div className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-2xl flex items-center justify-center ${plan.popular ? 'bg-brand-purple text-white' : 'bg-gray-100 text-gray-400'}`}>
                    <Check size={20} />
                  </div>
                  <h4 className="text-xl font-display font-extrabold text-gray-900">{plan.name}</h4>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-sm font-bold text-gray-400">Rp</span>
                  <span className="text-4xl font-display font-black text-gray-900 leading-none">{plan.price}</span>
                  <span className="text-gray-500 font-medium text-sm">/bulan</span>
                </div>
                <p className="text-sm text-gray-500 mt-6 leading-relaxed font-medium">{plan.desc}</p>
              </div>

              <div className="space-y-4 mb-12 flex-grow">
                {plan.features.map((feature, j) => (
                  <div key={j} className="flex items-start gap-3">
                    <div className={`mt-0.5 p-0.5 rounded-full ${plan.popular ? 'bg-brand-purple/20 text-brand-purple' : 'bg-gray-100 text-gray-400'}`}>
                      <Check size={12} strokeWidth={3} />
                    </div>
                    <span className="text-sm font-bold text-gray-600 leading-tight">{feature}</span>
                  </div>
                ))}
              </div>

              <Button 
                variant={plan.popular ? 'primary' : 'secondary'} 
                className={`w-full py-4 text-sm font-black tracking-widest uppercase transition-all duration-300 ${
                  plan.popular ? 'bg-brand-purple hover:scale-[1.03] active:scale-95 shadow-xl shadow-brand-purple/20' : 'bg-gray-900 text-white hover:bg-gray-800'
                }`}
              >
                {plan.cta}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
