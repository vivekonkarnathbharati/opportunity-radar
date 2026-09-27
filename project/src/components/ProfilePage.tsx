import { ArrowLeft, GraduationCap, Code2, MapPin, Trophy, Mail } from 'lucide-react';

interface ProfilePageProps {
  onBack: () => void;
}

const TECH_STACK = ['Python', 'JavaScript', 'Java', 'SQL', 'Git', 'React Basics'];

export default function ProfilePage({ onBack }: ProfilePageProps) {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 lg:px-8">
      <button
        onClick={onBack}
        className="mb-6 flex items-center gap-2 text-sm font-medium text-gray-600 transition-colors hover:text-emerald-700"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Dashboard
      </button>

      {/* Profile header card */}
      <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
        <div className="h-28 bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600" />
        <div className="px-6 pb-6">
          <div className="-mt-14 flex flex-col items-start gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="flex items-end gap-4">
              <div className="flex h-24 w-24 items-center justify-center rounded-2xl border-4 border-white bg-gradient-to-br from-emerald-500 to-teal-600 text-2xl font-bold text-white shadow-md">
                VB
              </div>
              <div className="pb-1">
                <h1 className="text-xl font-bold text-gray-900">Vivek Onkarnath Bharati</h1>
                <p className="flex items-center gap-1.5 text-sm text-gray-500">
                  <GraduationCap className="h-4 w-4" />
                  B.Tech Computer Science (2nd Year)
                </p>
              </div>
            </div>
          </div>

          <div className="mt-5 flex flex-wrap gap-4 text-sm text-gray-500">
            <span className="flex items-center gap-1.5">
              <MapPin className="h-4 w-4 text-gray-400" />
              PW Institute of Innovation, Hadapsar, Pune
            </span>
            <span className="flex items-center gap-1.5">
              <Mail className="h-4 w-4 text-gray-400" />
              vivek.bharati@pwioi.edu.in
            </span>
          </div>
        </div>
      </div>

      {/* Stats row */}
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <StatCard
          icon={<Trophy className="h-5 w-5" />}
          iconBg="bg-emerald-100 text-emerald-600"
          label="Matched Opportunities"
          value="6"
        />
        <StatCard
          icon={<Code2 className="h-5 w-5" />}
          iconBg="bg-blue-100 text-blue-600"
          label="Tech Skills"
          value={`${TECH_STACK.length}`}
        />
        <StatCard
          icon={<GraduationCap className="h-5 w-5" />}
          iconBg="bg-amber-100 text-amber-600"
          label="Year of Study"
          value="2nd"
        />
      </div>

      {/* Tech stack */}
      <div className="mt-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <h2 className="mb-4 flex items-center gap-2 text-sm font-semibold text-gray-900">
          <Code2 className="h-4 w-4 text-gray-400" />
          My Tech Stack
        </h2>
        <div className="flex flex-wrap gap-2">
          {TECH_STACK.map((skill) => (
            <span
              key={skill}
              className="rounded-lg bg-gray-100 px-3 py-1.5 text-sm font-medium text-gray-700 transition-colors hover:bg-emerald-50 hover:text-emerald-700"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* About */}
      <div className="mt-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <h2 className="mb-2 text-sm font-semibold text-gray-900">About</h2>
        <p className="text-sm leading-relaxed text-gray-500">
          Second-year B.Tech Computer Science student at PW Institute of Innovation in Hadapsar, Pune.
          Passionate about building software and exploring opportunities in AI, web development, and
          cloud technologies. Actively looking for internships, hackathons, and workshops to grow
          practical skills alongside academics.
        </p>
      </div>
    </div>
  );
}

function StatCard({
  icon,
  iconBg,
  label,
  value,
}: {
  icon: React.ReactNode;
  iconBg: string;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
      <div className={`mb-3 flex h-10 w-10 items-center justify-center rounded-lg ${iconBg}`}>
        {icon}
      </div>
      <p className="text-2xl font-bold text-gray-900">{value}</p>
      <p className="text-xs font-medium text-gray-400">{label}</p>
    </div>
  );
}
