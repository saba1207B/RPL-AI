import { useState, useEffect } from 'react';
import { AlertCircle, ChevronDown, X, Info } from 'lucide-react';
import { useTheme } from '../i18n/ThemeContext';

export default function DemoBanner() {
  const { theme } = useTheme();
  const isPortfolio = theme === 'portfolio';

  const [dismissed, setDismissed] = useState(() => {
    try {
      return sessionStorage.getItem('demo_banner_dismissed') === 'true';
    } catch {
      return false;
    }
  });

  const handleDismiss = () => {
    setDismissed(true);
    try {
      sessionStorage.setItem('demo_banner_dismissed', 'true');
    } catch {}
  };

  const handleRestore = () => {
    setDismissed(false);
    try {
      sessionStorage.removeItem('demo_banner_dismissed');
    } catch {}
  };

  if (dismissed) {
    return (
      <div className="fixed top-2 right-4 z-[60]">
        <button
          onClick={handleRestore}
          className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider shadow-lg transition-all border ${
            isPortfolio
              ? 'bg-[#F5C518] text-[#0A0B12] border-[#0A0B12]/20 hover:scale-105'
              : 'bg-[#0B1528] text-teal-light border-teal/40 hover:bg-navy hover:scale-105'
          }`}
          title="Click to view Demo Mode details"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
          <span>DEMO MODE</span>
          <ChevronDown size={12} />
        </button>
      </div>
    );
  }

  return (
    <aside
      aria-label="Demo Mode Notice"
      className={`w-full transition-colors duration-200 z-[60] relative ${
        isPortfolio
          ? 'bg-[#F5C518] text-[#0A0B12] border-b border-[#0A0B12]/15 shadow-sm'
          : 'bg-[#0B1528] text-white border-b border-teal/40 shadow-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-2 flex flex-col md:flex-row items-start md:items-center justify-between gap-2.5 sm:gap-4">
        {/* Left: Badge + Description */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 flex-grow">
          {/* Badge */}
          <div className="flex items-center gap-2 shrink-0">
            <span
              className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded font-mono font-black text-[10px] tracking-widest uppercase ${
                isPortfolio
                  ? 'bg-[#0A0B12] text-[#F5C518]'
                  : 'bg-teal text-white shadow-sm'
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping inline-block" />
              DEMO MODE
            </span>
          </div>

          {/* Text content */}
          <div className="text-[11px] sm:text-xs leading-snug">
            <span className="font-bold">This is a functional frontend demonstration.</span>{' '}
            <span className={isPortfolio ? 'text-[#0A0B12]/85' : 'text-white/80'}>
              AI endpoints (NSQF mapping, voice analysis, video scoring) are not connected because the live environment has GPU restrictions. All AI results shown are simulated for demonstration purposes.
            </span>{' '}
            <span className={`font-semibold underline decoration-dotted decoration-1 underline-offset-2 ${
              isPortfolio ? 'text-[#0A0B12]' : 'text-teal-light'
            }`}>
              Human assessor final decision flow is fully interactive.
            </span>
          </div>
        </div>

        {/* Right: Small Understood dismiss button */}
        <button
          onClick={handleDismiss}
          className={`shrink-0 self-end sm:self-center px-2.5 py-1 rounded text-[10px] font-mono font-bold tracking-wide transition-all uppercase flex items-center gap-1 ${
            isPortfolio
              ? 'bg-[#0A0B12]/10 hover:bg-[#0A0B12] hover:text-[#F5C518] text-[#0A0B12] border border-[#0A0B12]/20'
              : 'bg-white/10 hover:bg-teal hover:text-white text-white border border-white/20'
          }`}
          title="Dismiss this notice"
          aria-label="Dismiss Demo Notice"
        >
          <span>Understood</span>
          <X size={12} />
        </button>
      </div>
    </aside>
  );
}
