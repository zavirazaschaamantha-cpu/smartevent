import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  LayoutDashboard, 
  Calendar, 
  Users, 
  BarChart3, 
  Settings, 
  Bell, 
  Search, 
  Plus, 
  MoreVertical,
  CheckCircle2,
  Clock,
  LogOut,
  Menu,
  X
} from 'lucide-react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell
} from 'recharts';
import { Link } from 'react-router-dom';

const data = [
  { name: 'Jan', participants: 400 },
  { name: 'Feb', participants: 300 },
  { name: 'Mar', participants: 600 },
  { name: 'Apr', participants: 800 },
  { name: 'May', participants: 500 },
  { name: 'Jun', participants: 900 },
  { name: 'Jul', participants: 1100 },
];

export default function DashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const stats = [
    { label: 'Total Events', value: '42', icon: Calendar, color: 'text-brand-purple', bg: 'bg-brand-purple/10' },
    { label: 'Participants', value: '12,480', icon: Users, color: 'text-brand-orange', bg: 'bg-brand-orange/10' },
    { label: 'Revenue', value: '$8,420', icon: BarChart3, color: 'text-green-500', bg: 'bg-green-500/10' },
    { label: 'Attendance Rate', value: '94.2%', icon: CheckCircle2, color: 'text-brand-peach', bg: 'bg-brand-peach/10' },
  ];

  const recentEvents = [
    { name: 'Tech Startup Summit 2026', date: 'May 20, 2026', status: 'Upcoming', participants: 450, rsvp: '82%' },
    { name: 'Annual Sports Day', date: 'May 25, 2026', status: 'Draft', participants: 0, rsvp: '0%' },
    { name: 'AI Workshop Series', date: 'May 12, 2026', status: 'Completed', participants: 120, rsvp: '100%' },
    { name: 'Career Fair Spring', date: 'June 05, 2026', status: 'Upcoming', participants: 800, rsvp: '45%' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex overflow-hidden">
      {/* Sidebar */}
      <motion.aside 
        initial={false}
        animate={{ width: sidebarOpen ? 280 : 0, opacity: sidebarOpen ? 1 : 0 }}
        className="bg-white border-r border-gray-100 flex-shrink-0 z-40 relative hidden lg:flex flex-col"
      >
        <div className="p-6">
          <div className="flex items-center gap-2 mb-10">
            <div className="w-10 h-10 bg-brand-purple rounded-xl flex items-center justify-center text-white">
              <Calendar size={22} />
            </div>
            <span className="text-2xl font-display font-bold text-gray-900">SmartEvent.</span>
          </div>

          <nav className="space-y-1">
            {[
              { icon: LayoutDashboard, label: 'Dashboard', active: true },
              { icon: Calendar, label: 'My Events' },
              { icon: Users, label: 'Participants' },
              { icon: BarChart3, label: 'Analytics' },
              { icon: Settings, label: 'Settings' },
            ].map((item, i) => (
              <button 
                key={i}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-bold text-sm ${
                  item.active 
                  ? 'bg-brand-purple text-white shadow-md shadow-brand-purple/20' 
                  : 'text-gray-500 hover:bg-gray-50 hover:text-brand-purple'
                }`}
              >
                <item.icon size={20} />
                {item.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="mt-auto p-6 border-t border-gray-50">
          <Link to="/login" className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-500 hover:bg-red-50 transition-all font-bold text-sm">
            <LogOut size={20} />
            Logout
          </Link>
        </div>
      </motion.aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        {/* Header */}
        <header className="bg-white/80 backdrop-blur-md border-bottom border-gray-100 sticky top-0 z-30 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button 
              className="lg:hidden p-2 text-gray-500 hover:bg-gray-100 rounded-lg"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <Menu size={24} />
            </button>
            <div>
              <h1 className="text-xl font-display font-bold text-gray-900">Overview</h1>
              <p className="text-xs text-gray-500 font-medium">Wednesday, 13 May 2026</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input 
                type="text" 
                placeholder="Search events..." 
                className="bg-gray-50 border border-gray-100 rounded-xl px-4 py-2 pl-10 text-sm focus:bg-white focus:ring-4 focus:ring-brand-purple/5 outline-none transition-all w-64"
              />
            </div>
            <button className="p-2.5 text-gray-400 hover:text-brand-purple hover:bg-brand-purple/5 rounded-xl transition-all relative">
              <Bell size={20} />
              <span className="absolute top-2 right-2 w-2 h-2 bg-brand-orange rounded-full border-2 border-white" />
            </button>
            <div className="flex items-center gap-3 pl-4 border-l border-gray-100">
              <div className="text-right hidden sm:block">
                <div className="text-sm font-bold text-gray-900 leading-none">Sarah Jenkins</div>
                <div className="text-[10px] uppercase font-bold text-gray-400 tracking-wider mt-1">Administrator</div>
              </div>
              <img 
                src="https://i.pravatar.cc/150?u=sarah" 
                className="w-10 h-10 rounded-xl border-2 border-brand-purple/20"
                alt="user"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </header>

        <div className="p-6 md:p-10 max-w-7xl mx-auto">
          {/* Welcome Section */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
            <div>
              <h2 className="text-3xl font-display font-extrabold text-gray-900 mb-2">Good morning, Sarah! 👋</h2>
              <p className="text-gray-500 font-medium">You have 2 events starting this week. Let's make them great!</p>
            </div>
            <button className="bg-brand-purple text-white px-6 py-3 rounded-2xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-brand-purple/20 hover:scale-105 active:scale-95 transition-all">
              <Plus size={20} /> Create New Event
            </button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-6 rounded-3xl border border-gray-100 soft-shadow group hover:premium-shadow transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-2xl ${stat.bg} ${stat.color} group-hover:scale-110 transition-transform`}>
                    <stat.icon size={24} />
                  </div>
                  <button className="text-gray-400 hover:text-gray-600">
                    <MoreVertical size={18} />
                  </button>
                </div>
                <div className="text-gray-500 text-sm font-bold uppercase tracking-wider mb-1">{stat.label}</div>
                <div className="text-3xl font-display font-extrabold text-gray-900">{stat.value}</div>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Chart Area */}
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white p-8 rounded-3xl border border-gray-100 soft-shadow">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-xl font-display font-bold text-gray-900">Registration Growth</h3>
                  <div className="flex gap-2">
                    <button className="px-3 py-1 bg-gray-50 rounded-lg text-xs font-bold text-brand-purple">Weekly</button>
                    <button className="px-3 py-1 text-xs font-bold text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">Monthly</button>
                  </div>
                </div>
                <div className="h-[300px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data}>
                      <defs>
                        <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.1}/>
                          <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#9CA3AF'}} />
                      <YAxis axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#9CA3AF'}} />
                      <Tooltip 
                        contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}
                      />
                      <Area type="monotone" dataKey="participants" stroke="#8B5CF6" strokeWidth={3} fillOpacity={1} fill="url(#colorPv)" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Recent Events Table */}
              <div className="bg-white p-8 rounded-3xl border border-gray-100 soft-shadow">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-xl font-display font-bold text-gray-900">Recent Events</h3>
                  <button className="text-brand-purple text-sm font-bold hover:underline">View All</button>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-50">
                        <th className="text-left py-4 text-xs font-bold text-gray-400 uppercase tracking-widest">Event Name</th>
                        <th className="text-left py-4 text-xs font-bold text-gray-400 uppercase tracking-widest">Date</th>
                        <th className="text-left py-4 text-xs font-bold text-gray-400 uppercase tracking-widest">Status</th>
                        <th className="text-left py-4 text-xs font-bold text-gray-400 uppercase tracking-widest">RSVP Status</th>
                        <th className="text-right py-4 text-xs font-bold text-gray-400 uppercase tracking-widest">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                      {recentEvents.map((event, index) => (
                        <tr key={index} className="group hover:bg-gray-50 transition-colors">
                          <td className="py-5 font-bold text-sm text-gray-900">{event.name}</td>
                          <td className="py-5 text-sm text-gray-500 font-medium">{event.date}</td>
                          <td className="py-5">
                            <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                              event.status === 'Upcoming' ? 'bg-blue-100 text-blue-600' :
                              event.status === 'Completed' ? 'bg-green-100 text-green-600' :
                              'bg-gray-100 text-gray-500'
                            }`}>
                              {event.status}
                            </span>
                          </td>
                          <td className="py-5">
                            <div className="flex items-center gap-2">
                              <div className="flex-1 h-1.5 w-24 bg-gray-100 rounded-full overflow-hidden">
                                <div className="h-full bg-brand-orange" style={{ width: event.rsvp }} />
                              </div>
                              <span className="text-xs font-bold text-gray-900">{event.rsvp}</span>
                            </div>
                          </td>
                          <td className="py-5 text-right">
                            <button className="p-2 text-gray-300 hover:text-brand-purple transition-colors">
                              <MoreVertical size={18} />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Sidebar Widgets */}
            <div className="space-y-8">
              {/* Mini Calendar */}
              <div className="bg-white p-6 rounded-3xl border border-gray-100 soft-shadow">
                <h3 className="text-lg font-display font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <Calendar size={20} className="text-brand-purple" /> Timeline
                </h3>
                <div className="space-y-6">
                  {[
                    { title: 'Networking Night', time: 'Today, 6:00 PM', urgency: 'High' },
                    { title: 'Committee Meeting', time: 'Tomorrow, 10:00 AM', urgency: 'Medium' },
                    { title: 'Budget Approval', time: 'May 15, 2:00 PM', urgency: 'Medium' },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 group cursor-pointer">
                      <div className="flex flex-col items-center">
                        <div className={`w-3 h-3 rounded-full ${i === 0 ? 'bg-brand-purple' : 'bg-gray-200'}`} />
                        <div className="w-0.5 h-full bg-gray-50 mt-2" />
                      </div>
                      <div className="pb-6">
                        <div className="text-sm font-bold text-gray-900 group-hover:text-brand-purple transition-colors">{item.title}</div>
                        <div className="text-xs text-gray-400 mt-1 flex items-center gap-1">
                          <Clock size={12} /> {item.time}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <button className="w-full py-3 bg-gray-50 text-gray-500 rounded-2xl text-sm font-bold hover:bg-brand-purple/5 hover:text-brand-purple transition-all">
                  View Full Calendar
                </button>
              </div>

              {/* Feedback Widget */}
              <div className="bg-gradient-to-br from-brand-orange to-brand-peach p-6 rounded-3xl text-white soft-shadow relative overflow-hidden">
                <div className="relative z-10">
                  <h3 className="font-display font-extrabold text-xl mb-4">How are we doing?</h3>
                  <p className="text-white/80 text-xs mb-6 leading-relaxed">Your feedback helps us make SmartEvent the best tool for campus organizers.</p>
                  <button className="w-full py-3 bg-white text-brand-orange rounded-2xl text-sm font-bold shadow-lg shadow-black/5 hover:scale-[1.02] active:scale-[0.98] transition-all">
                    Send Feedback
                  </button>
                </div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-white/20 rounded-full blur-2xl" />
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
}
