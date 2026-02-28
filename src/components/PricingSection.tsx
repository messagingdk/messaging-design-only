import { motion } from 'framer-motion';
import { useLanguage } from '@/hooks/useLanguage';
import { Zap, TrendingUp, CreditCard } from 'lucide-react';

const PricingSection = () => {
  const { t } = useLanguage();

  const features = [
    { icon: Zap, titleKey: 'feature1' as const, descKey: 'feature1Desc' as const },
    { icon: TrendingUp, titleKey: 'feature2' as const, descKey: 'feature2Desc' as const },
    { icon: CreditCard, titleKey: 'feature3' as const, descKey: 'feature3Desc' as const },
  ];

  return (
    <section id="pricing" className="py-24 px-6 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-border" />

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="section-label mb-4 block">{t.pricing.label}</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t.pricing.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.pricing.subtitle}
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-6">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.titleKey}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="glass-card-hover rounded-2xl p-8 text-center"
              >
                <div className="channel-icon mb-5 mx-auto">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-display text-lg font-bold text-foreground mb-2">
                  {t.pricing[f.titleKey]}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t.pricing[f.descKey]}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
