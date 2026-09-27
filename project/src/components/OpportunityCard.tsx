import { Sparkles, ArrowRight, FileText } from 'lucide-react';
import type { Opportunity } from '@/types';

const TYPE_STYLES: Record<string, string> = {
  Internship: 'bg-blue-50 text-blue-700 border-blue-200',
  Hackathon: 'bg-amber-50 text-amber-700 border-amber-200',
  'Online Workshop': 'bg-purple-50 text-purple-700 border-purple-200',
  Meetup: 'bg-rose-50 text-rose-700 border-rose-200',
  Mentorship: 'bg-teal-50 text-teal-700 border-teal-200',
  'Part-Time Job': 'bg-indigo-50 text-indigo-700 border-indigo-200',
};

interface OpportunityCardProps {
  opportunity: Opportunity;
  onApply: (opportunity: Opportunity) => void;
}

export default function OpportunityCard({ opportunity, onApply }: OpportunityCardProps) {
  const { title, organization, matchScore, requiredSkills, type, description } = opportunity;

  return (
    <div className="group flex flex-col rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:border-gray-300">
      <div className="mb-3 flex items-start justify-between gap-3">
        <span className={`rounded-full border px-2.5 py-0.5 text-xs font-medium ${TYPE_STYLES[type] ?? 'bg-gray-50 text-gray-700 border-gray-200'}`}>
          {type}
        </span>
        <div className="flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          <span className="text-xs font-bold text-emerald-700">{matchScore}% Match</span>
        </div>
      </div>

      <h3 className="mb-1 text-base font-semibold leading-snug text-gray-900 transition-colors group-hover:text-emerald-700">
        {title}
      </h3>
      <p className="mb-3 text-sm font-medium text-gray-500">{organization}</p>

      <div className="mb-3 flex flex-wrap gap-1.5">
        {requiredSkills.map((skill) => (
          <span
            key={skill}
            className="rounded-md bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-600"
          >
            {skill}
          </span>
        ))}
      </div>

      <p className="mb-4 flex items-start gap-1.5 text-xs leading-relaxed text-gray-400">
        <FileText className="mt-0.5 h-3.5 w-3.5 shrink-0" />
        {description}
      </p>

      <button
        onClick={() => onApply(opportunity)}
        className="mt-auto flex items-center justify-center gap-2 rounded-xl bg-gray-900 px-4 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-emerald-600 group-hover:bg-emerald-600"
      >
        <Sparkles className="h-4 w-4" />
        Apply with AI
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      </button>
    </div>
  );
}
