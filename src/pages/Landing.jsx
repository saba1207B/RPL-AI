import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import {
  ArrowRight, Mic, Camera, ShieldCheck, Award,
  ChevronRight, CheckCircle, Users, FileCheck,
} from 'lucide-react';
import { useTheme } from '../i18n/ThemeContext';
import { useLanguage } from '../i18n/LanguageContext';

const fade = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' },
  transition: { duration: 0.5 },
};

function Ticker() {
  const { t } = useLanguage();
  return (
    <div className="bg-accent text-charcoal font-display font-bold text-lg py-3 overflow-hidden whitespace-nowrap border-y-2 border-charcoal flex items-center relative">
      <motion.div
        className="flex gap-4 min-w-max"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ repeat: Infinity, duration: 25, ease: 'linear' }}
      >
        {Array.from({ length: 10 }).map((_, i) => (
          <span key={i} className="flex items-center gap-4">
            <span>{t('tickerAiAssisted')}</span><span className="text-xl">✦</span>
            <span>{t('tickerNsqf')}</span><span className="text-xl">✦</span>
            <span>{t('tickerRegional')}</span><span className="text-xl">✦</span>
            <span>{t('tickerOffline')}</span><span className="text-xl">✦</span>
            <span>{t('tickerHumanLoop')}</span><span className="text-xl">✦</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}

function Orbital3D() {
  return (
    <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-[500px] h-[500px] [perspective:1000px] pointer-events-none hidden lg:flex items-center justify-center z-0 opacity-80">
      <motion.div 
        animate={{ rotateY: [0, 360], rotateX: [0, 360] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="w-full h-full [transform-style:preserve-3d] relative flex items-center justify-center"
      >
        <div className="absolute w-64 h-64 bg-white/10 rounded-full blur-3xl shadow-[0_0_100px_var(--color-primary-light)]" />
        <div className="absolute w-full h-full border-[2px] border-accent/40 rounded-full" style={{ transform: 'rotateX(75deg)' }} />
        <div className="absolute w-full h-full border-[2px] border-white/20 rounded-full" style={{ transform: 'rotateX(75deg) rotateY(60deg)' }} />
        <div className="absolute w-full h-full border-[2px] border-primary-light/40 rounded-full" style={{ transform: 'rotateX(75deg) rotateY(120deg)' }} />
        <motion.div 
          animate={{ scale: [1, 1.3, 1] }} 
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          className="w-12 h-12 bg-accent rounded-full shadow-[0_0_40px_var(--color-accent)] z-10" 
        />
      </motion.div>
    </div>
  );
}

function FloatingShapes() {
  const shapes = [
    { type: 'circle', color: 'bg-cyan-500', size: 'w-12 h-12', pos: 'top-20 left-[10%]', delay: 0 },
    { type: 'square', color: 'bg-purple-500', size: 'w-10 h-10', pos: 'top-40 right-[15%]', delay: 1 },
    { type: 'cross', color: 'text-pink-500', size: 'text-5xl', pos: 'bottom-32 left-[20%]', delay: 2 },
    { type: 'plus', color: 'text-yellow-400', size: 'text-6xl', pos: 'top-32 left-[40%]', delay: 1.5 },
    { type: 'circle', color: 'border-4 border-green-400 bg-transparent', size: 'w-16 h-16', pos: 'bottom-20 right-[35%]', delay: 0.5 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {shapes.map((s, i) => (
        <motion.div
          key={i}
          className={`absolute ${s.pos} flex items-center justify-center opacity-40`}
          animate={{
            y: [0, -40, 0],
            rotate: s.type === 'circle' ? 0 : [0, 90, 180, 360],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: s.delay,
          }}
        >
          {s.type === 'circle' && <div className={`${s.size} ${s.color} rounded-full blur-[2px]`} />}
          {s.type === 'square' && <div className={`${s.size} ${s.color} blur-[2px]`} />}
          {s.type === 'cross' && <div className={`${s.size} ${s.color} font-mono rotate-45 blur-[1px] leading-none`}>+</div>}
          {s.type === 'plus' && <div className={`${s.size} ${s.color} font-mono blur-[1px] leading-none`}>+</div>}
        </motion.div>
      ))}
    </div>
  );
}

export default function Landing() {
  const { theme } = useTheme();
  const { t } = useLanguage();
  const isPortfolio = theme === 'portfolio';

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
      {isPortfolio && <FloatingShapes />}
      
      {/* ════════ HERO ════════ */}
      <section className={`pt-36 pb-16 md:pt-44 md:pb-24 px-4 sm:px-6 relative overflow-hidden ${isPortfolio ? 'bg-[#3047E8] text-white' : 'bg-pageBg text-textPrimary'}`}>
        {isPortfolio && <Orbital3D />}
        {isPortfolio && (
          <div className="absolute left-4 top-1/2 -translate-y-1/2 -rotate-90 origin-left hidden md:block">
            <span className="font-mono text-xs tracking-widest text-white/60">{t('makeItClear')}</span>
          </div>
        )}
        <div className={`max-w-6xl mx-auto relative z-10 ${isPortfolio ? 'flex flex-col md:flex-row items-center justify-between text-left' : 'text-center'}`}>
          <div className={isPortfolio ? 'md:w-1/2' : ''}>
            <motion.div {...fade}>
              <span className={`inline-flex items-center gap-2 ${isPortfolio ? 'bg-accent/20 text-accent border-accent/40' : 'bg-teal/10 text-teal-dark border-teal/20'} text-xs font-semibold px-3 py-1.5 rounded-full mb-6 border`}>
                <Award size={14} /> {t('govtInitiative')}
              </span>
            </motion.div>

            {isPortfolio ? (
              <motion.h1 {...fade} className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-5 text-white tracking-tight break-words">
                {t('portfolioHeroH1_1')}<br/>
                <span className="text-accent">{t('portfolioHeroH1_2')}</span>{t('portfolioHeroH1_3')}<br/>
                {t('portfolioHeroH1_4')}
              </motion.h1>
            ) : (
              <motion.h1 {...fade} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-5 text-navy break-words">
                {t('heroTitle')}
              </motion.h1>
            )}

            <motion.p {...fade} className={`text-lg sm:text-xl max-w-2xl leading-relaxed mb-8 ${isPortfolio ? 'text-white/85' : 'mx-auto text-textSecondary'}`}>
              {t('heroSub')}
            </motion.p>

            <motion.div {...fade} className={`flex flex-col sm:flex-row gap-4 items-center ${isPortfolio ? 'justify-start' : 'justify-center'}`}>
              <Link
                to="/self-declaration"
                className={`w-full sm:w-auto ${isPortfolio ? 'bg-[#0a0b12] text-white hover:bg-black rounded-full shadow-lg shadow-black/30' : 'bg-teal hover:bg-teal-dark text-white shadow-sm shadow-teal/20 rounded-xl'} px-8 py-4 font-semibold text-lg flex items-center justify-center gap-2 transition-all`}
              >
                {t('startAssessment')} <ArrowRight size={20} />
              </Link>
              <Link
                to="/assessor"
                className={`w-full sm:w-auto font-semibold text-lg flex items-center justify-center gap-2 transition-colors ${isPortfolio ? 'text-white underline underline-offset-8 hover:text-accent' : 'border-2 border-navy/20 text-navy hover:bg-navy hover:text-white px-8 py-4 rounded-xl'}`}
              >
                {t('assessorLogin')}
              </Link>
            </motion.div>
          </div>
          
          {isPortfolio && (
            <div className="md:w-1/2 relative mt-16 md:mt-0 flex justify-center">
              <Orbital3D />
              <div className="absolute top-0 right-0 font-mono text-xs text-accent">{t('buildShapeShip')}</div>
            </div>
          )}
        </div>
      </section>

      {isPortfolio && <Ticker />}

      {/* ════════ WORK SECTION (PORTFOLIO ONLY) ════════ */}
      {isPortfolio && (
        <section className="py-20 px-4 sm:px-6 bg-[#f5f2ed] text-[#0a0b12] relative">
          <div className="max-w-6xl mx-auto">
            <motion.h2 {...fade} className="text-sm font-mono tracking-widest mb-12 text-[#0a0b12]/80">{t('ourWork')}</motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { num: '01', title: t('work1Title'), tags: [t('tagSelfDecl'), t('tagAiAssist')], desc: t('work1Desc') },
                { num: '02', title: t('work2Title'), tags: [t('tagPractical'), t('tagMedia')], desc: t('work2Desc') },
                { num: '03', title: t('work3Title'), tags: [t('tagAssessor'), t('tagNsqf')], desc: t('work3Desc') },
                { num: '04', title: t('work4Title'), tags: [t('tagOffline'), t('tagSync')], desc: t('work4Desc') }
              ].map((work, i) => (
                <motion.div key={i} {...fade} transition={{ ...fade.transition, delay: i * 0.1 }}
                  className="bg-[#0a0b12] text-white p-8 rounded-card group hover:shadow-[0_0_35px_rgba(255,216,77,0.2)] border border-white/10 hover:border-accent/60 transition-all cursor-pointer relative overflow-hidden"
                >
                  <div className="flex justify-between items-start mb-16">
                    <span className="font-mono text-accent text-2xl font-bold">{work.num}</span>
                    <span className="text-xs font-mono border border-white/20 px-2.5 py-1 rounded-full text-white/80 bg-white/5">2026</span>
                  </div>
                  <h3 className="text-3xl font-display font-bold mb-4 text-white">{work.title}</h3>
                  <p className="text-white/80 mb-8 leading-relaxed">{work.desc}</p>
                  <div className="flex gap-2 flex-wrap">
                    {work.tags.map(tag => (
                      <span key={tag} className="text-[11px] font-mono bg-white/10 text-white/90 border border-white/10 px-2.5 py-1 rounded-md">{tag}</span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ════════ FEATURES (GOVERNMENT ONLY) ════════ */}
      {!isPortfolio && (
        <>
          <section className="py-16 px-4 sm:px-6 border-y bg-surface border-borderClr">
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                {[
                  { icon: Mic, title: t('feat1Title'), desc: t('feat1Desc') },
                  { icon: Camera, title: t('feat2Title'), desc: t('feat2Desc') },
                  { icon: FileCheck, title: t('feat3Title'), desc: t('feat3Desc') },
                  { icon: ShieldCheck, title: t('feat4Title'), desc: t('feat4Desc') },
                ].map((f, i) => (
                  <motion.div key={i} {...fade} transition={{ ...fade.transition, delay: i * 0.08 }}
                    className="flex flex-col items-center text-center p-5 rounded-card border bg-pageBg border-borderClr"
                  >
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-3 bg-teal/10 text-teal">
                      <f.icon size={24} />
                    </div>
                    <h3 className="font-semibold text-sm mb-1 text-textPrimary">{f.title}</h3>
                    <p className="text-xs leading-relaxed text-textMuted">{f.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-16 md:py-24 px-4 sm:px-6 bg-pageBg">
            <div className="max-w-4xl mx-auto">
              <motion.div {...fade} className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-display font-bold mb-3 text-navy">{t('howItWorks')}</h2>
                <p className="text-textSecondary">{t('howItWorksSub')}</p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    step: '1',
                    title: t('step1Title'),
                    desc: t('step1Desc'),
                    icon: Mic,
                  },
                  {
                    step: '2',
                    title: t('step2Title'),
                    desc: t('step2Desc'),
                    icon: Camera,
                  },
                  {
                    step: '3',
                    title: t('step3Title'),
                    desc: t('step3Desc'),
                    icon: Users,
                  },
                ].map((s, i) => (
                  <motion.div key={i} {...fade} transition={{ ...fade.transition, delay: i * 0.1 }}
                    className="border rounded-card p-6 relative bg-surface border-borderClr"
                  >
                    <div className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mb-4 bg-navy text-surface">
                      {s.step}
                    </div>
                    <h3 className="font-semibold text-xl font-display mb-2 text-textPrimary">{s.title}</h3>
                    <p className="text-sm leading-relaxed text-textSecondary">{s.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {/* ════════ CTA BANNER ════════ */}
      <section className={`py-16 md:py-20 px-4 sm:px-6 text-center border-t ${isPortfolio ? 'bg-[#3047E8] text-white border-[#3047E8]' : 'bg-navy text-white'}`}>
        <div className="max-w-3xl mx-auto">
          <motion.h2 {...fade} className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4 tracking-tight text-white">
            {isPortfolio ? t('ctaBannerTitlePortfolio') : t('ctaBannerTitleGovt')}
          </motion.h2>
          <motion.p {...fade} className="text-white/80 mb-8 text-lg sm:text-xl">
            {t('ctaBannerSub')}
          </motion.p>
          <motion.div {...fade} className="flex justify-center">
            <Link
              to="/self-declaration"
              className={`inline-flex items-center gap-2 font-semibold text-lg transition-colors ${isPortfolio ? 'bg-[#0a0b12] text-white hover:bg-black rounded-full px-10 py-5 shadow-xl' : 'bg-teal hover:bg-teal-light text-white px-8 py-4 rounded-xl'}`}
            >
              {t('beginSelfDeclaration')} <ChevronRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
