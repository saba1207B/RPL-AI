import { X } from 'lucide-react';
import { useTheme } from '../i18n/ThemeContext';

export default function DemoBanner({ onDismiss }) {
  const { theme } = useTheme();
  const isPortfolio = theme === 'portfolio';

  return (
    <aside
      aria-label="Demo Mode Notice"
      className={`w-full transition-colors duration-200 z-[60] relative ${
        isPortfolio
          ? 'bg-[#F5C518] text-[#0A0B12] border-b border-[#0A0B12]/15 shadow-sm'
          : 'bg-[#0B1528] text-white border-b border-teal/40 shadow-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-2 flex flex-col md:flex-row items-start md:items-center justify-between gap-1.5 sm:gap-4">
        {/* Mobile Header Row (Badge + Dismiss) on small screens, normal flow on md+ */}
        <div className="flex items-center justify-between w-full md:w-auto shrink-0">
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

          {/* Mobile-only dismiss button on top line */}
          <button
            onClick={onDismiss}
            className={`md:hidden px-2 py-0.5 rounded text-[10px] font-mono font-bold tracking-wide transition-all uppercase flex items-center gap-1 ${
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

        {/* Text content */}
        <div className="text-[11px] sm:text-xs leading-snug flex-grow">
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

        {/* Desktop-only dismiss button */}
        <button
          onClick={onDismiss}
          className={`hidden md:flex shrink-0 px-2.5 py-1 rounded text-[10px] font-mono font-bold tracking-wide transition-all uppercase items-center gap-1 ${
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
