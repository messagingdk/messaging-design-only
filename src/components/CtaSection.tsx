import { motion } from 'framer-motion';
import { useLanguage } from '@/hooks/useLanguage';
import { ArrowRight } from 'lucide-react';

const CtaSection = () => {
  const { t } = useLanguage();

  return (
    <section id="cta" className="py-24 px-6 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-border" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto text-center"
      >
        <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
          {t.cta.title}
        </h2>
        <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
          {t.cta.subtitle}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
          >
            {t.cta.button}
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-border text-foreground font-semibold hover:bg-secondary transition-colors"
          >
            {t.cta.secondary}
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default CtaSection;
