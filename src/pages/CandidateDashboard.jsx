import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  PlusCircle, UploadCloud, Award, Clock, AlertCircle,
  CheckCircle2, Wifi, WifiOff, ChevronRight,
} from 'lucide-react';
import { useTheme } from '../i18n/ThemeContext';
import { useLanguage } from '../i18n/LanguageContext';

export default function CandidateDashboard() {
  const { theme } = useTheme();
  const { t } = useLanguage();
  const isPortfolio = theme === 'portfolio';

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="bg-pageBg min-h-screen pt-32 sm:pt-36 pb-16 px-4 sm:px-6"
    >
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-8">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-navy">{t('welcomeCandidate')}</h1>
            <p className="text-textMuted text-sm mt-1">{t('candidateId')}</p>
          </div>
          <div className="flex items-center gap-1.5 bg-green-50 text-success border border-green-200 px-3 py-1.5 rounded-full text-xs font-semibold">
            <Wifi size={14} />
            <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
            {t('allSynced')}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          <Link to="/self-declaration"
            className={`bg-white p-5 rounded-xl border border-borderClr hover:shadow-md transition-all group ${
              isPortfolio ? 'hover:border-[#3047E8]' : 'hover:border-teal'
            }`}
          >
            <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform ${
              isPortfolio ? 'bg-[#3047E8]/10 text-[#3047E8]' : 'bg-teal/10 text-teal'
            }`}>
              <PlusCircle size={22} />
            </div>
            <h3 className="font-semibold text-textPrimary mb-0.5">{t('newDeclaration')}</h3>
            <p className="text-xs text-textMuted">{t('newDeclarationSub')}</p>
          </Link>

          <button className={`bg-white p-5 rounded-xl border border-borderClr hover:shadow-md transition-all group text-left ${
            isPortfolio ? 'hover:border-[#3047E8]' : 'hover:border-teal'
          }`}>
            <div className="w-11 h-11 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <UploadCloud size={22} />
            </div>
            <h3 className="font-semibold text-textPrimary mb-0.5">{t('uploadEvidence')}</h3>
            <p className="text-xs text-textMuted">{t('uploadEvidenceSub')}</p>
          </button>

          <button className="bg-navy text-white p-5 rounded-xl border border-navy hover:shadow-lg transition-all group text-left">
            <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <Award size={22} className="text-teal-light" />
            </div>
            <h3 className="font-semibold text-teal-light mb-0.5">{t('viewCertificate')}</h3>
            <p className="text-xs text-white/50">{t('viewCertificateSub')}</p>
          </button>
        </div>

        {/* Applications */}
        <h2 className="text-lg font-bold text-navy mb-4">{t('yourApplications')}</h2>
        <div className="flex flex-col gap-3">

          {/* Under Review */}
          <div className="bg-white rounded-xl border border-borderClr p-5">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div className="flex-grow">
                <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                  <h3 className="font-semibold">{t('welder')}</h3>
                  <span className="bg-amber-50 text-amber-700 border border-amber-200 text-xs font-semibold px-2.5 py-0.5 rounded-full flex items-center gap-1">
                    <Clock size={12} /> {t('underReview')}
                  </span>
                </div>
                <p className="text-xs text-textMuted mb-3">{t('nsqfLevel')} 4 · {t('submittedAgo')}</p>
                <div className="w-full max-w-sm bg-gray-100 rounded-full h-2 mb-1">
                  <div className={`${isPortfolio ? 'bg-[#3047E8]' : 'bg-teal'} h-2 rounded-full transition-all`} style={{ width: '60%' }} />
                </div>
                <p className="text-[11px] text-textMuted">{t('assessorReviewing')}</p>
              </div>
              <button className="px-4 py-2.5 border border-borderClr rounded-xl text-sm font-semibold hover:bg-gray-50 flex items-center gap-1 shrink-0">
                {t('details')} <ChevronRight size={16} />
              </button>
            </div>
          </div>

          {/* Needs Info */}
          <div className="bg-white rounded-xl border-2 border-red-200 p-5">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div className="flex-grow">
                <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                  <h3 className="font-semibold">{t('electrician')}</h3>
                  <span className="bg-red-50 text-red-700 border border-red-200 text-xs font-semibold px-2.5 py-0.5 rounded-full flex items-center gap-1">
                    <AlertCircle size={12} /> {t('needMoreInfo')}
                  </span>
                </div>
                <p className="text-xs text-textMuted mb-2">{t('nsqfLevel')} 3 · 5 days ago</p>
                <p className="text-sm text-red-700 bg-red-50 border border-red-100 p-3 rounded-lg">
                  {t('needClearerVideo')}
                </p>
              </div>
              <button className="px-4 py-2.5 bg-navy text-white rounded-xl text-sm font-semibold hover:bg-navy-dark shrink-0">
                {t('uploadNow')}
              </button>
            </div>
          </div>

          {/* Certified */}
          <div className="bg-white rounded-xl border border-green-200 p-5">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div className="flex-grow">
                <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                  <h3 className="font-semibold">{t('mason')}</h3>
                  <span className="bg-green-50 text-success border border-green-200 text-xs font-semibold px-2.5 py-0.5 rounded-full flex items-center gap-1">
                    <CheckCircle2 size={12} /> {t('certified')}
                  </span>
                </div>
                <p className="text-xs text-textMuted">{t('nsqfLevel')} 2 · Oct 2023</p>
              </div>
              <button className={`${isPortfolio ? 'text-[#3047E8]' : 'text-teal'} font-semibold text-sm hover:underline shrink-0`}>
                {t('downloadPdf')}
              </button>
            </div>
          </div>
        </div>

        {/* Offline notice */}
        <div className="mt-8 bg-white border border-borderClr rounded-xl p-5 flex items-start gap-3">
          <WifiOff className="text-textMuted shrink-0 mt-0.5" size={20} />
          <div>
            <p className="font-semibold text-textPrimary text-sm">{t('worksWithoutInternet')}</p>
            <p className="text-xs text-textMuted mt-0.5">{t('worksWithoutInternetSub')}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
