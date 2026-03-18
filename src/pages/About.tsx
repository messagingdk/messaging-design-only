import { LanguageProvider, useLanguage } from '@/hooks/useLanguage';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Building2, Globe, ChevronDown, Users } from 'lucide-react';
import sorenPhoto from '@/assets/soren-sundahl.png';

interface TeamMember {
  name: string;
  title: string;
  photo?: string;
  initials: string;
}

interface Company {
  name: string;
  domain: string;
  description: string;
  color: string;
  team: TeamMember[];
}

const companies: Company[] = [
  {
    name: 'Messaging.dk',
    domain: 'messaging.dk',
    description: 'AI-drevet kommunikationsplatform',
    color: 'hsl(192 85% 55%)',
    team: [],
  },
  {
    name: 'StepUp Media',
    domain: 'stepupmedia.dk',
    description: 'Webbureau & digital markedsføring',
    color: 'hsl(38 92% 50%)',
    team: [
      { name: 'Emil Hajjar Thøgersen', title: 'Webudvikler', photo: 'https://stepupmedia.dk/wp-content/uploads/2024/06/Emil.png', initials: 'EH' },
      { name: 'Dennis Jørgensen', title: 'Online Marketing Konsulent', photo: 'https://stepupmedia.dk/wp-content/uploads/2025/01/Dennis.png', initials: 'DJ' },
      { name: 'Steffen Johannsen', title: 'Webudvikler', photo: 'https://stepupmedia.dk/wp-content/uploads/2024/06/Steffen.png', initials: 'SJ' },
      { name: 'Christopher Schwaner', title: 'Grafisk Designer', photo: 'https://stepupmedia.dk/wp-content/uploads/2024/06/team-chris.png', initials: 'CS' },
    ],
  },
  {
    name: 'hostkon.IT',
    domain: 'hostkon.it',
    description: 'IT-løsninger & rådgivning',
    color: 'hsl(152 60% 50%)',
    team: [
      { name: 'Berat Brahimi', title: 'Partner | Hostingekspert & Infrastruktur Specialist', photo: 'https://hostkon.it/wp-content/uploads/2022/09/Berat-Brahimi-2022-scaled.webp', initials: 'BB' },
    ],
  },
];

const TeamPhoto = ({ member }: { member: TeamMember }) => {
  return (
    <div className="flex flex-col items-center gap-2 text-center">
      <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden ring-2 ring-border bg-muted">
        {member.photo ? (
          <img
            src={member.photo}
            alt={member.name}
            className="w-full h-full object-cover object-top"
            loading="lazy"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none';
              (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
            }}
          />
        ) : null}
        <div className={`${member.photo ? 'hidden' : ''} absolute inset-0 flex items-center justify-center bg-secondary text-secondary-foreground font-bold text-lg`}>
          {member.initials}
        </div>
      </div>
      <div>
        <p className="text-foreground font-medium text-sm leading-tight">{member.name}</p>
        <p className="text-muted-foreground text-xs mt-0.5">{member.title}</p>
      </div>
    </div>
  );
};

const CompanyCard = ({ company, index }: { company: Company; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 + index * 0.15, duration: 0.6 }}
      className="relative"
    >
      {/* Connector line from parent */}
      <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-px h-8 bg-border" />

      <div className="glass-card rounded-2xl p-6 md:p-8 relative overflow-hidden">
        {/* Accent top bar */}
        <div
          className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
          style={{ background: company.color }}
        />

        <div className="flex items-center gap-3 mb-4">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center"
            style={{ background: `${company.color}20` }}
          >
            <Building2 className="w-5 h-5" style={{ color: company.color }} />
          </div>
          <div>
            <h3 className="text-foreground font-bold text-lg font-display">{company.name}</h3>
            <a
              href={`https://${company.domain}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground text-xs hover:text-primary transition-colors flex items-center gap-1"
            >
              <Globe className="w-3 h-3" /> {company.domain}
            </a>
          </div>
        </div>

        <p className="text-muted-foreground text-sm mb-6">{company.description}</p>

        {company.team.length > 0 && (
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Users className="w-4 h-4 text-muted-foreground" />
              <span className="text-muted-foreground text-xs font-medium uppercase tracking-wider">
                Team ({company.team.length})
              </span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {company.team.map((member, i) => (
                <TeamPhoto key={i} member={member} />
              ))}
            </div>
          </div>
        )}

        {company.team.length === 0 && (
          <div className="flex items-center gap-2 text-muted-foreground text-xs">
            <Users className="w-4 h-4" />
            <span>AI-drevet platform — under opbygning</span>
          </div>
        )}
      </div>
    </motion.div>
  );
};

const AboutContent = () => {
  const { t } = useLanguage();
  const about = t.about;

  return (
    <div className="bg-background min-h-screen">
      <Navbar />
      <main className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <span className="section-label">{about.label}</span>
            <h1 className="mt-4 text-4xl md:text-5xl font-bold text-foreground font-display">
              En koncern bygget på erfaring
            </h1>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
              Messaging.dk er en del af CapExConnect-koncernen — en gruppe af selskaber ledet af Søren Sundahl.
            </p>
          </motion.div>

          {/* CEO / Holding */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="max-w-md mx-auto mb-4"
          >
            <div className="relative glass-card rounded-2xl p-6 text-center overflow-hidden">
              {/* Primary accent border */}
              <div className="absolute inset-0 rounded-2xl ring-1 ring-primary/30 pointer-events-none" />
              <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-primary/5 blur-3xl" />

              <div className="w-28 h-28 mx-auto rounded-full overflow-hidden ring-2 ring-primary/40 mb-4">
                <img
                  src={sorenPhoto}
                  alt="Søren Sundahl — CEO & Founder"
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="text-xl font-bold text-foreground font-display">Søren Sundahl</h2>
              <p className="text-primary font-semibold text-sm mt-1">CEO & Founder</p>
              <p className="text-muted-foreground text-xs mt-3 leading-relaxed max-w-xs mx-auto">
                {about.bio1}
              </p>

              <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border">
                <Building2 className="w-4 h-4 text-primary" />
                <span className="text-foreground font-bold text-sm font-display">CapExConnect</span>
                <a href="https://capexconnect.dk" target="_blank" rel="noopener noreferrer" className="text-muted-foreground text-xs hover:text-primary transition-colors">
                  capexconnect.dk
                </a>
              </div>
            </div>
          </motion.div>

          {/* Connector line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ delay: 0.4, duration: 0.4 }}
            className="flex flex-col items-center mb-4 origin-top"
          >
            <div className="w-px h-12 bg-border" />
            <ChevronDown className="w-5 h-5 text-muted-foreground -mt-1" />
          </motion.div>

          {/* Subsidiaries grid */}
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            {companies.map((company, i) => (
              <CompanyCard key={company.name} company={company} index={i} />
            ))}
          </div>

          {/* Total team count */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="mt-20 text-center"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-secondary/30 border border-border">
              <Users className="w-5 h-5 text-primary" />
              <span className="text-foreground font-medium">
                {1 + companies.reduce((sum, c) => sum + c.team.length, 0)} medarbejdere
              </span>
              <span className="text-muted-foreground text-sm">på tværs af koncernen</span>
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
