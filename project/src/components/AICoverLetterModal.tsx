import { useState, useEffect } from 'react';
import { X, Copy, Check, Sparkles, Loader2, FileText } from 'lucide-react';
import type { Opportunity } from '@/types';

interface AICoverLetterModalProps {
  opportunity: Opportunity | null;
  onClose: () => void;
}

function generateCoverLetter(opp: Opportunity): string {
  const skills = opp.requiredSkills.join(', ');
  return `Hi ${opp.organization} Team, I am Vivek Onkarnath Bharati, a student at PW Institute of Innovation in Hadapsar, Pune. I have a strong foundation in ${skills} and am very interested in the ${opp.title} role. I would love to contribute my skills and learn from your team.`;
}

export default function AICoverLetterModal({ opportunity, onClose }: AICoverLetterModalProps) {
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!opportunity) return;
    setLoading(true);
    setCopied(false);
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, [opportunity]);

  useEffect(() => {
    if (!opportunity) return;
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEsc);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = '';
    };
  }, [opportunity, onClose]);

  if (!opportunity) return null;

  const coverLetter = generateCoverLetter(opportunity);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(coverLetter);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label="AI generated cover letter"
    >
      <div
        className="absolute inset-0 bg-gray-900/50 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative z-10 w-full max-w-lg animate-[fadeIn_0.2s_ease-out] rounded-2xl bg-white shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-100 px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-600 text-white">
              <Sparkles className="h-4 w-4" />
            </div>
            <h2 className="text-base font-semibold text-gray-900">AI Cover Letter</h2>
          </div>
          <button
            onClick={onClose}
            className="rounded-lg p-1.5 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600"
            aria-label="Close modal"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Opportunity summary */}
        <div className="border-b border-gray-100 px-6 py-3">
          <p className="text-xs font-medium text-gray-400">Applying to</p>
          <p className="text-sm font-semibold text-gray-900">{opportunity.title}</p>
          <p className="text-xs text-gray-500">{opportunity.organization}</p>
        </div>

        {/* Body */}
        <div className="px-6 py-5">
          {loading ? (
            <div className="flex flex-col items-center justify-center py-10">
              <Loader2 className="h-10 w-10 animate-spin text-emerald-600" />
              <p className="mt-4 text-sm font-medium text-gray-600">
                Generating your cover letter...
              </p>
              <p className="mt-1 text-xs text-gray-400">
                Tailoring it to {opportunity.organization}
              </p>
            </div>
          ) : (
            <>
              <div className="mb-2 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-gray-400">
                <FileText className="h-3.5 w-3.5" />
                Generated Letter
              </div>
              <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
                <p className="text-sm leading-relaxed text-gray-700">{coverLetter}</p>
              </div>

              <button
                onClick={handleCopy}
                className={`mt-4 flex w-full items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition-all ${
                  copied
                    ? 'bg-emerald-50 text-emerald-700'
                    : 'bg-gray-900 text-white hover:bg-emerald-600'
                }`}
              >
                {copied ? (
                  <>
                    <Check className="h-4 w-4" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4" />
                    Copy to Clipboard
                  </>
                )}
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
