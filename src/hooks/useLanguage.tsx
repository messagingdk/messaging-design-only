import React, { createContext, useContext, useState, useCallback } from 'react';

type Language = 'da' | 'en';

type TranslationStrings = {
  nav: { product: string; channels: string; pricing: string; contact: string; getStarted: string };
  hero: { label: string; title: string; titleHighlight: string; subtitle: string; promptPlaceholder: string; promptButton: string; tryExample: string };
  channels: { label: string; title: string; subtitle: string; byop: string; byopDesc: string; managed: string; managedDesc: string; sms: string; smsDesc: string; rcs: string; rcsDesc: string; email: string; emailDesc: string; whatsapp: string; whatsappDesc: string };
  pricing: { label: string; title: string; subtitle: string; feature1: string; feature1Desc: string; feature2: string; feature2Desc: string; feature3: string; feature3Desc: string };
  cta: { title: string; subtitle: string; button: string; secondary: string };
  footer: { tagline: string; product: string; company: string; legal: string; about: string; careers: string; blog: string; terms: string; privacy: string; cookies: string; api: string; integrations: string; status: string; copyright: string };
};

const translations: Record<Language, TranslationStrings> = {
  da: {
    nav: {
      product: 'Produkt',
      channels: 'Kanaler',
      pricing: 'Priser',
      contact: 'Kontakt',
      getStarted: 'Kom i gang',
    },
    hero: {
      label: 'Fremtidens kommunikation',
      title: 'Mobil kommunikation',
      titleHighlight: 'gjort simpelt',
      subtitle: 'Lad AI-agenter kommunikere via MCP, NLP og LLM — automatisk, intelligent og personligt. Skriv hvad du vil opnå, og lad platformen klare resten.',
      promptPlaceholder: 'Beskriv din kommunikationsopgave — f.eks. "Send påmindelse til alle kunder der ikke har betalt"',
      promptButton: 'Kør agent',
      tryExample: 'Prøv et eksempel',
    },
    channels: {
      label: 'Kommunikationskanaler',
      title: 'Ét lag — alle kanaler',
      subtitle: 'Medbringa din egen udbyder eller lad messaging.dk håndtere det. Vi tilbyder et samlet kommunikationslag på tværs af alle de velkendte grænseflader.',
      byop: 'Bring Your Own Supplier (BYOS)',
      byopDesc: 'Tilslut din eksisterende SMS-, e-mail- eller RCS-udbyder direkte til vores platform.',
      managed: 'Leveret af messaging.dk',
      managedDesc: 'Lad os håndtere alle forbindelser, routing og levering — du fokuserer på indholdet.',
      sms: 'SMS',
      smsDesc: 'Direkte beskeder til enhver mobiltelefon globalt med høj leveringsrate.',
      rcs: 'RCS',
      rcsDesc: 'Rich Communication Services med billeder, knapper og interaktive elementer.',
      email: 'E-mail',
      emailDesc: 'Transaktionelle og marketing e-mails med fuld template-understøttelse.',
      whatsapp: 'WhatsApp',
      whatsappDesc: 'Nå dine kunder på verdens mest populære messaging-platform.',
    },
    pricing: {
      label: 'Priser',
      title: 'Betal kun for det du bruger',
      subtitle: 'Ingen faste pakker eller bindinger. Vores prismodel følger den velkendte AI-standard — du betaler as you go, baseret på dit faktiske forbrug.',
      feature1: 'Pay as you go',
      feature1Desc: 'Ingen abonnement. Du betaler kun for de beskeder og API-kald du faktisk foretager.',
      feature2: 'Skalér frit',
      feature2Desc: 'Fra 10 til 10 millioner beskeder — prisen følger dit forbrug uden overraskelser.',
      feature3: 'Gennemsigtig fakturering',
      feature3Desc: 'Fuld indsigt i forbrug og omkostninger i realtid via dit dashboard.',
    },
    cta: {
      title: 'Klar til at gentænke kommunikation?',
      subtitle: 'Start gratis i dag og oplev hvordan AI-drevet kommunikation kan transformere din virksomhed.',
      button: 'Opret gratis konto',
      secondary: 'Book en demo',
    },
    footer: {
      tagline: 'Fremtidens kommunikationsplatform — drevet af AI-agenter og MCP.',
      product: 'Produkt',
      company: 'Virksomhed',
      legal: 'Juridisk',
      about: 'Om os',
      careers: 'Karriere',
      blog: 'Blog',
      terms: 'Vilkår',
      privacy: 'Privatlivspolitik',
      cookies: 'Cookies',
      api: 'API Docs',
      integrations: 'Integrationer',
      status: 'Status',
      copyright: '© 2026 Messaging.dk — Alle rettigheder forbeholdes.',
    },
  },
  en: {
    nav: {
      product: 'Product',
      channels: 'Channels',
      pricing: 'Pricing',
      contact: 'Contact',
      getStarted: 'Get Started',
    },
    hero: {
      label: 'The future of communication',
      title: 'Mobile communication',
      titleHighlight: 'made simple',
      subtitle: 'Let AI agents communicate via MCP, NLP and LLM — automatically, intelligently, and personally. Describe what you want to achieve, and let the platform handle the rest.',
      promptPlaceholder: 'Describe your communication task — e.g. "Send a reminder to all unpaid customers"',
      promptButton: 'Run agent',
      tryExample: 'Try an example',
    },
    channels: {
      label: 'Communication channels',
      title: 'One layer — all channels',
      subtitle: 'Bring your own provider or let messaging.dk handle it. We offer a unified communication layer across all well-known interfaces.',
      byop: 'Bring Your Own Supplier (BYOS)',
      byopDesc: 'Connect your existing SMS, email or RCS supplier directly to our platform.',
      managed: 'Delivered by messaging.dk',
      managedDesc: 'Let us handle all connections, routing and delivery — you focus on the content.',
      sms: 'SMS',
      smsDesc: 'Direct messages to any mobile phone globally with high delivery rates.',
      rcs: 'RCS',
      rcsDesc: 'Rich Communication Services with images, buttons, and interactive elements.',
      email: 'Email',
      emailDesc: 'Transactional and marketing emails with full template support.',
      whatsapp: 'WhatsApp',
      whatsappDesc: 'Reach your customers on the world\'s most popular messaging platform.',
    },
    pricing: {
      label: 'Pricing',
      title: 'Only pay for what you use',
      subtitle: 'No fixed packages or commitments. Our pricing follows the familiar AI standard — you pay as you go, based on your actual usage.',
      feature1: 'Pay as you go',
      feature1Desc: 'No subscription. You only pay for the messages and API calls you actually make.',
      feature2: 'Scale freely',
      feature2Desc: 'From 10 to 10 million messages — pricing follows your usage with no surprises.',
      feature3: 'Transparent billing',
      feature3Desc: 'Full visibility into usage and costs in real time via your dashboard.',
    },
    cta: {
      title: 'Ready to rethink communication?',
      subtitle: 'Start free today and experience how AI-powered communication can transform your business.',
      button: 'Create free account',
      secondary: 'Book a demo',
    },
    footer: {
      tagline: 'The communication platform of the future — powered by AI agents and MCP.',
      product: 'Product',
      company: 'Company',
      legal: 'Legal',
      about: 'About us',
      careers: 'Careers',
      blog: 'Blog',
      terms: 'Terms',
      privacy: 'Privacy policy',
      cookies: 'Cookies',
      api: 'API Docs',
      integrations: 'Integrations',
      status: 'Status',
      copyright: '© 2026 Messaging.dk — All rights reserved.',
    },
  },
};

type Translations = TranslationStrings;

interface LanguageContextType {
  lang: Language;
  t: Translations;
  toggleLang: () => void;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Language>('da');

  const toggleLang = useCallback(() => {
    setLang(prev => prev === 'da' ? 'en' : 'da');
  }, []);

  const t = translations[lang];

  return (
    <LanguageContext.Provider value={{ lang, t, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
};
