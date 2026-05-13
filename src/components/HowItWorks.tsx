import { motion } from 'motion/react';
import { PlusCircle, Share2, ScanLine, FileText } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      title: 'Create Event',
      desc: 'Set up your event details, ticket types, and custom registration forms in minutes.',
      icon: PlusCircle,
      color: 'text-brand-purple',
    },
    {
      title: 'Share Registration',
      desc: 'Get a unique link and professional landing page to share across campus communities.',
      icon: Share2,
      color: 'text-brand-orange',
    },
    {
      title: 'Scan Attendance',
      desc: 'Use our high-speed QR scanner for seamless check-in at the venue.',
      icon: ScanLine,
      color: 'text-brand-peach',
    },
    {
      title: 'View Reports',
      desc: 'Export detailed participant lists, attendance rates, and feedback surveys.',
      icon: FileText,
      color: 'text-green-500',
    },
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold text-gray-400 uppercase tracking-[0.2em] mb-4">Simple Process</h2>
          <h3 className="text-4xl md:text-5xl font-display font-black text-gray-900 tracking-tight">How It Works</h3>
        </div>

        <div className="relative">
          {/* Connecting Line - Precise dash from UI design */}
          <div className="absolute top-10 left-0 w-full h-[2px] border-t-2 border-dashed border-gray-100 hidden lg:block" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-20 h-20 mx-auto bg-white border border-gray-100 rounded-[1.5rem] flex items-center justify-center mb-8 shadow-sm group hover:border-brand-purple transition-all duration-300">
                  <step.icon size={32} className={`${step.color}`} />
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-gray-50 rounded-full flex items-center justify-center text-xs font-black text-gray-400 border border-gray-100 shadow-sm">
                    {i + 1}
                  </div>
                </div>
                <h4 className="text-xl font-display font-extrabold text-gray-900 mb-4">{step.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed max-w-[200px] mx-auto">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
