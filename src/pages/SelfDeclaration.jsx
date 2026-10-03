import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mic, MicOff, UploadCloud, Camera, Video, FileText, WifiOff,
  ChevronRight, ChevronLeft, ShieldCheck, Sparkles, Globe,
  Zap, Droplets, Flame, Hammer, BrickWall, Scissors, CookingPot, Car, HelpCircle, MapPin,
} from 'lucide-react';
import { LANGS, t } from '../i18n/translations';
import { useLanguage } from '../i18n/LanguageContext';
import { useTheme } from '../i18n/ThemeContext';

const TRADES_CONFIG = [
  { id: 'electrician', icon: Zap, bg: 'bg-amber-100 text-amber-700' },
  { id: 'plumber', icon: Droplets, bg: 'bg-blue-100 text-blue-700' },
  { id: 'welder', icon: Flame, bg: 'bg-orange-100 text-orange-700' },
  { id: 'carpenter', icon: Hammer, bg: 'bg-yellow-100 text-yellow-800' },
  { id: 'mason', icon: BrickWall, bg: 'bg-stone-100 text-stone-700' },
  { id: 'tailor', icon: Scissors, bg: 'bg-pink-100 text-pink-700' },
  { id: 'cook', icon: CookingPot, bg: 'bg-red-100 text-red-700' },
  { id: 'driver', icon: Car, bg: 'bg-indigo-100 text-indigo-700' },
  { id: 'other', icon: HelpCircle, bg: 'bg-gray-100 text-gray-600' },
];

const slide = {
  enter: { opacity: 0, x: 50 },
  center: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -50 },
};

export default function SelfDeclaration() {
  const [step, setStep] = useState(1);
  const [trade, setTrade] = useState('');
  const { lang } = useLanguage();
  const { theme } = useTheme();
  const isPortfolio = theme === 'portfolio';
  const [recording, setRecording] = useState(false);

  const next = () => setStep((s) => Math.min(s + 1, 4));
  const prev = () => setStep((s) => Math.max(s - 1, 1));
  const selectedTrade = TRADES_CONFIG.find((t) => t.id === trade);

  const STEPS = [
    { id: 1, label: t(lang, 'yourTrade') },
    { id: 2, label: t(lang, 'experience') },
    { id: 3, label: t(lang, 'evidence') },
    { id: 4, label: t(lang, 'result') },
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="bg-pageBg min-h-screen pt-32 sm:pt-36 pb-16 px-4 sm:px-6"
    >
      <div className="max-w-2xl mx-auto">

        {/* Header */}
        <div className="flex items-start justify-between mb-6 gap-3">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-textPrimary">{t(lang, 'selfDeclaration')}</h1>
            <p className="text-textSecondary text-sm mt-1">{t(lang, 'selfDeclarationSub')}</p>
          </div>
          <div className="flex items-center gap-1.5 bg-green-50 text-success border border-green-200 px-3 py-1.5 rounded-full text-xs font-semibold shrink-0">
            <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
            {t(lang, 'offlineReady')}
          </div>
        </div>

        {/* Step indicator */}
        <div className="flex items-center gap-1 mb-8" role="progressbar">
          {STEPS.map((s, i) => (
            <div key={s.id} className="flex-1 flex flex-col gap-1.5">
              <div className="flex items-center gap-1">
                <div className={`h-2 flex-1 rounded-full transition-colors duration-300 ${step >= s.id ? (isPortfolio ? 'bg-[#3047E8]' : 'bg-teal') : 'bg-gray-200'}`} />
              </div>
              <div className="flex items-center gap-1.5">
                <span className={`w-6 h-6 rounded-full text-xs flex items-center justify-center font-bold ${
                  step > s.id
                    ? (isPortfolio ? 'bg-[#3047E8] text-white' : 'bg-teal text-white')
                    : step === s.id
                    ? (isPortfolio ? 'bg-[#0a0b12] text-white' : 'bg-navy text-white')
                    : 'bg-gray-200 text-textSecondary'
                }`}>{s.id}</span>
                <span className={`text-xs font-semibold hidden sm:block ${step >= s.id ? 'text-textPrimary' : 'text-textSecondary'}`}>{s.label}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl border border-borderClr shadow-sm min-h-[480px] flex flex-col overflow-hidden">
          <div className="flex-grow p-5 sm:p-8">
            <AnimatePresence mode="wait">

              {/* ──── STEP 1 ──── */}
              {step === 1 && (
                <motion.div key="s1" variants={slide} initial="enter" animate="center" exit="exit" transition={{ duration: 0.25 }}>

                  <h2 className="text-xl font-bold text-textPrimary mb-1">{t(lang, 'whatWork')}</h2>
                  <p className="text-textSecondary text-sm mb-6">{t(lang, 'tapPicture')}</p>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-3">
                    {TRADES_CONFIG.map((tr) => {
                      const Icon = tr.icon;
                      const sel = trade === tr.id;
                      return (
                        <button key={tr.id} onClick={() => setTrade(tr.id)}
                          className={`flex flex-col items-center gap-2 p-3 sm:p-4 rounded-xl border-2 transition-all ${
                            sel ? 'border-teal bg-teal/5 shadow-md' : 'border-borderClr bg-white hover:border-teal/30'
                          }`}
                        >
                          <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl ${tr.bg} flex items-center justify-center`}>
                            <Icon size={24} />
                          </div>
                          <span className="font-bold text-xs sm:text-sm text-textPrimary">{t(lang, tr.id)}</span>
                          {lang !== 'hi' && (
                            <span className="text-[10px] text-textSecondary font-medium">{t('hi', tr.id)}</span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </motion.div>
              )}

              {/* ──── STEP 2 ──── */}
              {step === 2 && (
                <motion.div key="s2" variants={slide} initial="enter" animate="center" exit="exit" transition={{ duration: 0.25 }}>
                  <h2 className="text-xl font-bold text-textPrimary mb-1">{t(lang, 'tellAboutWork')}</h2>
                  <p className="text-textSecondary text-sm mb-8">{t(lang, 'orTypeBelow')}</p>

                  {/* Mic button */}
                  <div className="flex flex-col items-center py-4 mb-8">
                    <button onClick={() => setRecording(!recording)}
                      className={`w-24 h-24 sm:w-28 sm:h-28 rounded-full flex items-center justify-center transition-all ${
                        recording
                          ? 'bg-error text-white mic-pulse'
                          : isPortfolio
                          ? 'bg-[#3047E8] text-white hover:bg-[#2436c4] shadow-lg shadow-[#3047E8]/25'
                          : 'bg-teal text-white hover:bg-teal-dark shadow-lg shadow-teal/25'
                      }`}
                    >
                      {recording ? <MicOff size={36} /> : <Mic size={36} />}
                    </button>
                    <p className="mt-3 font-bold text-textPrimary text-center">
                      {recording ? t(lang, 'listening') : t(lang, 'pressAndSpeak')}
                    </p>
                    <p className="text-textSecondary font-medium text-xs text-center mt-1">{t(lang, 'speakAnyLang')}</p>
                  </div>

                  <div className="space-y-5">
                    <div>
                      <label className="block text-sm font-bold text-textPrimary mb-1.5">{t(lang, 'howManyYears')}</label>
                      <input type="number" placeholder="5"
                        className="w-full sm:w-40 border border-borderClr font-medium text-textPrimary rounded-xl px-4 py-3 text-lg bg-pageBg outline-none focus:border-teal focus:ring-2 focus:ring-teal/20"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-textPrimary mb-1.5">{t(lang, 'whatTools')}</label>
                      <textarea rows={2} placeholder="..."
                        className="w-full border border-borderClr font-medium text-textPrimary rounded-xl px-4 py-3 bg-pageBg outline-none focus:border-teal focus:ring-2 focus:ring-teal/20"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-textPrimary mb-1.5">{t(lang, 'whatKindWork')}</label>
                      <textarea rows={2} placeholder="..."
                        className="w-full border border-borderClr font-medium text-textPrimary rounded-xl px-4 py-3 bg-pageBg outline-none focus:border-teal focus:ring-2 focus:ring-teal/20"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-textPrimary mb-1.5">{t(lang, 'whereWork')}</label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-textSecondary" size={18} />
                        <input type="text" placeholder="..."
                          className="w-full border border-borderClr font-medium text-textPrimary rounded-xl pl-10 pr-4 py-3 bg-pageBg outline-none focus:border-teal focus:ring-2 focus:ring-teal/20"
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* ──── STEP 3 ──── */}
              {step === 3 && (
                <motion.div key="s3" variants={slide} initial="enter" animate="center" exit="exit" transition={{ duration: 0.25 }}>
                  <h2 className="text-xl font-bold text-textPrimary mb-1">{t(lang, 'showYourWork')}</h2>
                  <p className="text-textSecondary text-sm mb-6">{t(lang, 'evidenceSub')}</p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                    {[
                      { icon: Camera, label: t(lang, 'takePhoto'), sub: t(lang, 'takePhotoSub'), color: 'bg-teal/10 text-teal' },
                      { icon: Video, label: t(lang, 'recordVideo'), sub: t(lang, 'recordVideoSub'), color: 'bg-blue-50 text-blue-600' },
                      { icon: FileText, label: t(lang, 'uploadPaper'), sub: t(lang, 'uploadPaperSub'), color: 'bg-amber-50 text-amber-700' },
                    ].map((a, i) => (
                      <button key={i}
                        className="flex flex-col items-center gap-2 bg-white border-2 border-borderClr hover:border-teal rounded-xl p-5 transition-all"
                      >
                        <div className={`w-14 h-14 rounded-xl ${a.color} flex items-center justify-center`}>
                          <a.icon size={28} />
                        </div>
                        <span className="font-bold text-sm text-textPrimary">{a.label}</span>
                        <span className="text-xs font-medium text-textSecondary">{a.sub}</span>
                      </button>
                    ))}
                  </div>

                  <div className="border-2 border-dashed border-borderClr rounded-xl p-8 flex flex-col items-center text-center bg-pageBg cursor-pointer hover:border-teal/40 transition-colors mb-6">
                    <UploadCloud size={32} className="text-slate-400 mb-2" />
                    <p className="font-bold text-textPrimary text-sm">{t(lang, 'dragFiles')}</p>
                    <p className="text-xs font-medium text-textSecondary mt-1">{t(lang, 'fileTypes')}</p>
                  </div>

                  <div className="flex items-start gap-3 bg-green-50 border border-green-200 p-4 rounded-xl">
                    <WifiOff className="text-success shrink-0 mt-0.5" size={20} />
                    <div>
                      <p className="text-sm font-bold text-textPrimary">{t(lang, 'offlineUpload')}</p>
                      <p className="text-xs font-medium text-slate-600 mt-0.5">{t(lang, 'offlineUploadSub')}</p>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* ──── STEP 4 ──── */}
              {step === 4 && (
                <motion.div key="s4" variants={slide} initial="enter" animate="center" exit="exit" transition={{ duration: 0.25 }}>
                  <div className="flex items-center gap-2 mb-6">
                    <Sparkles size={20} className="text-teal" />
                    <h2 className="text-xl font-bold text-textPrimary">{t(lang, 'suggestedMatch')}</h2>
                  </div>

                  <div className="bg-navy text-white rounded-xl p-6 mb-6">
                    <p className="text-xs text-white/50 font-bold uppercase tracking-wider mb-3">{t(lang, 'aiSuggestion')}</p>
                    <div className="flex items-center justify-between gap-4 mb-5">
                      <div className="flex items-center gap-3">
                        {selectedTrade && (
                          <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center">
                            <selectedTrade.icon size={24} />
                          </div>
                        )}
                        <div>
                          <h3 className="text-xl font-bold">{t(lang, selectedTrade?.id || 'electrician')} — Level 4</h3>
                          <p className="text-white/60 font-medium text-sm">NSQF Level 4 • ELE/Q3102</p>
                        </div>
                      </div>
                      <div className="text-right shrink-0">
                        <div className="text-3xl font-bold text-teal-light">87%</div>
                        <div className="text-white/60 font-medium text-xs">{t(lang, 'match')}</div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      {[
                        { label: t(lang, 'performBasicWork'), pct: 90, color: 'bg-green-400' },
                        { label: t(lang, 'readDrawings'), pct: 65, color: 'bg-amber-400' },
                        { label: t(lang, 'followSafety'), pct: 85, color: 'bg-green-400' },
                      ].map((n, i) => (
                        <div key={i}>
                          <div className="flex justify-between text-sm mb-1">
                            <span className="text-white/90 font-medium">{n.label}</span>
                            <span className="font-bold">{n.pct}%</span>
                          </div>
                          <div className="w-full bg-white/10 rounded-full h-1.5">
                            <div className={`${n.color} h-1.5 rounded-full`} style={{ width: `${n.pct}%` }} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-amber-50 border-2 border-amber-200 rounded-xl p-5 flex gap-3">
                    <ShieldCheck className="text-warning shrink-0 mt-0.5" size={24} />
                    <div>
                      <p className="font-bold text-textPrimary">{t(lang, 'humanReview')}</p>
                      <p className="text-sm font-medium text-slate-700 mt-1 leading-relaxed">
                        {t(lang, 'humanReviewSub')}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}

            </AnimatePresence>
          </div>

          {/* Nav buttons */}
          <div className="px-5 sm:px-8 py-5 border-t border-borderClr flex items-center justify-between bg-pageBg/50">
            <button onClick={prev}
              className={`flex items-center gap-1.5 px-5 py-3 rounded-xl font-bold text-sm transition-colors ${
                step === 1 ? 'invisible' : 'text-slate-600 hover:bg-gray-200'
              }`}
            >
              <ChevronLeft size={18} /> {t(lang, 'back')}
            </button>
            <span className="text-xs text-textSecondary font-bold uppercase tracking-wider">{t(lang, 'step')} {step} {t(lang, 'of')} 4</span>
            <button onClick={next}
              className={`flex items-center gap-1.5 ${
                isPortfolio
                  ? 'bg-[#0a0b12] hover:bg-black text-white shadow-md'
                  : 'bg-teal hover:bg-teal-dark text-white shadow-sm'
              } px-6 py-3 rounded-xl font-bold text-sm transition-colors`}
            >
              {step === 4 ? t(lang, 'submit') : t(lang, 'next')} <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

