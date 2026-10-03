import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { useLanguage } from '../i18n/LanguageContext';
import { useTheme } from '../i18n/ThemeContext';
import { LANGS } from '../i18n/translations';
import DemoBanner from './DemoBanner';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const { lang, changeLang, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', h);
    return () => window.removeEventListener('scroll', h);
  }, []);

  const links = [
    { label: t('navHome'), to: '/' },
    { label: t('navSelfDeclaration'), to: '/self-declaration' },
    { label: t('navCandidate'), to: '/candidate' },
    { label: t('navAssessor'), to: '/assessor' },
  ];

  const isPortfolio = theme === 'portfolio';
  const isHome = location.pathname === '/';
  const isAssessor = location.pathname === '/assessor';

  // Determine text color and background based on theme and page
  let navClasses = 'bg-navy text-white';
  if (isPortfolio) {
    if (isHome) {
      navClasses = scrolled ? 'bg-[#3047E8]/90 backdrop-blur-md text-white' : 'bg-transparent text-white';
    } else if (isAssessor) {
      navClasses = scrolled ? 'bg-charcoal/90 backdrop-blur-md text-white' : 'bg-charcoal text-white';
    } else {
      navClasses = scrolled ? 'bg-pageBg/90 backdrop-blur-md text-charcoal' : 'bg-transparent text-charcoal';
    }
  }

  const textColorClass = isPortfolio && !isHome && !isAssessor ? 'text-charcoal' : 'text-white';
  const selectBgClass = isPortfolio && !isHome && !isAssessor ? 'bg-charcoal/5 border-charcoal/20 focus:border-charcoal/50' : 'bg-white/15 border-white/20 focus:border-white/50';

  return (
    <>
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${navClasses} ${scrolled ? 'shadow-lg' : ''}`}>
        {/* Mandatory Demo Mode Banner at very top */}
        <DemoBanner />

        {/* Top accent stripe */}
        {!isPortfolio && <div className="h-1 bg-teal w-full transition-colors" />}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            {isPortfolio ? (
              <div className="flex items-center gap-2">
                <span className="font-display font-bold tracking-tight text-xl">[<span className="text-accent inline-block mx-[2px] w-2 h-2 rounded-full bg-accent relative -top-0.5" />] RPL AI</span>
                <span className="font-mono text-[10px] bg-white/10 px-2 py-1 rounded opacity-70">SIH26242</span>
              </div>
            ) : (
              <>
                <div className="w-9 h-9 rounded-lg bg-white/15 flex items-center justify-center text-sm font-bold border border-white/20">
                  RPL
                </div>
                <div className="hidden sm:block leading-tight">
                  <div className="text-sm font-semibold tracking-tight">{t('rplAiAssessment')}</div>
                  <div className="text-[11px] opacity-60">{t('ministryName')}</div>
                </div>
              </>
            )}
          </Link>

          {/* Desktop links */}
          <nav className="hidden md:flex items-center gap-6">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className={`text-[13px] font-mono tracking-wider transition-colors ${
                  location.pathname === l.to
                    ? isPortfolio ? 'text-accent' : 'text-teal border-b-2 border-teal pb-1'
                    : `opacity-60 hover:opacity-100 ${textColorClass}`
                }`}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2 ml-auto md:ml-4">
            <select
              value={lang}
              onChange={(e) => changeLang(e.target.value)}
              className={`${selectBgClass} ${textColorClass} text-xs font-mono rounded-lg px-2 py-1.5 outline-none border cursor-pointer appearance-none`}
              style={{
                backgroundImage: `url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23${isPortfolio && !isHome && !isAssessor ? '1A1A1A' : 'FFFFFF'}%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E")`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right 0.5rem top 50%',
                backgroundSize: '0.65rem auto',
                paddingRight: '1.75rem'
              }}
            >
              {LANGS.map(l => (
                <option key={l.code} value={l.code} className="bg-charcoal text-white font-sans">
                  {l.label}
                </option>
              ))}
            </select>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`${isPortfolio && !isHome && !isAssessor ? 'bg-charcoal/5 hover:bg-charcoal/10 border-charcoal/20' : 'bg-white/10 hover:bg-white/20 border-white/20'} ${textColorClass} text-[10px] font-mono tracking-widest rounded-lg px-2.5 sm:px-3 py-1.5 border transition-colors inline-flex items-center gap-1.5 whitespace-nowrap`}
              title="Toggle Theme: Theme 1 (Portfolio) / Theme 2 (Government)"
              aria-label="Toggle Theme"
            >
              <span className={`w-1.5 h-1.5 rounded-full ${isPortfolio ? 'bg-accent' : 'bg-emerald-400'}`}></span>
              {isPortfolio ? 'THEME 1' : 'THEME 2'}
            </button>

            {/* Mobile toggle */}
            <button className={`md:hidden p-2 -mr-2 rounded-lg ${textColorClass}`} onClick={() => setOpen(!open)} aria-label="Menu">
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className={`fixed inset-0 z-40 ${isPortfolio ? 'bg-charcoal text-white' : 'bg-navy text-white'} pt-32 pb-12 px-6 md:hidden overflow-y-auto`}
          >
            <nav className="flex flex-col gap-4">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className={`px-5 py-4 text-xl font-display font-bold tracking-wide transition-colors ${
                    location.pathname === l.to
                      ? 'text-accent'
                      : 'text-white/60 hover:text-white'
                  }`}
                >
                  {l.label}
                </Link>
              ))}
              <div className="pt-6 border-t border-white/10 flex items-center justify-between px-5 mt-2">
                <span className="text-xs font-mono opacity-60">THEME</span>
                <button
                  onClick={toggleTheme}
                  className="bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-mono tracking-widest rounded-lg px-4 py-2 transition-colors inline-flex items-center gap-2"
                >
                  <span className={`w-2 h-2 rounded-full ${isPortfolio ? 'bg-accent' : 'bg-emerald-400'}`}></span>
                  {isPortfolio ? 'THEME 1' : 'THEME 2'}
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
