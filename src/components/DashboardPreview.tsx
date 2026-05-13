import { motion } from 'motion/react';
import { CheckCircle2, TrendingUp, Users, Calendar } from 'lucide-react';

export default function DashboardPreview() {
  return (
    <section className="py-24 bg-brand-purple/5 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-sm font-bold text-brand-orange uppercase tracking-widest mb-3">Powerful Insights</h2>
              <h3 className="text-4xl md:text-5xl font-display font-extrabold text-gray-900 mb-8 leading-tight">
                Designed for <br />
                <span className="text-brand-purple">Unmatched</span> Visibility
              </h3>
              
              <div className="space-y-6">
                {[
                  'Real-time participant growth tracking',
                  'Automated attendance analytics',
                  'Revenue and ticket sales breakdown',
                  'Activity logs and staff management'
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="mt-1 bg-green-100 text-green-600 p-1 rounded-full">
                      <CheckCircle2 size={18} />
                    </div>
                    <p className="text-gray-700 font-medium">{item}</p>
                  </div>
                ))}
              </div>

              <div className="mt-12 flex items-center gap-6 p-6 glass rounded-2xl soft-shadow max-w-sm">
                <div className="flex -space-x-3">
                  {[1,2,3,4].map(i => (
                    <img 
                      key={i}
                      src={`https://i.pravatar.cc/150?u=${i+10}`} 
                      className="w-10 h-10 rounded-full border-2 border-white"
                      alt="avatar"
                      referrerPolicy="no-referrer"
                    />
                  ))}
                </div>
                <div>
                  <div className="text-sm font-bold text-gray-900">Used by 500+ organizers</div>
                  <div className="text-xs text-gray-500 font-medium">Join the elite campus communities</div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="flex-1 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative rounded-[2.5rem] overflow-hidden glass p-6 soft-shadow"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
                {/* Stats Mockup Inspired by Design HTML */}
                <div className="p-6 grid grid-cols-2 lg:grid-cols-3 gap-4 border-b border-gray-50">
                  {[
                    { label: 'Registrations', value: '842', color: 'text-brand-purple' },
                    { label: 'Attendance', value: '94%', color: 'text-brand-orange' },
                    { label: 'Capacity', value: '1.2k', color: 'text-gray-900' }
                  ].map((stat, i) => (
                    <div key={i} className="bg-white p-4 rounded-xl border border-gray-50 shadow-sm">
                      <p className="text-[10px] uppercase font-bold text-gray-400">{stat.label}</p>
                      <p className={`text-2xl font-bold mt-1 ${stat.color}`}>{stat.value}</p>
                    </div>
                  ))}
                </div>
                <div className="p-6">
                  <div className="h-40 w-full bg-gray-50 rounded-xl flex items-end justify-between p-4 gap-2">
                    {[40, 60, 85, 45, 70, 30, 95].map((h, i) => (
                      <div 
                        key={i} 
                        className={`w-full rounded-t-lg ${i === 3 ? 'bg-brand-orange' : 'bg-brand-purple'}`} 
                        style={{ height: `${h}%` }} 
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating Success Indicator from Design HTML */}
              <motion.div
                animate={{ x: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-gradient-to-br from-brand-purple to-brand-orange p-4 rounded-2xl premium-shadow flex items-center gap-4 text-white z-20 min-w-[240px]"
              >
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                   <CheckCircle2 size={24} />
                </div>
                <div className="text-left">
                  <p className="text-sm font-bold">Success!</p>
                  <p className="text-xs opacity-80">Registration confirmed</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
