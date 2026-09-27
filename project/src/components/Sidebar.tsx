import { SlidersHorizontal } from 'lucide-react';
import { useMemo } from 'react';
import { OPPORTUNITIES } from '@/data';

interface FilterState {
  skills: string[];
  types: string[];
}

interface SidebarProps {
  filters: FilterState;
  onSkillToggle: (skill: string) => void;
  onTypeToggle: (type: string) => void;
  onClear: () => void;
  resultCount: number;
}

export default function Sidebar({
  filters,
  onSkillToggle,
  onTypeToggle,
  onClear,
  resultCount,
}: SidebarProps) {
  const { allSkills, allTypes } = useMemo(() => {
    const skills = new Set<string>();
    const types = new Set<string>();
    for (const opp of OPPORTUNITIES) {
      for (const s of opp.requiredSkills) skills.add(s);
      types.add(opp.type);
    }
    return { allSkills: [...skills].sort(), allTypes: [...types].sort() };
  }, []);

  const hasFilters = filters.skills.length > 0 || filters.types.length > 0;

  return (
    <aside className="w-full shrink-0 lg:w-72">
      <div className="sticky top-20 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <SlidersHorizontal className="h-4 w-4 text-gray-500" />
            <h2 className="text-sm font-semibold text-gray-900">Filters</h2>
          </div>
          {hasFilters && (
            <button
              onClick={onClear}
              className="text-xs font-medium text-emerald-600 transition-colors hover:text-emerald-700"
            >
              Clear all
            </button>
          )}
        </div>

        <FilterGroup title="Skills">
          {allSkills.map((skill) => (
            <Checkbox
              key={skill}
              label={skill}
              checked={filters.skills.includes(skill)}
              onChange={() => onSkillToggle(skill)}
            />
          ))}
        </FilterGroup>

        <div className="my-4 h-px bg-gray-100" />

        <FilterGroup title="Opportunity Type">
          {allTypes.map((type) => (
            <Checkbox
              key={type}
              label={type}
              checked={filters.types.includes(type)}
              onChange={() => onTypeToggle(type)}
            />
          ))}
        </FilterGroup>

        <div className="mt-5 rounded-xl bg-emerald-50 px-4 py-3">
          <p className="text-xs text-emerald-700">
            <span className="text-base font-bold">{resultCount}</span> opportunities found
          </p>
        </div>
      </div>
    </aside>
  );
}

function FilterGroup({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="mb-2.5 text-xs font-semibold uppercase tracking-wider text-gray-400">
        {title}
      </h3>
      <div className="space-y-1">{children}</div>
    </div>
  );
}

function Checkbox({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: () => void;
}) {
  return (
    <label className="flex cursor-pointer items-center gap-2.5 rounded-lg px-2 py-1.5 transition-colors hover:bg-gray-50">
      <span
        className={`flex items-center justify-center rounded-[5px] border transition-all ${
          checked
            ? 'border-emerald-600 bg-emerald-600'
            : 'border-gray-300 bg-white'
        }`}
        style={{ width: 18, height: 18 }}
      >
        {checked && (
          <svg className="h-3 w-3 text-white" viewBox="0 0 12 12" fill="none">
            <path
              d="M2.5 6L5 8.5L9.5 4"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </span>
      <input type="checkbox" checked={checked} onChange={onChange} className="sr-only" />
      <span className={`text-sm transition-colors ${checked ? 'font-medium text-gray-900' : 'text-gray-600'}`}>
        {label}
      </span>
    </label>
  );
}
