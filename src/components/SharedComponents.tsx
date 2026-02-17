import { 
  Calendar, CheckCircle, Clock, ExternalLink, ChevronRight,
  Trophy, Medal
} from "lucide-react";
import Link from "next/link";

// Stat Card - Responsive
export function StatCard({ number, label, icon }: { number: string; label: string; icon: React.ReactNode }) {
  return (
    <div className="bg-[#141414] border border-[#262626] rounded-xl p-4 md:p-6 text-center transition-all hover:border-[#404040]">
      <div className="flex justify-center mb-2 md:mb-3">{icon}</div>
      <p className="text-2xl md:text-4xl font-bold text-orange-500">{number}</p>
      <p className="text-gray-400 text-xs md:text-sm mt-1">{label}</p>
    </div>
  );
}

// Section Title
export function SectionTitle({ title, icon, subtitle }: { title: string; icon: React.ReactNode; subtitle?: string }) {
  return (
    <div className="text-center">
      <div className="flex items-center justify-center gap-2 md:gap-3">
        {icon}
        <h2 className="text-2xl md:text-4xl font-bold text-white">{title}</h2>
      </div>
      {subtitle && <p className="text-gray-400 text-sm md:text-base mt-2">{subtitle}</p>}
    </div>
  );
}

// Section Title with Arrow
export function SectionTitleWithArrow({ title, icon, subtitle }: { title: string; icon: React.ReactNode; subtitle?: string }) {
  return (
    <div className="text-center">
      <div className="flex items-center justify-center gap-2 md:gap-3">
        {icon}
        <h2 className="text-2xl md:text-4xl font-bold text-white">{title}</h2>
        <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-orange-500" />
      </div>
      {subtitle && <p className="text-gray-400 text-sm md:text-base mt-2">{subtitle}</p>}
    </div>
  );
}

// Funnel Step - Responsive
export function FunnelStep({ number, label, percentage }: { number: string; label: string; percentage: string }) {
  return (
    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
      <div className="flex items-center gap-2 md:w-20 md:justify-end">
        <span className="text-xl md:text-2xl font-bold text-white">{number}</span>
        <span className="text-gray-400 text-sm md:hidden">{label}</span>
      </div>
      <div className="flex-1">
        <div className="h-6 md:h-8 bg-[#1a1a1a] rounded-full overflow-hidden">
          <div 
            className="h-full bg-orange-500 rounded-full"
            style={{ width: percentage }}
          />
        </div>
      </div>
      <div className="hidden md:block w-32">
        <span className="text-gray-400">{label}</span>
      </div>
      <div className="flex justify-between md:w-16 md:text-right">
        <span className="md:hidden text-gray-500 text-sm">Conversión:</span>
        <span className="text-orange-500 font-medium">{percentage}</span>
      </div>
    </div>
  );
}

// Metric Card - Responsive
export function MetricCard({ title, icon, items }: { title: string; icon: React.ReactNode; items: { label: string; value: string }[] }) {
  return (
    <div className="bg-[#141414] border border-[#262626] rounded-xl md:rounded-2xl p-4 md:p-6">
      <div className="flex items-center gap-2 mb-3 md:mb-4">
        {icon}
        <h3 className="text-base md:text-lg font-semibold text-white">{title}</h3>
      </div>
      <div className="space-y-2 md:space-y-3">
        {items.map((item, i) => (
          <div key={i} className="flex justify-between">
            <span className="text-gray-400 text-sm md:text-base">{item.label}</span>
            <span className="text-white font-medium text-sm md:text-base">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// Session Card - Responsive
export function SessionCard({ number, title, date, status }: { number: number; title: string; date: string; status: "completed" | "pending" }) {
  return (
    <div className="bg-[#141414] border border-[#262626] rounded-xl p-4 md:p-6 hover:border-[#404040] transition-colors">
      <div className="flex items-start justify-between gap-2">
        <div className="min-w-0">
          <span className="text-orange-500 text-xs md:text-sm font-medium">Sesión {number}</span>
          <h3 className="text-white font-semibold text-sm md:text-base mt-1 truncate">{title}</h3>
          <div className="flex items-center gap-2 mt-2 text-gray-500 text-xs md:text-sm">
            <Calendar className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" />
            {date}
          </div>
        </div>
        <span className={"flex items-center gap-1 px-2 md:px-3 py-1 rounded-full text-xs flex-shrink-0 " + 
          (status === "completed" 
            ? "bg-green-500/10 text-green-500 border border-green-500/20" 
            : "bg-orange-500/10 text-orange-500 border border-orange-500/20")
        }>
          {status === "completed" ? <CheckCircle className="w-3 h-3" /> : <Clock className="w-3 h-3" />}
          <span className="hidden sm:inline">{status === "completed" ? "Completada" : "Pendiente"}</span>
        </span>
      </div>
    </div>
  );
}

// Community Row
export function CommunityRow({ name, impressions }: { name: string; impressions: string }) {
  return (
    <div className="flex justify-between items-center py-2 border-b border-[#262626]">
      <span className="text-gray-300 text-sm md:text-base">{name}</span>
      <span className="text-orange-500 font-medium text-sm md:text-base">{impressions} imp</span>
    </div>
  );
}

// Student Row
export function StudentRow({ handle, posts }: { handle: string; posts: number }) {
  return (
    <div className="flex justify-between items-center py-2">
      <span className="text-orange-500 text-sm md:text-base">{handle}</span>
      <span className="text-gray-400 text-sm md:text-base">{posts} posts</span>
    </div>
  );
}

// Performer Row - Responsive
export function PerformerRow({ email, progress, sessions, rank }: { email: string; progress: number; sessions: number; rank: number }) {
  const medals = [
    <Trophy key={1} className="w-4 h-4 md:w-5 md:h-5 text-orange-500" />,
    <Medal key={2} className="w-4 h-4 md:w-5 md:h-5 text-gray-400" />,
    <Medal key={3} className="w-4 h-4 md:w-5 md:h-5 text-orange-700" />,
    <span key={4} className="w-4 h-4 md:w-5 md:h-5 flex items-center justify-center text-gray-500 font-bold text-xs md:text-sm">4</span>,
    <span key={5} className="w-4 h-4 md:w-5 md:h-5 flex items-center justify-center text-gray-500 font-bold text-xs md:text-sm">5</span>,
  ];
  return (
    <div className="flex items-center gap-3 md:gap-4 py-2 md:py-3 border-b border-[#262626] last:border-0">
      <div className="w-6 md:w-8 flex-shrink-0">{medals[rank - 1]}</div>
      <div className="flex-1 min-w-0">
        <p className="text-gray-300 text-sm md:text-base truncate">{email}</p>
      </div>
      <div className="text-right flex-shrink-0">
        <span className="text-orange-500 font-bold text-sm md:text-base">{progress}%</span>
        <span className="text-gray-500 text-xs md:text-sm ml-1 md:ml-2">({sessions})</span>
      </div>
    </div>
  );
}

// Link Card - Responsive
export function LinkCard({ title, url, icon }: { title: string; url: string; icon: React.ReactNode }) {
  return (
    <a 
      href={url} 
      target="_blank" 
      rel="noopener noreferrer"
      className="bg-[#141414] border border-[#262626] rounded-xl p-3 md:p-4 flex items-center gap-3 md:gap-4 hover:border-orange-500/50 transition-all group"
    >
      <div className="flex-shrink-0">{icon}</div>
      <div className="flex-1 min-w-0">
        <p className="text-white font-medium text-sm md:text-base">{title}</p>
        <p className="text-gray-500 text-xs truncate hidden sm:block">{url}</p>
      </div>
      <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-orange-500 transition-colors flex-shrink-0" />
    </a>
  );
}

// Back Link
export function BackLink() {
  return (
    <Link 
      href="/"
      className="inline-flex items-center gap-2 text-gray-400 hover:text-orange-500 transition-colors mb-6 md:mb-8"
    >
      <ChevronRight className="w-4 h-4 rotate-180" />
      <span className="text-sm md:text-base">Volver al reporte</span>
    </Link>
  );
}

// Page Header
export function PageHeader({ title, subtitle, icon }: { title: string; subtitle?: string; icon: React.ReactNode }) {
  return (
    <div className="text-center mb-8 md:mb-12">
      <div className="flex items-center justify-center gap-2 md:gap-3 mb-2">
        {icon}
        <h1 className="text-3xl md:text-5xl font-bold text-white">{title}</h1>
      </div>
      {subtitle && <p className="text-gray-400 text-sm md:text-base">{subtitle}</p>}
    </div>
  );
}

// Data Table - Responsive
export function DataTable({ headers, rows }: { headers: string[]; rows: (string | React.ReactNode)[][] }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-[#262626]">
            {headers.map((h, i) => (
              <th key={i} className="text-left text-gray-400 text-xs md:text-sm font-medium py-3 px-2 md:px-4">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-[#262626] last:border-0">
              {row.map((cell, j) => (
                <td key={j} className="text-gray-300 text-sm md:text-base py-3 px-2 md:px-4">{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
