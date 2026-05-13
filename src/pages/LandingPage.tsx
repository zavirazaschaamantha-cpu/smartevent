import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Trusted from '../components/Trusted';
import Features from '../components/Features';
import DashboardPreview from '../components/DashboardPreview';
import HowItWorks from '../components/HowItWorks';
import Pricing from '../components/Pricing';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import { CTA, Footer } from '../components/Footer';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-brand-bg">
      <Navbar />
      <Hero />
      <Trusted />
      <Features />
      <DashboardPreview />
      <HowItWorks />
      <Pricing />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}
