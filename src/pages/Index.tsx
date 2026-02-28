import { LanguageProvider } from '@/hooks/useLanguage';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ChannelsSection from '@/components/ChannelsSection';
import PricingSection from '@/components/PricingSection';
import CtaSection from '@/components/CtaSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <LanguageProvider>
      <div className="bg-background min-h-screen">
        <Navbar />
        <HeroSection />
        <ChannelsSection />
        <PricingSection />
        <CtaSection />
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
