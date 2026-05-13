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
      title: 'Event Registration System',
      description: 'Fully customizable forms for participants with automated confirmation emails.',
      icon: ClipboardList,
      color: 'bg-brand-purple',
      link: '#',
    },
    {
      title: 'Digital Ticket QR',
      description: 'Secure, unique QR codes for every participant to ensure fast check-in.',
      icon: Ticket,
      color: 'bg-brand-orange',
      link: '#',
    },
    {
      title: 'Attendance Scanner',
      description: 'Mobile-first scanning app for staff to track entries in real-time.',
      icon: ScanLine,
      color: 'bg-brand-peach',
      link: '#',
    },
    {
      title: 'Real-Time Dashboard',
      description: 'Monitor your event health, ticket sales, and check-ins as they happen.',
      icon: LayoutDashboard,
      color: 'bg-brand-purple',
      link: '#',
    },
    {
      title: 'Reports & Analytics',
      description: 'Deep dive into participant demographics and event performance metrics.',
      icon: PieChart,
      color: 'bg-brand-orange',
      link: '#',
    },
    {
      title: 'Cloud Storage',
      description: 'Securely store attendee data, event assets, and documents in one place.',
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
            <h2 className="text-sm font-bold text-brand-purple uppercase tracking-widest mb-3">Core Features</h2>
            <h3 className="text-4xl md:text-5xl font-display font-extrabold text-gray-900 mb-6">
              Everything you need for <br className="hidden md:block" />
              <span className="gradient-text">High-Impact</span> Events
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Built by students, for students. Powerful tools that handle the heavy lifting so you can focus on creating memorable experiences.
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
                Explore Feature <ChevronRight size={18} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
