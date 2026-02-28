import { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/hooks/useLanguage';
import { Send, Sparkles } from 'lucide-react';

const HeroSection = () => {
  const { t } = useLanguage();
  const [prompt, setPrompt] = useState('');

  const examples = [
    'da' === 'da'
      ? 'Send påmindelse til kunder med forfaldne fakturaer'
      : 'Send reminder to customers with overdue invoices',
  ];

  return (
    <section id="product" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-6 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-primary/3 blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label inline-flex items-center gap-2 mb-6">
            <Sparkles className="w-4 h-4" />
            {t.hero.label}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-5xl md:text-7xl font-bold tracking-tight mb-6 text-foreground"
        >
          {t.hero.title}{' '}
          <span className="text-gradient">{t.hero.titleHighlight}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          {t.hero.subtitle}
        </motion.p>

        {/* Prompt input */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="max-w-2xl mx-auto"
        >
          <div className="glass-card prompt-input-glow rounded-2xl p-2">
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder={t.hero.promptPlaceholder}
                className="flex-1 bg-transparent border-none outline-none text-foreground placeholder:text-muted-foreground px-4 py-3 text-sm md:text-base"
              />
              <button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity whitespace-nowrap">
                <Send className="w-4 h-4" />
                {t.hero.promptButton}
              </button>
            </div>
          </div>

          <button
            onClick={() => setPrompt(examples[0])}
            className="mt-4 text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1.5"
          >
            <Sparkles className="w-3 h-3" />
            {t.hero.tryExample}
          </button>
        </motion.div>

        {/* Floating badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-16 flex flex-wrap justify-center gap-3"
        >
          {['MCP Protocol', 'NLP', 'LLM Agents', 'Multi-channel', 'Real-time'].map((tag) => (
            <span key={tag} className="glass-card px-4 py-2 rounded-full text-xs font-medium text-muted-foreground">
              {tag}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
