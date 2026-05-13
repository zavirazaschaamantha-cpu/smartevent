import { motion } from 'motion/react';
import { Mail, Github, Twitter, Linkedin, Calendar, ArrowRight } from 'lucide-react';
import Button from './Button';

export function CTA() {
  return (
    <section className="py-24 px-6">
      <div className="container mx-auto max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-gradient-to-br from-brand-purple via-brand-purple to-brand-orange rounded-[3rem] p-12 md:p-20 text-center overflow-hidden soft-shadow"
        >
          {/* Abstract background elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/4" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-orange/20 rounded-full blur-[60px] translate-y-1/2 -translate-x-1/4" />
          
          <div className="relative z-10 max-w-2xl mx-auto text-white">
            <h2 className="text-4xl md:text-5xl font-display font-extrabold mb-8 leading-tight">
              Mulai Kelola Acara Lebih Efisien Hari Ini
            </h2>
            <p className="text-white/80 text-lg mb-10">
              Bergabunglah dengan 5.000+ panitia kampus yang telah mentransformasi cara mereka mengelola acara. Coba SmartEvent gratis.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="glass" className="bg-white text-brand-purple hover:bg-white/90">
                Coba Gratis Sekarang <ArrowRight size={18} />
              </Button>
              <Button variant="glass" className="bg-transparent border border-white text-white hover:bg-white/10">
                Hubungi Kami
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="pt-24 pb-12 bg-white border-t border-gray-100">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-brand-purple rounded-lg flex items-center justify-center text-white">
                <Calendar size={18} />
              </div>
              <span className="text-xl font-display font-bold tracking-tight text-gray-900">
                SmartEvent<span className="text-brand-purple">.</span>
              </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-8">
              Platform terkemuka bagi organisasi mahasiswa universitas untuk mengelola seminar, workshop, dan acara berdampak tinggi dengan mudah.
            </p>
            <div className="flex items-center gap-4">
              {[Twitter, Github, Linkedin, Mail].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-gray-400 hover:bg-brand-purple hover:text-white transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-bold text-gray-900 uppercase tracking-widest mb-6">Produk</h4>
            <ul className="space-y-4">
              {['Fitur', 'Dasbor', 'Harga', 'API', 'Rilis'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-gray-500 hover:text-brand-purple transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-gray-900 uppercase tracking-widest mb-6">Perusahaan</h4>
            <ul className="space-y-4">
              {['Tentang Kami', 'Cerita Kami', 'Tim', 'Blog', 'Kontak'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-gray-500 hover:text-brand-purple transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-gray-900 uppercase tracking-widest mb-6">Legal</h4>
            <ul className="space-y-4">
              {['Kebijakan Privasi', 'Ketentuan Layanan', 'Kebijakan Cookie', 'Aksesibilitas'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-gray-500 hover:text-brand-purple transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-gray-400">© 2026 SmartEvent Planner. Seluruh hak cipta dilindungi.</p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500" />
            <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Semua Sistem Beroperasi</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
