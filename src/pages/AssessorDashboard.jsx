import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search, ChevronDown, Check, X, Minus, PlayCircle,
  Image as ImageIcon, AlertTriangle, Zap, Droplets, Scissors,
} from 'lucide-react';
import clsx from 'clsx';
import { useLanguage } from '../i18n/LanguageContext';

const CANDIDATES = [
  { id: 1, name: 'Ramesh K.', trade: 'Construction Welder', qp: 'ELE/Q3102', level: 4, confidence: 87, date: 'Today, 10:30 AM', icon: Zap },
  { id: 2, name: 'Suresh M.', trade: 'Plumber', qp: 'PCS/Q0108', level: 3, confidence: 92, date: 'Today, 09:15 AM', icon: Droplets },
  { id: 3, name: 'Anita D.', trade: 'Tailor', qp: 'AMH/Q0301', level: 4, confidence: 45, date: 'Yesterday', icon: Scissors },
];

function Badge({ value }) {
  const c = value > 80 ? 'text-green-400 bg-green-500/10 border-green-500/20' : value > 60 ? 'text-amber-400 bg-amber-500/10 border-amber-500/20' : 'text-red-400 bg-red-500/10 border-red-500/20';
  return <span className={clsx('text-xs font-semibold px-2 py-0.5 rounded-full border', c)}>{value}%</span>;
}

function ScoreButtons() {
  const [sel, setSel] = useState(null);
  const { t } = useLanguage();
  return (
    <div className="flex rounded-lg border border-white/10 overflow-hidden">
      {[
        { key: 'yes', label: t('yes'), icon: Check, active: 'bg-green-600 text-white border-green-600' },
        { key: 'partial', label: t('partial'), icon: Minus, active: 'bg-amber-600 text-white border-amber-600' },
        { key: 'no', label: t('no'), icon: X, active: 'bg-red-600 text-white border-red-600' },
      ].map((b) => (
        <button key={b.key} onClick={() => setSel(b.key)}
          className={clsx(
            'flex items-center gap-1 px-3 py-2 text-xs font-semibold border-r border-white/10 last:border-r-0 transition-all',
            sel === b.key ? b.active : 'bg-[#242424] text-white/70 hover:bg-white/10'
          )}
        >
          <b.icon size={14} /> {b.label}
        </button>
      ))}
    </div>
  );
}

export default function AssessorDashboard() {
  const [selId, setSelId] = useState(1);
  const [expanded, setExpanded] = useState(1);
  const [mobileTab, setMobileTab] = useState('eval'); // 'list' | 'eval'
  const { t } = useLanguage();
  const candidate = CANDIDATES.find((c) => c.id === selId);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="bg-charcoal text-white min-h-screen pt-28 sm:pt-32 flex flex-col md:flex-row h-screen overflow-hidden font-body"
    >
      {/* Mobile Tab Switcher (visible only on mobile) */}
      <div className="md:hidden flex border-b border-white/10 bg-[#161616] p-2 gap-2 shrink-0">
        <button
          onClick={() => setMobileTab('list')}
          className={clsx(
            'flex-1 py-2 px-3 text-xs font-mono font-bold rounded-lg transition-colors flex items-center justify-center gap-1.5',
            mobileTab === 'list'
              ? 'bg-white/15 text-white border border-white/20'
              : 'text-white/60 hover:text-white bg-transparent'
          )}
        >
          <span>👥 Candidates ({CANDIDATES.length})</span>
        </button>
        <button
          onClick={() => setMobileTab('eval')}
          className={clsx(
            'flex-1 py-2 px-3 text-xs font-mono font-bold rounded-lg transition-colors flex items-center justify-center gap-1.5',
            mobileTab === 'eval'
              ? 'bg-accent text-dark font-black shadow-sm'
              : 'text-white/60 hover:text-white bg-transparent'
          )}
        >
          <span>📋 {candidate ? candidate.name : 'Evaluation'}</span>
        </button>
      </div>

      {/* ═══ Left Panel ═══ */}
      <div className={clsx(
        "w-full md:w-80 lg:w-96 bg-[#121212] border-r border-white/10 flex flex-col shrink-0",
        mobileTab !== 'list' && 'hidden md:flex'
      )}>
        <div className="p-4 border-b border-white/10">
          <h2 className="font-bold text-white text-lg mb-3">{t('pendingReview')}</h2>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" size={16} />
            <input type="text" placeholder={t('searchCandidate')}
              className="w-full border border-white/10 rounded-xl pl-9 pr-4 py-2.5 text-sm bg-white/5 text-white outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 placeholder-white/30"
            />
          </div>
        </div>

        <div className="flex-grow overflow-y-auto p-3 flex flex-col gap-2">
          {CANDIDATES.map((c) => {
            const Icon = c.icon;
            return (
              <button key={c.id} onClick={() => { setSelId(c.id); setMobileTab('eval'); }}
                className={clsx(
                  'p-4 rounded-xl text-left transition-all border',
                  selId === c.id ? 'bg-accent/10 border-accent' : 'bg-[#242424] border-white/5 hover:border-white/20'
                )}
              >
                <div className="flex items-start justify-between mb-1">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-white/5 text-accent flex items-center justify-center">
                      <Icon size={16} />
                    </div>
                    <span className="font-semibold text-sm text-white">{c.name}</span>
                  </div>
                  <Badge value={c.confidence} />
                </div>
                <p className="text-xs text-white/50 ml-10 font-mono">{c.trade}</p>
                <p className="text-[10px] text-white/30 ml-10 mt-1">{c.date}</p>
              </button>
            );
          })}
        </div>
      </div>

      {/* ═══ Right Panel ═══ */}
      <div className={clsx(
        "flex-grow flex flex-col overflow-hidden bg-charcoal",
        mobileTab !== 'eval' && 'hidden md:flex'
      )}>

        {/* Disclaimer banner */}
        <div className="bg-amber-900/30 border-b border-amber-900/50 px-5 py-2.5 flex items-center gap-2.5 text-amber-500 text-sm font-semibold shrink-0">
          <AlertTriangle size={16} />
          {t('aiDisclaimer')}
        </div>

        <div className="flex-grow overflow-y-auto">
          <div className="p-5 md:p-8 max-w-4xl mx-auto w-full">

            {/* Candidate header */}
            {candidate && (
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-8">
                <div>
                  <p className="text-xs text-accent font-mono uppercase tracking-wider mb-1">{t('candidateId')} · RPL-2024-884{candidate.id}</p>
                  <h1 className="text-2xl sm:text-3xl font-bold font-display text-white mb-1">{candidate.name}</h1>
                  <p className="text-white/60 text-sm font-mono">{candidate.trade} ({candidate.qp}) · {t('nsqfLevel')} {candidate.level}</p>
                </div>
                <div className="flex gap-2">
                  <button className="flex items-center gap-1.5 bg-[#242424] border border-white/10 rounded-xl px-4 py-2.5 text-sm font-medium hover:bg-white/10">
                    <ImageIcon size={16} className="text-white/50" /> 4 {t('photos')}
                  </button>
                  <button className="flex items-center gap-1.5 bg-[#242424] border border-white/10 rounded-xl px-4 py-2.5 text-sm font-medium hover:bg-white/10">
                    <PlayCircle size={16} className="text-accent" /> <span className="text-accent font-semibold">1 {t('video')}</span>
                  </button>
                </div>
              </div>
            )}

            {/* NOS Sections */}
            <div className="flex flex-col gap-3 mb-8">

              {/* NOS 1 */}
              <div className="bg-[#242424] rounded-xl border border-white/10 overflow-hidden">
                <button onClick={() => setExpanded(expanded === 1 ? null : 1)}
                  className="w-full p-5 flex justify-between items-center hover:bg-white/5 transition-colors"
                >
                  <div className="text-left">
                    <p className="text-[11px] text-white/50 font-mono mb-0.5">NOS: ELE/N3105</p>
                    <h3 className="font-semibold text-white">Perform welding using SMAW</h3>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right hidden sm:block">
                      <p className="text-[10px] text-white/40 font-mono uppercase">{t('aiSuggestion')}</p>
                      <p className="text-sm font-semibold text-green-400">{t('competent')} (90%)</p>
                    </div>
                    <ChevronDown size={20} className={clsx('text-white/40 transition-transform', expanded === 1 && 'rotate-180')} />
                  </div>
                </button>

                <AnimatePresence>
                  {expanded === 1 && (
                    <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} className="overflow-hidden border-t border-white/10">
                      <div className="p-5 space-y-5">
                        {[
                          { pc: 'PC1. Ensure welding machine is properly grounded and cables are intact.', ai: 'High match from video evidence (0:12s)', aiColor: 'text-green-400' },
                          { pc: 'PC2. Maintain correct arc length and travel speed.', ai: 'Moderate match — needs manual check', aiColor: 'text-amber-400' },
                          { pc: 'PC3. Select correct electrode type for the material.', ai: 'Mentioned in voice: "7018 rod"', aiColor: 'text-green-400' },
                        ].map((c, i) => (
                          <div key={i} className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-3 pb-4 border-b border-white/10 last:border-b-0 last:pb-0">
                            <div className="max-w-lg">
                              <p className="text-sm text-white/90">{c.pc}</p>
                              <p className={clsx('text-xs mt-1 font-medium font-mono', c.aiColor)}>💡 AI: {c.ai}</p>
                            </div>
                            <ScoreButtons />
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* NOS 2 */}
              <div className="bg-[#242424] rounded-xl border border-white/10 overflow-hidden">
                <button onClick={() => setExpanded(expanded === 2 ? null : 2)}
                  className="w-full p-5 flex justify-between items-center hover:bg-white/5 transition-colors"
                >
                  <div className="text-left">
                    <p className="text-[11px] text-white/50 font-mono mb-0.5">NOS: ELE/N3108</p>
                    <h3 className="font-semibold text-white">Maintain health and safety at work</h3>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right hidden sm:block">
                      <p className="text-[10px] text-white/40 font-mono uppercase">{t('aiSuggestion')}</p>
                      <p className="text-sm font-semibold text-amber-400">{t('needsReview')} (65%)</p>
                    </div>
                    <ChevronDown size={20} className={clsx('text-white/40 transition-transform', expanded === 2 && 'rotate-180')} />
                  </div>
                </button>
                <AnimatePresence>
                  {expanded === 2 && (
                    <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} className="overflow-hidden border-t border-white/10">
                      <div className="p-5">
                        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-3">
                          <div className="max-w-lg">
                            <p className="text-sm text-white/90">PC1. Use appropriate PPE (gloves, helmet, apron).</p>
                            <p className="text-xs mt-1 font-medium font-mono text-amber-400">💡 AI: PPE partially visible in photo evidence</p>
                          </div>
                          <ScoreButtons />
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* NOS 3 */}
              <div className="bg-[#242424] rounded-xl border border-white/10">
                <button className="w-full p-5 flex justify-between items-center hover:bg-white/5 transition-colors">
                  <div className="text-left">
                    <p className="text-[11px] text-white/50 font-mono mb-0.5">NOS: ELE/N9903</p>
                    <h3 className="font-semibold text-white">Read and interpret basic engineering drawings</h3>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right hidden sm:block">
                      <p className="text-[10px] text-white/40 font-mono uppercase">{t('aiSuggestion')}</p>
                      <p className="text-sm font-semibold text-red-400">{t('lowMatch')} (40%)</p>
                    </div>
                    <ChevronDown size={20} className="text-white/40" />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Action bar */}
        <div className="bg-[#121212] border-t border-white/10 px-4 sm:px-5 py-3 sm:py-4 flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-2.5 sm:gap-3 shrink-0">
          <button className="text-white/50 hover:text-white font-semibold text-xs sm:text-sm underline underline-offset-4 text-center sm:text-left">{t('saveDraft')}</button>
          <div className="flex gap-2 flex-wrap sm:flex-nowrap">
            <button className="flex-1 sm:flex-initial px-3 sm:px-4 py-2.5 bg-transparent border-2 border-red-500/50 text-red-400 hover:bg-red-500/10 rounded-xl font-semibold text-xs sm:text-sm transition-colors text-center">
              {t('notYetCompetent')}
            </button>
            <button className="flex-1 sm:flex-initial px-3 sm:px-4 py-2.5 bg-transparent border-2 border-white/20 text-white/70 hover:bg-white/10 rounded-xl font-semibold text-xs sm:text-sm transition-colors text-center">
              {t('requestEvidence')}
            </button>
            <button className="w-full sm:w-auto px-5 sm:px-6 py-2.5 bg-accent hover:bg-accent-light text-charcoal rounded-xl font-semibold text-xs sm:text-sm transition-colors text-center font-display font-bold">
              {t('recommendCert')}
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
