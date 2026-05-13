import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'glass';
  className?: string;
  onClick?: () => void;
}

export default function Button({ 
  children, 
  variant = 'primary', 
  className = '', 
  onClick 
}: ButtonProps) {
  const variants = {
    primary: 'bg-gray-900 text-white shadow-xl shadow-gray-200 hover:bg-black',
    secondary: 'bg-brand-purple text-white shadow-lg shadow-brand-purple/20 hover:bg-brand-purple/90',
    outline: 'border border-gray-200 text-gray-900 bg-white hover:bg-gray-50',
    glass: 'glass text-gray-700 hover:bg-white/90',
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`px-8 py-4 rounded-2xl font-bold text-sm sm:text-base flex items-center justify-center gap-3 transition-all cursor-pointer ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
}
