import { motion } from 'motion/react';
import { 
  ClipboardList, 
  Ticket, 
  ScanLine, 
  LayoutDashboard, 
  PieChart, 
  Cloud,
  ChevronRight
} from 'lucide-react';

export default function Features() {
  const features = [
    {
      title: 'Sistem Registrasi Acara',
      description: 'Formulir yang dapat disesuaikan sepenuhnya dengan email konfirmasi otomatis.',
      icon: ClipboardList,
      color: 'bg-brand-purple',
      link: '#',
    },
    {
      title: 'Tiket QR Digital',
      description: 'Kode QR unik dan aman untuk setiap peserta guna memastikan check-in cepat.',
      icon: Ticket,
      color: 'bg-brand-orange',
      link: '#',
    },
    {
      title: 'Pemindai Kehadiran',
      description: 'Aplikasi pemindaian mobile-first untuk staf guna melacak peserta secara real-time.',
      icon: ScanLine,
      color: 'bg-brand-peach',
      link: '#',
    },
    {
      title: 'Dasbor Waktu Nyata',
      description: 'Pantau kesehatan acara Anda, penjualan tiket, dan check-in secara langsung.',
      icon: LayoutDashboard,
      color: 'bg-brand-purple',
      link: '#',
    },
    {
      title: 'Laporan & Analitik',
      description: 'Analisis mendalam tentang demografi peserta dan metrik performa acara.',
      icon: PieChart,
      color: 'bg-brand-orange',
      link: '#',
    },
    {
      title: 'Penyimpanan Cloud',
      description: 'Simpan data peserta dan aset acara dengan aman di satu tempat terpusat.',
      icon: Cloud,
      color: 'bg-brand-peach',
      link: '#',
    },
  ];

  return (
    <section id="features" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-bold text-brand-purple uppercase tracking-widest mb-3">Fitur Utama</h2>
            <h3 className="text-4xl md:text-5xl font-display font-extrabold text-gray-900 mb-6">
              Semua yang Anda butuhkan untuk <br className="hidden md:block" />
              Acara Berdampak <span className="gradient-text">Tinggi</span>
            </h3>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Dibuat oleh mahasiswa, untuk mahasiswa. Alat canggih yang menangani pekerjaan berat sehingga Anda dapat fokus menciptakan pengalaman berkesan.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group p-10 rounded-[2.5rem] bg-white border border-gray-100 hover:border-brand-purple/20 transition-all soft-shadow hover:premium-shadow"
            >
              <div className={`w-14 h-14 ${feature.color} rounded-2xl flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-transform shadow-lg`}>
                <feature.icon size={28} />
              </div>
              <h4 className="text-2xl font-display font-extrabold text-gray-900 mb-4">{feature.title}</h4>
              <p className="text-gray-500 leading-relaxed mb-8">
                {feature.description}
              </p>
              <a href={feature.link} className="inline-flex items-center gap-2 text-sm font-bold text-brand-purple hover:gap-3 transition-all">
                Jelajahi Fitur <ChevronRight size={18} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
