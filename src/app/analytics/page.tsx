import Link from "next/link";
import { ArrowLeft, Globe, Monitor, Smartphone, Chrome, Activity, Eye, MousePointer, AlertTriangle, Zap } from "lucide-react";

export default function AnalyticsPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 mb-8">
          <ArrowLeft className="w-4 h-4" /> Volver al Dashboard
        </Link>
        
        <div className="flex items-center gap-4 mb-8">
          <Globe className="w-12 h-12 text-cyan-400" />
          <div>
            <h1 className="text-4xl font-bold text-white">Web Analytics</h1>
            <p className="text-gray-400">Microsoft Clarity • 18 Ene - 16 Feb 2026</p>
          </div>
        </div>

        {/* Main Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <StatCard label="Total Sesiones" value="651" />
          <StatCard label="Sesiones Reales" value="568" subtitle="sin bots" />
          <StatCard label="Usuarios Únicos" value="263" />
          <StatCard label="Sesiones Bot" value="83" subtitle="12.7%" />
        </div>

        {/* Engagement Section */}
        <section className="glow-card rounded-2xl p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <Activity className="w-6 h-6 text-purple-400" />
            <h2 className="text-2xl font-bold text-white">Engagement</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            <MetricBox label="Páginas por sesión" value="3.17" />
            <MetricBox label="Profundidad scroll" value="72.49%" />
            <MetricBox label="Tiempo activo" value="2 min 27s" />
            <MetricBox label="Tiempo total" value="8 min 59s" />
          </div>
        </section>

        {/* Browsers */}
        <section className="glow-card rounded-2xl p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <Chrome className="w-6 h-6 text-cyan-400" />
            <h2 className="text-2xl font-bold text-white">Navegadores</h2>
          </div>
          <div className="space-y-4">
            <BrowserRow name="Chrome Desktop" sessions={332} percentage={55.24} />
            <BrowserRow name="Chrome Mobile" sessions={117} percentage={19.47} />
            <BrowserRow name="Mobile Safari" sessions={56} percentage={9.32} />
            <BrowserRow name="Safari Desktop" sessions={38} percentage={6.32} />
            <BrowserRow name="Edge" sessions={26} percentage={4.33} />
            <BrowserRow name="Firefox" sessions={21} percentage={3.49} />
            <BrowserRow name="Samsung Internet" sessions={6} percentage={1.0} />
            <BrowserRow name="Instagram App" sessions={5} percentage={0.83} />
          </div>
        </section>

        {/* Devices */}
        <section className="glow-card rounded-2xl p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <Monitor className="w-6 h-6 text-purple-400" />
            <h2 className="text-2xl font-bold text-white">Dispositivos</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center">
              <Monitor className="w-16 h-16 text-purple-400 mx-auto mb-4" />
              <p className="text-4xl font-bold text-white">62%</p>
              <p className="text-gray-400">Desktop</p>
            </div>
            <div className="text-center">
              <Smartphone className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
              <p className="text-4xl font-bold text-white">38%</p>
              <p className="text-gray-400">Mobile</p>
            </div>
          </div>
        </section>

        {/* Top Pages */}
        <section className="glow-card rounded-2xl p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <Eye className="w-6 h-6 text-cyan-400" />
            <h2 className="text-2xl font-bold text-white">Páginas Más Visitadas</h2>
          </div>
          <div className="space-y-4">
            <PageRow page="https://bootcamp.frutero.club/" sessions={476} />
            <PageRow page="/doc/session-1" sessions={123} />
            <PageRow page="/doc" sessions={72} />
            <PageRow page="/doc/session-2" sessions={72} />
            <PageRow page="/doc/session-1/deliverable" sessions={54} />
            <PageRow page="/doc/session-2/prompt" sessions={54} />
            <PageRow page="/doc/sessions" sessions={52} />
            <PageRow page="/doc/session-1/prompt" sessions={50} />
            <PageRow page="/doc/session-1/support" sessions={39} />
            <PageRow page="/doc/resources" sessions={31} />
            <PageRow page="/doc/session-3" sessions={31} />
            <PageRow page="/doc/layers" sessions={29} />
          </div>
        </section>

        {/* Traffic Sources */}
        <section className="glow-card rounded-2xl p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <Zap className="w-6 h-6 text-amber-400" />
            <h2 className="text-2xl font-bold text-white">Fuentes de Tráfico</h2>
          </div>
          <div className="space-y-4">
            <TrafficRow source="Twitter (t.co)" sessions={159} percentage={62.6} />
            <TrafficRow source="YouTube" sessions={41} percentage={16.1} />
            <TrafficRow source="Interno" sessions={24} percentage={9.4} />
            <TrafficRow source="Google" sessions={11} percentage={4.3} />
            <TrafficRow source="Instagram" sessions={7} percentage={2.8} />
            <TrafficRow source="Gmail App" sessions={6} percentage={2.4} />
            <TrafficRow source="Telegram Web" sessions={5} percentage={2.0} />
          </div>
        </section>

        {/* UX Issues */}
        <section className="glow-card rounded-2xl p-8 mb-8 border-amber-500/30">
          <div className="flex items-center gap-3 mb-6">
            <AlertTriangle className="w-6 h-6 text-amber-400" />
            <h2 className="text-2xl font-bold text-white">Problemas UX Detectados</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <IssueCard 
              title="Clics Inactivos" 
              value="160 sesiones" 
              percentage="24.58%"
              description="Usuarios haciendo clic en elementos no clickeables"
            />
            <IssueCard 
              title="Clic Atrás Rápido" 
              value="124 sesiones" 
              percentage="19.05%"
              description="Usuarios que vuelven rápido después de navegar"
            />
          </div>
        </section>

        {/* Performance */}
        <section className="glow-card rounded-2xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <Zap className="w-6 h-6 text-purple-400" />
            <h2 className="text-2xl font-bold text-white">Performance Web</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            <PerformanceCard label="Puntuación" value="75/100" status="warning" />
            <PerformanceCard label="LCP" value="4.67s" status="error" description="Necesita mejora" />
            <PerformanceCard label="INP" value="376ms" status="warning" />
            <PerformanceCard label="CLS" value="0.003s" status="success" />
          </div>
        </section>
      </div>
    </main>
  );
}

function StatCard({ label, value, subtitle }: { label: string; value: string; subtitle?: string }) {
  return (
    <div className="stat-card rounded-xl p-6 text-center">
      <p className="text-3xl font-bold gradient-text">{value}</p>
      <p className="text-gray-400 text-sm">{label}</p>
      {subtitle && <p className="text-gray-500 text-xs">{subtitle}</p>}
    </div>
  );
}

function MetricBox({ label, value }: { label: string; value: string }) {
  return (
    <div className="text-center p-4 bg-gray-800/50 rounded-xl">
      <p className="text-2xl font-bold text-white">{value}</p>
      <p className="text-gray-400 text-sm">{label}</p>
    </div>
  );
}

function BrowserRow({ name, sessions, percentage }: { name: string; sessions: number; percentage: number }) {
  return (
    <div className="flex items-center gap-4">
      <div className="w-40 text-gray-300">{name}</div>
      <div className="flex-1">
        <div className="h-4 bg-gray-800 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full" style={{ width: `${percentage}%` }} />
        </div>
      </div>
      <div className="w-24 text-right text-gray-400">{sessions}</div>
      <div className="w-16 text-right text-purple-400">{percentage}%</div>
    </div>
  );
}

function PageRow({ page, sessions }: { page: string; sessions: number }) {
  return (
    <div className="flex items-center justify-between py-2 border-b border-gray-800">
      <span className="text-gray-300 truncate flex-1">{page}</span>
      <span className="text-purple-400 font-medium">{sessions} sesiones</span>
    </div>
  );
}

function TrafficRow({ source, sessions, percentage }: { source: string; sessions: number; percentage: number }) {
  return (
    <div className="flex items-center gap-4">
      <div className="w-32 text-gray-300">{source}</div>
      <div className="flex-1">
        <div className="h-4 bg-gray-800 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full" style={{ width: `${percentage}%` }} />
        </div>
      </div>
      <div className="w-20 text-right text-gray-400">{sessions}</div>
      <div className="w-16 text-right text-cyan-400">{percentage}%</div>
    </div>
  );
}

function IssueCard({ title, value, percentage, description }: { title: string; value: string; percentage: string; description: string }) {
  return (
    <div className="p-4 bg-amber-500/10 rounded-xl border border-amber-500/30">
      <h3 className="text-white font-semibold">{title}</h3>
      <p className="text-2xl font-bold text-amber-400 mt-2">{value}</p>
      <p className="text-amber-400/70 text-sm">{percentage}</p>
      <p className="text-gray-400 text-sm mt-2">{description}</p>
    </div>
  );
}

function PerformanceCard({ label, value, status, description }: { label: string; value: string; status: "success" | "warning" | "error"; description?: string }) {
  const colors = {
    success: "text-green-400 border-green-500/30",
    warning: "text-amber-400 border-amber-500/30",
    error: "text-red-400 border-red-500/30",
  };
  return (
    <div className={`p-4 rounded-xl border ${colors[status]} bg-gray-800/50`}>
      <p className="text-gray-400 text-sm">{label}</p>
      <p className={`text-2xl font-bold ${colors[status].split(" ")[0]}`}>{value}</p>
      {description && <p className="text-gray-500 text-xs mt-1">{description}</p>}
    </div>
  );
}
