import { useLanguage } from '../i18n/LanguageContext';
import { useTheme } from '../i18n/ThemeContext';

export default function Footer() {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const isPortfolio = theme === 'portfolio';

  return (
    <footer className={`${isPortfolio ? 'bg-[#0a0b12] text-white/70 border-t-2 border-accent/40' : 'bg-navy text-white/60 border-t-4 border-teal'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <div className={`w-8 h-8 rounded-lg ${isPortfolio ? 'bg-accent text-[#0a0b12]' : 'bg-white/10 text-white border border-white/20'} flex items-center justify-center text-xs font-bold shrink-0`}>VT</div>
              <span className="font-semibold text-white text-sm sm:text-base tracking-tight">VOID TRACE RPL AI ASSISTANT</span>
            </div>
            <p className="text-sm leading-relaxed">
              {t('footerDesc')}
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-white text-sm mb-3">{t('sponsoredBy')}</h4>
            <ul className="text-sm space-y-1.5">
              <li>{t('msdeFullName')}</li>
              <li>{t('ncvetFullName')}</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white text-sm mb-3">{t('project')}</h4>
            <ul className="text-sm space-y-1.5">
              <li>{t('problemId')}</li>
              <li>{t('themeSmartEdu')}</li>
              <li>{t('categorySoftware')}</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-white/10 text-xs text-center">
          {t('footerCopyright')}
        </div>
      </div>
    </footer>
  );
}
