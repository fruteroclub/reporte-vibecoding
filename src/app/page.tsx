import { Metadata } from "next";
import Link from "next/link";
import { 
  Globe, Users, FileText, Twitter, TrendingUp, BarChart3, 
  Monitor, Calendar, CheckCircle, Clock,
  Link2, Youtube, PieChart, Trophy, Medal, ExternalLink,
  GraduationCap, Target, Activity, ChevronRight
} from "lucide-react";

export const metadata: Metadata = {
  title: "Reporte VibeCoding Bootcamp 2026",
  description: "Reporte general del bootcamp de desarrollo con IA",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1a1a1a] text-gray-400 text-sm mb-6 border border-[#333]">
              <BarChart3 className="w-4 h-4" />
              Reporte Actualizado • 17 Feb 2026
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-white">VibeCoding: </span>
              <span className="text-orange-500">De Idea a App</span>
              <br />
              <span className="text-white">en 2 semanas con IA</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Reporte general de métricas y progreso del bootcamp
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            <StatCard number="651" label="Visitas Web" icon={<Globe className="w-6 h-6 text-orange-500" />} />
            <StatCard number="263" label="Usuarios Únicos" icon={<Users className="w-6 h-6 text-orange-500" />} />
            <StatCard number="82" label="Inscripciones" icon={<FileText className="w-6 h-6 text-orange-500" />} />
            <StatCard number="49K" label="Impresiones Twitter" icon={<Twitter className="w-6 h-6 text-orange-500" />} />
          </div>
        </div>
      </section>

      {/* Funnel Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionTitle title="Funnel de Conversión" icon={<TrendingUp className="w-6 h-6 text-orange-500" />} />
          
          <div className="bg-[#141414] border border-[#262626] rounded-2xl p-8 mt-8">
            <div className="space-y-6">
              <FunnelStep number="651" label="Visitas web" percentage="100%" />
              <FunnelStep number="263" label="Usuarios únicos" percentage="40.4%" />
              <FunnelStep number="82" label="Inscripciones" percentage="31.2%" />
              <FunnelStep number="57" label="Activados" percentage="69.5%" />
              <FunnelStep number="~10" label="Con progreso" percentage="12%" />
            </div>
          </div>
        </div>
      </section>

      {/* Web Analytics Section */}
      <Link href="/analytics" className="block">
        <section className="py-16 px-4 hover:bg-[#0f0f0f] transition-colors cursor-pointer">
          <div className="max-w-6xl mx-auto">
            <SectionTitleWithArrow 
              title="Web Analytics" 
              icon={<Globe className="w-6 h-6 text-orange-500" />} 
              subtitle="Microsoft Clarity • Click para ver detalles" 
            />
            
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <MetricCard 
                title="Engagement" 
                icon={<Activity className="w-5 h-5 text-orange-500" />}
                items={[
                  { label: "Páginas/sesión", value: "3.17" },
                  { label: "Scroll promedio", value: "72.49%" },
                  { label: "Tiempo activo", value: "2:27" },
                ]} 
              />
              <MetricCard 
                title="Fuentes de Tráfico" 
                icon={<Target className="w-5 h-5 text-orange-500" />}
                items={[
                  { label: "Twitter", value: "62.6%" },
                  { label: "YouTube", value: "16.1%" },
                  { label: "Google", value: "4.3%" },
                ]} 
              />
              <MetricCard 
                title="Dispositivos" 
                icon={<Monitor className="w-5 h-5 text-orange-500" />}
                items={[
                  { label: "Desktop", value: "62%" },
                  { label: "Mobile", value: "38%" },
                  { label: "Chrome", value: "75%" },
                ]} 
              />
            </div>
          </div>
        </section>
      </Link>

      {/* Sessions Section */}
      <Link href="/sessions" className="block">
        <section className="py-16 px-4 hover:bg-[#0f0f0f] transition-colors cursor-pointer">
          <div className="max-w-6xl mx-auto">
            <SectionTitleWithArrow title="Sesiones del Bootcamp" icon={<GraduationCap className="w-6 h-6 text-orange-500" />} subtitle="Click para ver detalles" />
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              <SessionCard number={1} title="¿Qué es VibeCoding?" date="9 Feb" status="completed" />
              <SessionCard number={2} title="Chat con tu Regenmon" date="11 Feb" status="completed" />
              <SessionCard number={3} title="Stats y Evolución" date="13 Feb" status="completed" />
              <SessionCard number={4} title="Tu Regenmon Evoluciona" date="16 Feb" status="completed" />
              <SessionCard number={5} title="Comunidad" date="18 Feb" status="pending" />
              <SessionCard number={6} title="Demo Day" date="20 Feb" status="pending" />
            </div>
          </div>
        </section>
      </Link>

      {/* Twitter Section */}
      <Link href="/twitter" className="block">
        <section className="py-16 px-4 hover:bg-[#0f0f0f] transition-colors cursor-pointer">
          <div className="max-w-6xl mx-auto">
            <SectionTitleWithArrow 
              title="Métricas Twitter" 
              icon={<Twitter className="w-6 h-6 text-orange-500" />} 
              subtitle="49,109 impresiones • Click para ver detalles" 
            />
            
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="bg-[#141414] border border-[#262626] rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Trophy className="w-6 h-6 text-orange-500" />
                  <h3 className="text-xl font-semibold text-white">Top Comunidades</h3>
                </div>
                <div className="space-y-4">
                  <CommunityRow name="ETH Cinco de Mayo" impressions="2,820" />
                  <CommunityRow name="Ethereum México" impressions="1,759" />
                  <CommunityRow name="meximalist" impressions="1,241" />
                </div>
              </div>
              
              <div className="bg-[#141414] border border-[#262626] rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Users className="w-6 h-6 text-orange-500" />
                  <h3 className="text-xl font-semibold text-white">Estudiantes Activos (27)</h3>
                </div>
                <div className="space-y-3">
                  <StudentRow handle="@S4kurak" posts={4} />
                  <StudentRow handle="@0xW4rw1ck" posts={3} />
                  <StudentRow handle="@0xSofiverse" posts={3} />
                </div>
              </div>
            </div>
          </div>
        </section>
      </Link>

      {/* Top Performers Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionTitle 
            title="Top Performers" 
            icon={<Medal className="w-6 h-6 text-orange-500" />} 
            subtitle="Estudiantes con mayor progreso" 
          />
          
          <div className="bg-[#141414] border border-[#262626] rounded-2xl p-8 mt-8">
            <div className="space-y-4">
              <PerformerRow email="anthonyanachury@gmail.com" progress={40} sessions={2} rank={1} />
              <PerformerRow email="direccion@platohedro.org" progress={40} sessions={2} rank={2} />
              <PerformerRow email="daniela@doingminds.com" progress={40} sessions={2} rank={3} />
              <PerformerRow email="lotus.rex@gmail.com" progress={20} sessions={1} rank={4} />
              <PerformerRow email="danielrubio1234@gmail.com" progress={20} sessions={1} rank={5} />
            </div>
          </div>
        </div>
      </section>

      {/* Links Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionTitle title="Links Importantes" icon={<Link2 className="w-6 h-6 text-orange-500" />} />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
            <LinkCard title="Landing Page" url="https://bootcamp.frutero.club/" icon={<Globe className="w-5 h-5 text-orange-500" />} />
            <LinkCard title="Canal YouTube" url="https://www.youtube.com/@fruterotv" icon={<Youtube className="w-5 h-5 text-red-500" />} />
            <LinkCard title="Microsoft Clarity" url="https://clarity.microsoft.com/projects/view/v88xp2n5qs/dashboard" icon={<PieChart className="w-5 h-5 text-orange-500" />} />
            <LinkCard title="Métricas Twitter" url="https://docs.google.com/spreadsheets/d/1IR9E70JuFQyE-WiCGs4ziZHBaSyQwysdkHtV0JK2UPE/edit" icon={<Twitter className="w-5 h-5 text-orange-500" />} />
            <LinkCard title="Lista Estudiantes" url="https://docs.google.com/spreadsheets/d/1BaaSr97v1osRpfvHCe9c5CPNLvd0_MukXGzr-s1FErM/edit" icon={<Users className="w-5 h-5 text-orange-500" />} />
            <LinkCard title="Entregables" url="https://poktapok-iaegp4wrg-fruteroclub.vercel.app/bootcamp/vibecoding" icon={<FileText className="w-5 h-5 text-orange-500" />} />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-[#262626]">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            Generado por <span className="text-orange-500">Fruterito</span> 🍓
          </p>
          <p className="text-gray-500 text-sm mt-2">
            VibeCoding Bootcamp • Frutero Club 2026
          </p>
        </div>
      </footer>
    </main>
  );
}

// Components - Frutero Style (clean, no gradients)
function StatCard({ number, label, icon }: { number: string; label: string; icon: React.ReactNode }) {
  return (
    <div className="bg-[#141414] border border-[#262626] rounded-xl p-6 text-center transition-all hover:border-[#404040]">
      <div className="flex justify-center mb-3">{icon}</div>
      <p className="text-3xl md:text-4xl font-bold text-orange-500">{number}</p>
      <p className="text-gray-400 text-sm mt-1">{label}</p>
    </div>
  );
}

function SectionTitle({ title, icon, subtitle }: { title: string; icon: React.ReactNode; subtitle?: string }) {
  return (
    <div className="text-center">
      <div className="flex items-center justify-center gap-3">
        {icon}
        <h2 className="text-3xl md:text-4xl font-bold text-white">{title}</h2>
      </div>
      {subtitle && <p className="text-gray-400 mt-2">{subtitle}</p>}
    </div>
  );
}

function SectionTitleWithArrow({ title, icon, subtitle }: { title: string; icon: React.ReactNode; subtitle?: string }) {
  return (
    <div className="text-center">
      <div className="flex items-center justify-center gap-3">
        {icon}
        <h2 className="text-3xl md:text-4xl font-bold text-white">{title}</h2>
        <ChevronRight className="w-6 h-6 text-orange-500" />
      </div>
      {subtitle && <p className="text-gray-400 mt-2">{subtitle}</p>}
    </div>
  );
}

function FunnelStep({ number, label, percentage }: { number: string; label: string; percentage: string }) {
  return (
    <div className="flex items-center gap-4">
      <div className="w-20 text-right">
        <span className="text-2xl font-bold text-white">{number}</span>
      </div>
      <div className="flex-1">
        <div className="h-8 bg-[#1a1a1a] rounded-full overflow-hidden">
          <div 
            className="h-full bg-orange-500 rounded-full"
            style={{ width: percentage }}
          />
        </div>
      </div>
      <div className="w-32">
        <span className="text-gray-400">{label}</span>
      </div>
      <div className="w-16 text-right">
        <span className="text-orange-500 font-medium">{percentage}</span>
      </div>
    </div>
  );
}

function MetricCard({ title, icon, items }: { title: string; icon: React.ReactNode; items: { label: string; value: string }[] }) {
  return (
    <div className="bg-[#141414] border border-[#262626] rounded-2xl p-6">
      <div className="flex items-center gap-2 mb-4">
        {icon}
        <h3 className="text-lg font-semibold text-white">{title}</h3>
      </div>
      <div className="space-y-3">
        {items.map((item, i) => (
          <div key={i} className="flex justify-between">
            <span className="text-gray-400">{item.label}</span>
            <span className="text-white font-medium">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function SessionCard({ number, title, date, status }: { number: number; title: string; date: string; status: "completed" | "pending" }) {
  return (
    <div className="bg-[#141414] border border-[#262626] rounded-xl p-6 hover:border-[#404040] transition-colors">
      <div className="flex items-start justify-between">
        <div>
          <span className="text-orange-500 text-sm font-medium">Sesión {number}</span>
          <h3 className="text-white font-semibold mt-1">{title}</h3>
          <div className="flex items-center gap-2 mt-2 text-gray-500 text-sm">
            <Calendar className="w-4 h-4" />
            {date}
          </div>
        </div>
        <span className={"flex items-center gap-1 px-3 py-1 rounded-full text-xs " + 
          (status === "completed" 
            ? "bg-green-500/10 text-green-500 border border-green-500/20" 
            : "bg-orange-500/10 text-orange-500 border border-orange-500/20")
        }>
          {status === "completed" ? <CheckCircle className="w-3 h-3" /> : <Clock className="w-3 h-3" />}
          {status === "completed" ? "Completada" : "Pendiente"}
        </span>
      </div>
    </div>
  );
}

function CommunityRow({ name, impressions }: { name: string; impressions: string }) {
  return (
    <div className="flex justify-between items-center py-2 border-b border-[#262626]">
      <span className="text-gray-300">{name}</span>
      <span className="text-orange-500 font-medium">{impressions} imp</span>
    </div>
  );
}

function StudentRow({ handle, posts }: { handle: string; posts: number }) {
  return (
    <div className="flex justify-between items-center py-2">
      <span className="text-orange-500">{handle}</span>
      <span className="text-gray-400">{posts} posts</span>
    </div>
  );
}

function PerformerRow({ email, progress, sessions, rank }: { email: string; progress: number; sessions: number; rank: number }) {
  const medals = [
    <Trophy key={1} className="w-5 h-5 text-orange-500" />,
    <Medal key={2} className="w-5 h-5 text-gray-400" />,
    <Medal key={3} className="w-5 h-5 text-orange-700" />,
    <span key={4} className="w-5 h-5 flex items-center justify-center text-gray-500 font-bold text-sm">4</span>,
    <span key={5} className="w-5 h-5 flex items-center justify-center text-gray-500 font-bold text-sm">5</span>,
  ];
  return (
    <div className="flex items-center gap-4 py-3 border-b border-[#262626] last:border-0">
      <div className="w-8">{medals[rank - 1]}</div>
      <div className="flex-1">
        <p className="text-gray-300 truncate">{email}</p>
      </div>
      <div className="text-right">
        <span className="text-orange-500 font-bold">{progress}%</span>
        <span className="text-gray-500 text-sm ml-2">({sessions} sesiones)</span>
      </div>
    </div>
  );
}

function LinkCard({ title, url, icon }: { title: string; url: string; icon: React.ReactNode }) {
  return (
    <a 
      href={url} 
      target="_blank" 
      rel="noopener noreferrer"
      className="bg-[#141414] border border-[#262626] rounded-xl p-4 flex items-center gap-4 hover:border-orange-500/50 transition-all group"
    >
      {icon}
      <div className="flex-1 min-w-0">
        <p className="text-white font-medium">{title}</p>
        <p className="text-gray-500 text-xs truncate">{url}</p>
      </div>
      <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-orange-500 transition-colors" />
    </a>
  );
}
