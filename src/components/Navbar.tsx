import { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/hooks/useLanguage';
import { Globe, Menu, X } from 'lucide-react';

const Navbar = () => {
  const { lang, t, toggleLang } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 glass-card"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/" className="font-display text-xl font-bold text-foreground tracking-tight">
          messaging<span className="text-gradient">.dk</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#product" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{t.nav.product}</a>
          <a href="#channels" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{t.nav.channels}</a>
          <a href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{t.nav.pricing}</a>
          <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{t.nav.contact}</a>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={toggleLang}
            className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <Globe className="w-4 h-4" />
            {lang === 'da' ? 'EN' : 'DA'}
          </button>
          <a
            href="#cta"
            className="px-5 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            {t.nav.getStarted}
          </a>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="md:hidden px-6 pb-6 flex flex-col gap-4"
        >
          <a href="#product" className="text-sm text-muted-foreground">{t.nav.product}</a>
          <a href="#channels" className="text-sm text-muted-foreground">{t.nav.channels}</a>
          <a href="#pricing" className="text-sm text-muted-foreground">{t.nav.pricing}</a>
          <a href="#contact" className="text-sm text-muted-foreground">{t.nav.contact}</a>
          <button onClick={toggleLang} className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <Globe className="w-4 h-4" />
            {lang === 'da' ? 'English' : 'Dansk'}
          </button>
          <a href="#cta" className="px-5 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-semibold text-center">
            {t.nav.getStarted}
          </a>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
