import { motion } from 'motion/react';

export default function Trusted() {
  const logos = ['Harvard', 'Stanford', 'MIT', 'Oxford', 'Berkeley'];

  return (
    <section className="px-10 py-12 bg-white border-y border-gray-100">
      <div className="container mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="flex flex-col gap-3 items-center md:items-start text-center md:text-left">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em]">Official Partners</p>
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-8 md:gap-12 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
            {logos.map((logo) => (
              <span key={logo} className="font-serif italic text-xl md:text-2xl text-gray-900 cursor-default">
                {logo}
              </span>
            ))}
          </div>
        </div>
        
        <div className="flex items-center gap-12 md:gap-16">
          <div className="text-center md:text-right">
            <p className="text-3xl md:text-4xl font-display font-extrabold text-gray-900 leading-none mb-2">15.2k</p>
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Events Created</p>
          </div>
          <div className="text-center md:text-right">
            <p className="text-3xl md:text-4xl font-display font-extrabold text-gray-900 leading-none mb-2">98%</p>
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">User Rating</p>
          </div>
        </div>
      </div>
    </section>
  );
}
