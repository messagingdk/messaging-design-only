import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { LanguageProvider, useLanguage } from '@/hooks/useLanguage';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { nordicCountries, allCountries } from '@/data/smsPricing';

const PricingContent = () => {
  const { t, lang } = useLanguage();
  const [search, setSearch] = useState('');
  const [sortField, setSortField] = useState<'name' | 'priceDKK'>('name');
  const [sortDir, setSortDir] = useState<'asc' | 'desc'>('asc');

  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    const list = allCountries.filter(
      c => c.name.toLowerCase().includes(q) || c.prefix.includes(q)
    );
    return list.sort((a, b) => {
      const mul = sortDir === 'asc' ? 1 : -1;
      if (sortField === 'name') return mul * a.name.localeCompare(b.name);
      return mul * (a.priceDKK - b.priceDKK);
    });
  }, [search, sortField, sortDir]);

  const toggleSort = (field: 'name' | 'priceDKK') => {
    if (sortField === field) {
      setSortDir(d => (d === 'asc' ? 'desc' : 'asc'));
    } else {
      setSortField(field);
      setSortDir('asc');
    }
  };

  const isDA = lang === 'da';

  return (
    <div className="bg-background min-h-screen">
      <Navbar />

      <section className="pt-32 pb-16 px-6">
        <div className="max-w-5xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8 text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            {isDA ? 'Tilbage' : 'Back'}
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="section-label mb-4 block">
              {isDA ? 'Priser' : 'Pricing'}
            </span>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-4">
              {isDA ? 'SMS-priser' : 'SMS Pricing'}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {isDA
                ? 'Gennemsigtige priser — ingen skjulte gebyrer. Betal kun for de beskeder du sender.'
                : 'Transparent pricing — no hidden fees. Only pay for the messages you send.'}
            </p>
          </motion.div>

          {/* Nordic Countries */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-20"
          >
            <h2 className="font-display text-2xl font-bold text-foreground mb-8">
              {isDA ? 'Nordiske lande' : 'Nordic Countries'}
            </h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {nordicCountries.map((c, i) => (
                <motion.div
                  key={c.prefix}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                  className="glass-card-hover rounded-2xl p-8 text-center group"
                >
                  <div className="text-5xl mb-4">{c.flag}</div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-1">
                    {c.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-5">{c.prefix}</p>
                  <div className="flex items-baseline justify-center gap-1.5">
                    <span className="font-display text-3xl font-bold text-gradient">
                      {c.priceDKK.toFixed(2)}
                    </span>
                    <span className="text-sm text-muted-foreground font-medium">DKK</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2 font-mono">
                    €{c.priceEUR.toFixed(4)} pr. SMS
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* All Countries Table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
              <h2 className="font-display text-2xl font-bold text-foreground">
                {isDA ? 'Alle lande' : 'All Countries'}
              </h2>
              <div className="relative w-full sm:w-72">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder={isDA ? 'Søg efter land...' : 'Search country...'}
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl glass-card text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                />
              </div>
            </div>

            <p className="text-sm text-muted-foreground mb-4">
              {isDA
                ? `Viser ${filtered.length} af ${allCountries.length} lande`
                : `Showing ${filtered.length} of ${allCountries.length} countries`}
            </p>

            <div className="glass-card rounded-2xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th
                        onClick={() => toggleSort('name')}
                        className="text-left px-5 py-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground cursor-pointer hover:text-foreground transition-colors select-none"
                      >
                        {isDA ? 'Land' : 'Country'}{' '}
                        {sortField === 'name' && (sortDir === 'asc' ? '↑' : '↓')}
                      </th>
                      <th className="text-left px-5 py-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        {isDA ? 'Præfiks' : 'Prefix'}
                      </th>
                      <th
                        onClick={() => toggleSort('priceDKK')}
                        className="text-right px-5 py-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground cursor-pointer hover:text-foreground transition-colors select-none"
                      >
                        {isDA ? 'Pris (DKK)' : 'Price (DKK)'}{' '}
                        {sortField === 'priceDKK' && (sortDir === 'asc' ? '↑' : '↓')}
                      </th>
                      <th className="text-right px-5 py-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        {isDA ? 'Pris (EUR)' : 'Price (EUR)'}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {filtered.map((c, i) => (
                      <tr
                        key={`${c.prefix}-${c.name}`}
                        className={`border-b border-border/50 transition-colors hover:bg-muted/30 ${
                          i % 2 === 0 ? '' : 'bg-muted/10'
                        }`}
                      >
                        <td className="px-5 py-3.5 flex items-center gap-3">
                          <span className="text-lg">{c.flag}</span>
                          <span className="text-foreground font-medium">{c.name}</span>
                        </td>
                        <td className="px-5 py-3.5 text-muted-foreground font-mono text-xs">
                          {c.prefix}
                        </td>
                        <td className="px-5 py-3.5 text-right text-foreground font-mono">
                          {c.priceDKK.toFixed(4)} kr.
                        </td>
                        <td className="px-5 py-3.5 text-right text-muted-foreground font-mono">
                          €{c.priceEUR.toFixed(4)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

const Pricing = () => (
  <LanguageProvider>
    <PricingContent />
  </LanguageProvider>
);

export default Pricing;
