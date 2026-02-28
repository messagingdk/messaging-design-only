import { LanguageProvider } from '@/hooks/useLanguage';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ChannelsSection from '@/components/ChannelsSection';
import CtaSection from '@/components/CtaSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <LanguageProvider>
      <div className="bg-background min-h-screen">
        <Navbar />
        <HeroSection />
        <ChannelsSection />
        <CtaSection />
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
