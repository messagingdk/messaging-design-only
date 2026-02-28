import { motion } from 'framer-motion';
import { useLanguage } from '@/hooks/useLanguage';
import { MessageSquare, Mail, Smartphone, MessageCircle, ArrowRight, Plug, Shield } from 'lucide-react';

const channelIcons = {
  sms: MessageSquare,
  rcs: Smartphone,
  email: Mail,
  whatsapp: MessageCircle,
};

const ChannelsSection = () => {
  const { t } = useLanguage();

  const channels = [
    { key: 'sms' as const, icon: channelIcons.sms },
    { key: 'rcs' as const, icon: channelIcons.rcs },
    { key: 'email' as const, icon: channelIcons.email },
    { key: 'whatsapp' as const, icon: channelIcons.whatsapp },
  ];

  return (
    <section id="channels" className="py-24 px-6 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-border" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="section-label mb-4 block">{t.channels.label}</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t.channels.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.channels.subtitle}
          </p>
        </motion.div>

        {/* BYOP vs Managed */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card-hover rounded-2xl p-8"
          >
            <div className="channel-icon mb-6">
              <Plug className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-display text-xl font-bold text-foreground mb-3">{t.channels.byop}</h3>
            <p className="text-muted-foreground leading-relaxed">{t.channels.byopDesc}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-card-hover rounded-2xl p-8"
          >
            <div className="channel-icon mb-6">
              <Shield className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-display text-xl font-bold text-foreground mb-3">{t.channels.managed}</h3>
            <p className="text-muted-foreground leading-relaxed">{t.channels.managedDesc}</p>
          </motion.div>
        </div>

        {/* Channel cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {channels.map((ch, i) => {
            const Icon = ch.icon;
            const name = t.channels[ch.key];
            const desc = t.channels[`${ch.key}Desc` as keyof typeof t.channels];
            return (
              <motion.div
                key={ch.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="glass-card-hover rounded-2xl p-6 group cursor-pointer"
              >
                <div className="channel-icon mb-5">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-display text-lg font-bold text-foreground mb-2">{name}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{desc}</p>
                <span className="inline-flex items-center gap-1 text-xs text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowRight className="w-3 h-3" />
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ChannelsSection;
