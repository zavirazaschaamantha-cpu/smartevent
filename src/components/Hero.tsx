import { motion } from 'motion/react';
import { Play, Calendar, Users, BarChart3, QrCode, ArrowRight, CheckCircle2 } from 'lucide-react';
import Button from './Button';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden min-h-screen flex items-center">
      {/* Mesh Gradient Background Elements from Design */}
      <div className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] bg-brand-purple rounded-full blur-[120px] opacity-10" />
      <div className="absolute bottom-[-150px] left-[-100px] w-[600px] h-[600px] bg-brand-peach rounded-full blur-[130px] opacity-15" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-brand-orange rounded-full blur-[160px] opacity-[0.03]" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-12">
          {/* Content Left */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-50 text-brand-purple text-xs font-bold rounded-full w-fit border border-purple-100 uppercase tracking-widest mb-6 mx-auto lg:mx-0">
                <span className="flex h-2 w-2 rounded-full bg-brand-purple" />
                The #1 Campus Tool
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-extrabold text-gray-900 tracking-tight leading-[1.1] mb-6">
                Manage Campus Events <span className="text-brand-purple">Smarter.</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-500 leading-relaxed max-w-2xl mb-10 mx-auto lg:mx-0">
                The all-in-one platform for student organizations to host seamless seminars, workshops, and social gatherings with real-time tracking.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Button variant="primary" className="bg-gray-900 text-white hover:bg-black rounded-2xl px-10 py-5">
                  Start Free <ArrowRight size={18} />
                </Button>
                <Button variant="glass" className="bg-white border border-gray-200 text-gray-900 rounded-2xl px-10 py-5 hover:bg-gray-50">
                  Watch Demo
                </Button>
              </div>

              <div className="mt-12 flex items-center justify-center lg:justify-start gap-4">
                <div className="flex -space-x-3">
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-brand-peach"></div>
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-brand-purple"></div>
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-brand-orange"></div>
                </div>
                <p className="text-sm text-gray-500">Join <span className="font-bold text-gray-900">1,200+</span> student clubs</p>
              </div>
            </motion.div>
          </div>

          {/* Visual Right - Refined Minimalism Dashboard Preview */}
          <div className="flex-1 relative w-full lg:w-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative rounded-[32px] overflow-hidden glass p-4 soft-shadow lg:rotate-3"
            >
              <div className="bg-white/80 rounded-2xl overflow-hidden shadow-2xl border border-white/50">
                {/* App Toolbar Mockup */}
                <div className="h-10 px-4 bg-white/40 border-b border-gray-100 flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400/20" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-400/20" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/20" />
                  </div>
                  <div className="w-32 h-4 bg-gray-100 rounded-full" />
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200" 
                  alt="Dashboard View" 
                  className="w-full h-auto"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>

            {/* Floating Assets */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-6 -right-6 bg-white p-5 rounded-3xl premium-shadow border border-gray-100 flex flex-col items-center gap-3 z-20 hidden md:flex"
            >
              <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center border-2 border-dashed border-gray-200">
                <QrCode className="text-gray-300" size={32} />
              </div>
              <p className="text-[10px] font-bold text-gray-400 tracking-widest uppercase">Check-In QR</p>
            </motion.div>

            <motion.div
              animate={{ x: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, delay: 1 }}
              className="absolute -bottom-6 -left-10 bg-gradient-to-br from-brand-purple to-brand-orange p-4 rounded-2xl premium-shadow flex items-center gap-4 text-white z-20"
            >
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                 <CheckCircle2 size={24} />
              </div>
              <div>
                <p className="text-sm font-bold">Success!</p>
                <p className="text-xs opacity-80">Registration confirmed</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
