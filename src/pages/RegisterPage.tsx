import React from 'react';
import { motion } from 'motion/react';
import { Calendar, ArrowLeft, Mail, Lock, Chrome, User, School } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../components/Button';

export default function RegisterPage() {
  const navigate = useNavigate();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate register
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen flex bg-white">
      {/* Right side: Form */}
      <div className="flex-1 flex flex-col p-8 md:p-16 lg:p-24 justify-center relative">
        <Link to="/" className="absolute top-8 left-8 flex items-center gap-2 text-gray-500 hover:text-brand-purple transition-all font-bold text-sm">
          <ArrowLeft size={18} /> Back to home
        </Link>

        <div className="max-w-md mx-auto w-full">
          <div className="flex items-center gap-2 mb-10">
            <div className="w-10 h-10 bg-brand-orange rounded-xl flex items-center justify-center text-white">
              <Calendar size={22} />
            </div>
            <span className="text-2xl font-display font-bold text-gray-900">SmartEvent.</span>
          </div>

          <h1 className="text-3xl font-display font-bold text-gray-900 mb-2">Create Account</h1>
          <p className="text-gray-500 mb-8">Join the community of modern event planners</p>

          <form onSubmit={handleRegister} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">First Name</label>
                <input 
                  type="text" 
                  required
                  placeholder="John"
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-100 focus:bg-white focus:border-brand-purple focus:ring-4 focus:ring-brand-purple/10 outline-none transition-all" 
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Last Name</label>
                <input 
                  type="text" 
                  required
                  placeholder="Doe"
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-100 focus:bg-white focus:border-brand-purple focus:ring-4 focus:ring-brand-purple/10 outline-none transition-all" 
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">University/Organization</label>
              <div className="relative">
                <input 
                  type="text" 
                  required
                  placeholder="Stanford Student Union"
                  className="w-full px-4 py-3 pl-12 rounded-xl bg-gray-50 border border-gray-100 focus:bg-white focus:border-brand-purple focus:ring-4 focus:ring-brand-purple/10 outline-none transition-all" 
                />
                <School className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Work Email</label>
              <div className="relative">
                <input 
                  type="email" 
                  required
                  placeholder="name@university.edu"
                  className="w-full px-4 py-3 pl-12 rounded-xl bg-gray-50 border border-gray-100 focus:bg-white focus:border-brand-purple focus:ring-4 focus:ring-brand-purple/10 outline-none transition-all" 
                />
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Password</label>
              <div className="relative">
                <input 
                  type="password" 
                  required
                  placeholder="••••••••"
                  className="w-full px-4 py-3 pl-12 rounded-xl bg-gray-50 border border-gray-100 focus:bg-white focus:border-brand-purple focus:ring-4 focus:ring-brand-purple/10 outline-none transition-all" 
                />
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              </div>
            </div>

            <p className="text-[10px] text-gray-400 font-medium py-2">
              By signing up, you agree to our <a href="#" className="text-brand-purple font-bold">Terms of Service</a> and <a href="#" className="text-brand-purple font-bold">Privacy Policy</a>.
            </p>

            <Button variant="secondary" className="w-full bg-brand-purple hover:bg-brand-purple/90">
              Create Account
            </Button>
          </form>

          <div className="mt-6">
            <button className="w-full flex items-center justify-center gap-3 px-4 py-3 rounded-xl border border-gray-200 hover:bg-gray-50 transition-all font-bold text-sm text-gray-700">
              <Chrome size={18} className="text-brand-orange" /> Sign up with Google
            </button>
          </div>

          <p className="mt-8 text-center text-sm text-gray-500 font-medium">
            Already have an account? <Link to="/login" className="text-brand-purple font-bold hover:underline">Log in</Link>
          </p>
        </div>
      </div>

      {/* Left side: Visuals */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="hidden lg:flex flex-1 relative bg-brand-orange overflow-hidden items-center justify-center p-20"
      >
        <div className="absolute inset-0 z-0 text-white/5 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0 100 L100 0 L100 100 Z" fill="currentColor" />
          </svg>
        </div>
        
        <div className="relative z-10 text-white max-w-lg text-right">
          <h2 className="text-5xl font-display font-black mb-8 leading-[1.1] tracking-tight">Empower your campus community.</h2>
          <p className="text-white/80 text-xl leading-relaxed mb-12 font-medium">
            The all-in-one toolkit designed to help you create events that students actually want to attend.
          </p>
          
          <div className="glass-dark p-8 rounded-[2rem] border-white/20 text-left ml-auto max-w-[320px] shadow-2xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-brand-orange shadow-lg shadow-black/10">
                <Calendar size={24} />
              </div>
              <div className="font-bold text-lg">Next Level Events</div>
            </div>
            <div className="space-y-4">
              {[
                { label: 'Smart Check-ins', desc: 'Secure QR scanning system' },
                { label: 'Advanced RSVP', desc: 'Custom registration forms' },
                { label: 'Cloud Analysis', desc: 'Real-time student feedback' }
              ].map(item => (
                <div key={item.label} className="flex gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-peach mt-1.5 shrink-0" />
                  <div>
                    <div className="text-[11px] font-black uppercase tracking-widest text-white/50">{item.label}</div>
                    <div className="text-xs font-medium text-white/80 mt-0.5">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
