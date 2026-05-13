import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Is SmartEvent free for small student clubs?',
      a: 'Yes! We have a permanent Free Plan that allows up to 50 participants per event, which is perfect for smaller club meetups.'
    },
    {
      q: 'Do participants need to download an app?',
      a: 'No. Participants can register and receive their tickets via email. They only need to show their QR code (digital or printed) at check-in.'
    },
    {
      q: 'Can I export participant data to Excel?',
      a: 'Absolutely. All plans (including Free) allow you to export your attendee list and basic reports in CSV format.'
    },
    {
      q: 'Is the attendance scanner app compatible with all phones?',
      a: 'Our scanner works directly in the mobile browser of any modern smartphone. No app store download required.'
    }
  ];

  return (
    <section id="faq" className="py-24 bg-brand-bg">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-16">
          <div className="inline-flex p-3 bg-brand-purple/10 text-brand-purple rounded-2xl mb-4">
            <HelpCircle size={24} />
          </div>
          <h3 className="text-3xl font-display font-extrabold text-gray-900">Frequently Asked Questions</h3>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="glass rounded-2xl overflow-hidden border border-gray-100 soft-shadow">
              <button
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-white/50 transition-colors"
                onClick={() => setActiveIndex(activeIndex === i ? null : i)}
              >
                <span className="font-display font-bold text-gray-900">{faq.q}</span>
                <ChevronDown 
                  size={20} 
                  className={`text-gray-400 transition-transform ${activeIndex === i ? 'rotate-180' : ''}`} 
                />
              </button>
              <AnimatePresence>
                {activeIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                  >
                    <div className="px-8 pb-6 text-gray-600 leading-relaxed text-sm">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
