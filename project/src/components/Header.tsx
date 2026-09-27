import { useState, useRef, useEffect } from 'react';
import { Radar, LayoutDashboard, User, Bell, Search, X, Sparkles, Clock } from 'lucide-react';

export type View = 'dashboard' | 'profile';

interface HeaderProps {
  currentView: View;
  onViewChange: (view: View) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

const NOTIFICATIONS = [
  {
    id: 1,
    icon: Sparkles,
    iconBg: 'bg-emerald-100 text-emerald-600',
    title: 'High Match: 98% match found for Generative AI & LLMs Workshop',
  },
  {
    id: 2,
    icon: Clock,
    iconBg: 'bg-amber-100 text-amber-600',
    title: 'Deadline approaching: Medhavi Web3 & AI Hackathon registrations close soon',
  },
];

export default function Header({ currentView, onViewChange, searchQuery, onSearchChange }: HeaderProps) {
  const [searchOpen, setSearchOpen] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);
  const searchRef = useRef<HTMLInputElement>(null);
  const notifRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (searchOpen) searchRef.current?.focus();
  }, [searchOpen]);

  useEffect(() => {
    if (!notifOpen) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (notifRef.current && !notifRef.current.contains(e.target as Node)) {
        setNotifOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [notifOpen]);

  return (
    <header className="sticky top-0 z-40 border-b border-gray-200 bg-white/90 backdrop-blur-sm">
      <div className="flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Left: logo + nav */}
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-600 text-white shadow-sm">
              <Radar className="h-5 w-5" />
            </div>
            <span className="hidden text-lg font-bold tracking-tight text-gray-900 sm:block">
              OpportunityRadar
            </span>
          </div>
          <nav className="hidden items-center gap-1 md:flex">
            <NavButton
              icon={<LayoutDashboard className="h-4 w-4" />}
              label="Dashboard"
              active={currentView === 'dashboard'}
              onClick={() => onViewChange('dashboard')}
            />
            <NavButton
              icon={<User className="h-4 w-4" />}
              label="My Profile"
              active={currentView === 'profile'}
              onClick={() => onViewChange('profile')}
            />
          </nav>
        </div>

        {/* Right: search, notifications, avatar */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Search */}
          <div className="relative flex items-center">
            {searchOpen ? (
              <div className="flex items-center rounded-lg border border-gray-300 bg-white shadow-sm">
                <Search className="ml-2.5 h-4 w-4 text-gray-400" />
                <input
                  ref={searchRef}
                  type="text"
                  value={searchQuery}
                  onChange={(e) => onSearchChange(e.target.value)}
                  placeholder="Search opportunities..."
                  className="w-36 rounded-lg bg-transparent py-2 pl-2 pr-2 text-sm text-gray-700 outline-none placeholder:text-gray-400 sm:w-56"
                />
                <button
                  onClick={() => {
                    setSearchOpen(false);
                    onSearchChange('');
                  }}
                  className="mr-1.5 rounded p-1 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            ) : (
              <button
                onClick={() => setSearchOpen(true)}
                className="rounded-lg p-2 text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-700"
              >
                <Search className="h-5 w-5" />
              </button>
            )}
          </div>

          {/* Notifications */}
          <div ref={notifRef} className="relative">
            <button
              onClick={() => setNotifOpen((v) => !v)}
              className="relative rounded-lg p-2 text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-700"
            >
              <Bell className="h-5 w-5" />
              <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-emerald-500 ring-2 ring-white" />
            </button>

            {notifOpen && (
              <div className="absolute right-0 top-full mt-2 w-80 origin-top-right animate-[fadeIn_0.15s_ease-out] overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl">
                <div className="flex items-center justify-between border-b border-gray-100 px-4 py-3">
                  <span className="text-sm font-semibold text-gray-900">Notifications</span>
                  <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-medium text-emerald-700">
                    2 new
                  </span>
                </div>
                <div className="divide-y divide-gray-50">
                  {NOTIFICATIONS.map((n) => {
                    const Icon = n.icon;
                    return (
                      <div key={n.id} className="flex items-start gap-3 px-4 py-3 transition-colors hover:bg-gray-50">
                        <div className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${n.iconBg}`}>
                          <Icon className="h-4 w-4" />
                        </div>
                        <p className="text-sm leading-snug text-gray-600">{n.title}</p>
                      </div>
                    );
                  })}
                </div>
                <div className="border-t border-gray-100 px-4 py-2.5">
                  <button className="text-xs font-medium text-emerald-600 transition-colors hover:text-emerald-700">
                    Mark all as read
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="h-8 w-px bg-gray-200" />

          {/* Avatar */}
          <button
            onClick={() => onViewChange('profile')}
            title="Vivek Bharati - 2nd Year CS, PW IOI Pune"
            className="flex items-center gap-2 rounded-full p-0.5 pr-2 transition-colors hover:bg-gray-100"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 text-sm font-semibold text-white">
              VB
            </div>
            <span className="hidden text-sm font-medium text-gray-700 sm:block">Vivek B.</span>
          </button>
        </div>
      </div>
    </header>
  );
}

function NavButton({
  icon,
  label,
  active,
  onClick,
}: {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
        active ? 'bg-emerald-50 text-emerald-700' : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
      }`}
    >
      {icon}
      {label}
    </button>
  );
}
