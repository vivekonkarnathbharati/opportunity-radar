import { Radar, LayoutDashboard, User, Bell, Search } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-gray-200 bg-white/90 backdrop-blur-sm">
      <div className="flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-600 text-white shadow-sm">
              <Radar className="h-5 w-5" />
            </div>
            <span className="text-lg font-bold tracking-tight text-gray-900">
              OpportunityRadar
            </span>
          </div>
          <nav className="hidden items-center gap-1 md:flex">
            <NavButton icon={<LayoutDashboard className="h-4 w-4" />} label="Dashboard" active />
            <NavButton icon={<User className="h-4 w-4" />} label="My Profile" />
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <button className="hidden rounded-lg p-2 text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-700 sm:block">
            <Search className="h-5 w-5" />
          </button>
          <button className="relative rounded-lg p-2 text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-700">
            <Bell className="h-5 w-5" />
            <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-emerald-500 ring-2 ring-white" />
          </button>
          <div className="h-8 w-px bg-gray-200" />
          <button className="flex items-center gap-2 rounded-full p-0.5 pr-2 transition-colors hover:bg-gray-100">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 text-sm font-semibold text-white">
              JD
            </div>
            <span className="hidden text-sm font-medium text-gray-700 sm:block">John D.</span>
          </button>
        </div>
      </div>
    </header>
  );
}

function NavButton({ icon, label, active }: { icon: React.ReactNode; label: string; active?: boolean }) {
  return (
    <button
      className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
        active ? 'bg-emerald-50 text-emerald-700' : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
      }`}
    >
      {icon}
      {label}
    </button>
  );
}
