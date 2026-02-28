import { LanguageProvider, useLanguage } from '@/hooks/useLanguage';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import sorenPhoto from '@/assets/soren-sundahl.png';

const AboutContent = () => {
  const { t } = useLanguage();
  const about = t.about;

  return (
    <div className="bg-background min-h-screen">
      <Navbar />
      <main className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="section-label">{about.label}</span>
            <h1 className="mt-4 text-4xl md:text-5xl font-bold text-foreground font-display">
              {about.title}
            </h1>
          </motion.div>

          {/* Founder section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="grid md:grid-cols-2 gap-12 items-center mb-20"
          >
            <div className="relative">
              <div className="glass-card rounded-2xl overflow-hidden">
                <img
                  src={sorenPhoto}
                  alt="Søren Sundahl — CEO & Founder"
                  className="w-full h-auto"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-3 -right-3 w-24 h-24 rounded-full bg-primary/10 blur-2xl" />
            </div>

            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-foreground font-display">
                  Søren Sundahl
                </h2>
                <p className="text-primary font-semibold mt-1">CEO & Founder</p>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                {about.bio1}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {about.bio2}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {about.bio3}
              </p>

              <a
                href="https://sundahl.nu"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-primary hover:opacity-80 transition-opacity"
              >
                sundahl.nu <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>

          {/* Competencies */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            <h3 className="text-2xl font-bold text-foreground font-display text-center mb-10">
              {about.competenciesTitle}
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {about.competencies.map((item, i) => (
                <div key={i} className="glass-card-hover rounded-xl p-6 text-center">
                  <p className="text-foreground font-medium text-sm">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

const About = () => (
  <LanguageProvider>
    <AboutContent />
  </LanguageProvider>
);

export default About;
