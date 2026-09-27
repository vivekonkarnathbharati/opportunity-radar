import { useState, useMemo } from 'react';
import { Target } from 'lucide-react';
import Header from '@/components/Header';
import type { View } from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import OpportunityCard from '@/components/OpportunityCard';
import AICoverLetterModal from '@/components/AICoverLetterModal';
import ProfilePage from '@/components/ProfilePage';
import { OPPORTUNITIES } from '@/data';
import type { Opportunity } from '@/types';

export default function App() {
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [modalOpportunity, setModalOpportunity] = useState<Opportunity | null>(null);
  const [currentView, setCurrentView] = useState<View>('dashboard');
  const [searchQuery, setSearchQuery] = useState('');

  const toggleSkill = (skill: string) =>
    setSelectedSkills((prev) =>
      prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill]
    );

  const toggleType = (type: string) =>
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );

  const clearAll = () => {
    setSelectedSkills([]);
    setSelectedTypes([]);
  };

  const filtered = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return OPPORTUNITIES.filter((opp) => {
      const skillMatch =
        selectedSkills.length === 0 ||
        selectedSkills.some((s) => opp.requiredSkills.includes(s));
      const typeMatch =
        selectedTypes.length === 0 || selectedTypes.includes(opp.type);
      const searchMatch =
        q === '' ||
        opp.title.toLowerCase().includes(q) ||
        opp.organization.toLowerCase().includes(q) ||
        opp.requiredSkills.some((s) => s.toLowerCase().includes(q));
      return skillMatch && typeMatch && searchMatch;
    }).sort((a, b) => b.matchScore - a.matchScore);
  }, [selectedSkills, selectedTypes, searchQuery]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        currentView={currentView}
        onViewChange={setCurrentView}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      {currentView === 'profile' ? (
        <ProfilePage onBack={() => setCurrentView('dashboard')} />
      ) : (
        <>
          {/* Hero banner */}
          <div className="border-b border-gray-200 bg-gradient-to-br from-white to-emerald-50/50">
            <div className="px-4 py-6 sm:px-6 lg:px-8">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-600 text-white shadow-md">
                  <Target className="h-6 w-6" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-900 sm:text-2xl">
                    Find Your Perfect Opportunity
                  </h1>
                  <p className="text-sm text-gray-500">
                    AI-matched internships, hackathons, and workshops tailored to your skills.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6 px-4 py-6 sm:px-6 lg:flex-row lg:px-8">
            <Sidebar
              filters={{ skills: selectedSkills, types: selectedTypes }}
              onSkillToggle={toggleSkill}
              onTypeToggle={toggleType}
              onClear={clearAll}
              resultCount={filtered.length}
            />

            <main className="flex-1">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-sm font-semibold text-gray-700">
                  Recommended for you
                </h2>
                <span className="text-xs text-gray-400">
                  Sorted by match score
                </span>
              </div>

              {filtered.length > 0 ? (
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
                  {filtered.map((opp) => (
                    <OpportunityCard key={opp.id} opportunity={opp} onApply={setModalOpportunity} />
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-gray-300 bg-white py-20 text-center">
                  <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-gray-100">
                    <Target className="h-7 w-7 text-gray-400" />
                  </div>
                  <h3 className="mb-1 text-base font-semibold text-gray-700">No matches found</h3>
                  <p className="mb-4 text-sm text-gray-400">
                    Try adjusting your filters or search query.
                  </p>
                  <button
                    onClick={() => {
                      clearAll();
                      setSearchQuery('');
                    }}
                    className="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-emerald-700"
                  >
                    Clear all
                  </button>
                </div>
              )}
            </main>
          </div>
        </>
      )}

      <AICoverLetterModal
        opportunity={modalOpportunity}
        onClose={() => setModalOpportunity(null)}
      />
    </div>
  );
}
