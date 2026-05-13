import React from 'react';
import { motion } from 'motion/react';
import { Calendar, ArrowLeft, Mail, Lock, Chrome } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../components/Button';

export default function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen flex bg-white">
      {/* Left side: Visuals */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="hidden lg:flex flex-1 relative bg-brand-purple overflow-hidden items-center justify-center p-20"
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-brand-orange/30 rounded-full blur-[100px]" />
          <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-white/10 rounded-full blur-[80px]" />
        </div>
        
        <div className="relative z-10 text-white max-w-lg">
          <h2 className="text-5xl font-display font-black mb-8 leading-[1.1] tracking-tight">Welcome back to SmartEvent.</h2>
          <p className="text-white/80 text-xl leading-relaxed mb-12 font-medium">
            Log in to manage your campus events, track participants, and access your high-impact reports.
          </p>
          
          <div className="glass-dark p-8 rounded-[2rem] border-white/20 shadow-2xl">
            <div className="flex items-center gap-4 mb-6">
              <img src="https://i.pravatar.cc/150?u=sarah" alt="sarah" className="w-14 h-14 rounded-full border-2 border-white/20 shadow-lg" referrerPolicy="no-referrer" />
              <div>
                <div className="font-bold text-lg leading-tight">Sarah Jenkins</div>
                <div className="text-xs text-white/60 font-bold uppercase tracking-widest mt-1">Student Leader, UCLA</div>
              </div>
            </div>
            <p className="text-sm italic text-white/90 leading-relaxed font-medium">"The fastest way to manage events on campus. I can't imagine going back to spreadsheets. It's a game changer."</p>
          </div>
        </div>
      </motion.div>

      {/* Right side: Form */}
      <div className="flex-1 flex flex-col p-8 md:p-16 lg:p-24 justify-center relative">
        <Link to="/" className="absolute top-8 left-8 flex items-center gap-2 text-gray-500 hover:text-brand-purple transition-all font-bold text-sm">
          <ArrowLeft size={18} /> Back to home
        </Link>

        <div className="max-w-md mx-auto w-full">
          <div className="flex items-center gap-2 mb-10">
            <div className="w-10 h-10 bg-brand-purple rounded-xl flex items-center justify-center text-white">
              <Calendar size={22} />
            </div>
            <span className="text-2xl font-display font-bold text-gray-900">SmartEvent.</span>
          </div>

          <h1 className="text-3xl font-display font-bold text-gray-900 mb-2">Login</h1>
          <p className="text-gray-500 mb-10">Enter your credentials to access your account</p>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
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
              <div className="flex items-center justify-between mb-2">
                <label className="block text-sm font-bold text-gray-700">Password</label>
                <a href="#" className="text-xs font-bold text-brand-purple hover:underline">Forgot password?</a>
              </div>
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

            <div className="flex items-center gap-3">
              <input type="checkbox" id="remember" className="w-4 h-4 accent-brand-purple" />
              <label htmlFor="remember" className="text-sm font-medium text-gray-600">Remember me for 30 days</label>
            </div>

            <Button variant="primary" className="w-full">
              Sign In
            </Button>
          </form>

          <div className="mt-8 relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-100"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-4 text-gray-400 font-bold tracking-widest">Or continue with</span>
            </div>
          </div>

          <div className="mt-8">
            <button className="w-full flex items-center justify-center gap-3 px-4 py-3 rounded-xl border border-gray-200 hover:bg-gray-50 transition-all font-bold text-sm text-gray-700">
              <Chrome size={18} className="text-brand-orange" /> Sign in with Google
            </button>
          </div>

          <p className="mt-10 text-center text-sm text-gray-500 font-medium">
            Don't have an account? <Link to="/register" className="text-brand-purple font-bold hover:underline">Sign up for free</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
