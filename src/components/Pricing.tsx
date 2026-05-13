import { motion } from 'motion/react';
import { Check } from 'lucide-react';
import Button from './Button';

export default function Pricing() {
  const plans = [
    {
      name: 'Free Plan',
      price: '0',
      desc: 'Perfect for small student clubs and initial meetups.',
      features: ['Up to 50 Participants', 'Basic Registration Form', 'Email Support', 'Standard Reports'],
      cta: 'Get Started',
      popular: false,
    },
    {
      name: 'Basic Plan',
      price: '29',
      desc: 'Ideal for medium workshops and campus organizations.',
      features: ['Up to 500 Participants', 'Custom Form Fields', 'QR Code Tickets', 'Real-time Dashboard', 'Priority Support'],
      cta: 'Start Trial',
      popular: true,
    },
    {
      name: 'Pro Plan',
      price: '89',
      desc: 'Enterprise features for large scale seminars and summits.',
      features: ['Unlimited Participants', 'White-label Branding', 'API Integration', 'Cloud Storage (10GB)', 'Dedicated Account Manager'],
      cta: 'Upgrade to Pro',
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-brand-bg relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-brand-orange uppercase tracking-widest mb-3">Pricing Plans</h2>
          <h3 className="text-4xl md:text-5xl font-display font-extrabold text-gray-900 mb-6">Simple, Scalable Pricing</h3>
          <p className="text-gray-500 max-w-xl mx-auto">Choose the plan that fits your event scale. No hidden fees, cancel anytime.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`relative p-8 rounded-3xl soft-shadow transition-all group ${
                plan.popular 
                ? 'bg-white premium-shadow border-2 border-brand-purple py-12' 
                : 'bg-white/50 border border-gray-100 hover:bg-white'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-purple text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <h4 className="text-lg font-display font-bold text-gray-900 mb-2">{plan.name}</h4>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-display font-extrabold text-gray-900">${plan.price}</span>
                  <span className="text-gray-500 font-medium">/month</span>
                </div>
                <p className="text-sm text-gray-500 mt-4 leading-relaxed">{plan.desc}</p>
              </div>

              <div className="space-y-4 mb-10">
                {plan.features.map((feature, j) => (
                  <div key={j} className="flex items-center gap-3">
                    <div className={`p-0.5 rounded-full ${plan.popular ? 'bg-brand-purple text-white' : 'bg-gray-100 text-gray-400'}`}>
                      <Check size={14} />
                    </div>
                    <span className="text-sm font-medium text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>

              <Button 
                variant={plan.popular ? 'primary' : 'glass'} 
                className="w-full"
              >
                {plan.cta}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
