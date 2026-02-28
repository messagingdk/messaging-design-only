import { useLanguage } from '@/hooks/useLanguage';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer id="contact" className="border-t border-border py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-1">
            <span className="font-display text-xl font-bold text-foreground tracking-tight">
              messaging<span className="text-gradient">.dk</span>
            </span>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              {t.footer.tagline}
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground text-sm mb-4">{t.footer.product}</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{t.footer.api}</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{t.footer.integrations}</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{t.footer.status}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground text-sm mb-4">{t.footer.company}</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{t.footer.about}</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{t.footer.careers}</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{t.footer.blog}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground text-sm mb-4">{t.footer.legal}</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{t.footer.terms}</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{t.footer.privacy}</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{t.footer.cookies}</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border">
          <p className="text-xs text-muted-foreground">{t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
