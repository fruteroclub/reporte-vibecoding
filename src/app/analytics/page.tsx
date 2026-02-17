import { Metadata } from "next";
import { 
  Globe, Monitor, Smartphone, Chrome, Activity, 
  MousePointer, AlertTriangle, Gauge, ExternalLink
} from "lucide-react";
import { BackLink, PageHeader, SectionTitle, MetricCard, DataTable } from "@/components/SharedComponents";

export const metadata: Metadata = {
  title: "Web Analytics | Reporte VibeCoding",
  description: "Métricas detalladas de Microsoft Clarity",
};

export default function AnalyticsPage() {
  return (
    <main className="min-h-screen py-8 md:py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <BackLink />
        
        <PageHeader 
          title="Web Analytics" 
          subtitle="Microsoft Clarity • 18 Ene - 16 Feb 2026"
          icon={<Globe className="w-8 h-8 md:w-10 md:h-10 text-orange-500" />}
        />

        {/* Overview Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-8 md:mb-12">
          <StatBox number="651" label="Total Sesiones" />
          <StatBox number="568" label="Sesiones Reales" />
          <StatBox number="263" label="Usuarios Únicos" />
          <StatBox number="83" label="Sesiones Bot (12.7%)" />
        </div>

        {/* Engagement Section */}
        <section className="mb-8 md:mb-12">
          <SectionTitle title="Engagement" icon={<Activity className="w-5 h-5 md:w-6 md:h-6 text-orange-500" />} />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
            <MetricCard title="Páginas" icon={<Globe className="w-4 h-4 text-orange-500" />} items={[
              { label: "Por sesión", value: "3.17" },
            ]} />
            <MetricCard title="Scroll" icon={<MousePointer className="w-4 h-4 text-orange-500" />} items={[
              { label: "Profundidad", value: "72.49%" },
            ]} />
            <MetricCard title="Tiempo Activo" icon={<Activity className="w-4 h-4 text-orange-500" />} items={[
              { label: "Promedio", value: "2:27" },
            ]} />
            <MetricCard title="Tiempo Total" icon={<Activity className="w-4 h-4 text-orange-500" />} items={[
              { label: "Promedio", value: "8:59" },
            ]} />
          </div>
        </section>

        {/* Devices Section */}
        <section className="mb-8 md:mb-12">
          <SectionTitle title="Dispositivos y Navegadores" icon={<Monitor className="w-5 h-5 md:w-6 md:h-6 text-orange-500" />} />
          <div className="bg-[#141414] border border-[#262626] rounded-xl md:rounded-2xl p-4 md:p-6 mt-6">
            <DataTable 
              headers={["Navegador", "Sesiones", "%"]}
              rows={[
                [<span key="1" className="flex items-center gap-2"><Chrome className="w-4 h-4 text-orange-500" /> Chrome Desktop</span>, "332", "55.24%"],
                [<span key="2" className="flex items-center gap-2"><Smartphone className="w-4 h-4 text-orange-500" /> Chrome Mobile</span>, "117", "19.47%"],
                ["Mobile Safari", "56", "9.32%"],
                ["Safari Desktop", "38", "6.32%"],
                ["Edge", "26", "4.33%"],
                ["Firefox", "21", "3.49%"],
              ]}
            />
            <div className="mt-4 pt-4 border-t border-[#262626] flex flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <Monitor className="w-4 h-4 text-orange-500" />
                <span className="text-gray-400">Desktop:</span>
                <span className="text-white font-medium">62%</span>
              </div>
              <div className="flex items-center gap-2">
                <Smartphone className="w-4 h-4 text-orange-500" />
                <span className="text-gray-400">Mobile:</span>
                <span className="text-white font-medium">38%</span>
              </div>
            </div>
          </div>
        </section>

        {/* Top Pages Section */}
        <section className="mb-8 md:mb-12">
          <SectionTitle title="Páginas Más Visitadas" icon={<Globe className="w-5 h-5 md:w-6 md:h-6 text-orange-500" />} />
          <div className="bg-[#141414] border border-[#262626] rounded-xl md:rounded-2xl p-4 md:p-6 mt-6">
            <DataTable 
              headers={["Página", "Sesiones", "%"]}
              rows={[
                [<span key="1" className="text-orange-500">/</span>, "476", "73.1%"],
                ["/doc/session-1", "123", "18.9%"],
                ["/doc", "72", "11.1%"],
                ["/doc/session-2", "72", "11.1%"],
                ["/doc/session-1/deliverable", "54", "8.3%"],
                ["/doc/session-2/prompt", "54", "8.3%"],
                ["/doc/sessions", "52", "8.0%"],
              ]}
            />
          </div>
        </section>

        {/* Traffic Sources */}
        <section className="mb-8 md:mb-12">
          <SectionTitle title="Fuentes de Tráfico" icon={<ExternalLink className="w-5 h-5 md:w-6 md:h-6 text-orange-500" />} />
          <div className="bg-[#141414] border border-[#262626] rounded-xl md:rounded-2xl p-4 md:p-6 mt-6">
            <DataTable 
              headers={["Fuente", "Sesiones", "%"]}
              rows={[
                [<span key="1" className="text-orange-500 font-medium">Twitter (t.co)</span>, "159", "62.6%"],
                ["YouTube", "41", "16.1%"],
                ["Interno (bootcamp)", "24", "9.4%"],
                ["Google", "11", "4.3%"],
                ["Instagram", "7", "2.8%"],
                ["Gmail App", "6", "2.4%"],
                ["Telegram Web", "5", "2.0%"],
              ]}
            />
          </div>
        </section>

        {/* Performance Section */}
        <section className="mb-8 md:mb-12">
          <SectionTitle title="Performance Web" icon={<Gauge className="w-5 h-5 md:w-6 md:h-6 text-orange-500" />} />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
            <PerformanceCard label="Puntuación" value="75/100" status="warning" />
            <PerformanceCard label="LCP" value="4.67s" status="error" note="Necesita mejora" />
            <PerformanceCard label="INP" value="376ms" status="warning" />
            <PerformanceCard label="CLS" value="0.003" status="success" />
          </div>
        </section>

        {/* Issues Section */}
        <section className="mb-8 md:mb-12">
          <SectionTitle title="Issues Detectados" icon={<AlertTriangle className="w-5 h-5 md:w-6 md:h-6 text-orange-500" />} />
          <div className="grid md:grid-cols-2 gap-4 md:gap-6 mt-6">
            <div className="bg-[#141414] border border-[#262626] rounded-xl md:rounded-2xl p-4 md:p-6">
              <h3 className="text-white font-semibold mb-4">Errores JavaScript (90)</h3>
              <div className="space-y-2">
                <IssueRow label="undefined 'id'" count={20} />
                <IssueRow label="undefined 'type'" count={20} />
                <IssueRow label="undefined 'target'" count={10} />
                <IssueRow label="undefined 'origin'" count={8} />
                <IssueRow label="React Error #306" count={8} />
              </div>
            </div>
            <div className="bg-[#141414] border border-[#262626] rounded-xl md:rounded-2xl p-4 md:p-6">
              <h3 className="text-white font-semibold mb-4">UX Issues</h3>
              <div className="space-y-2">
                <IssueRow label="Clic inactivo" count={160} percent="24.58%" />
                <IssueRow label="Clic atrás rápido" count={124} percent="19.05%" />
                <IssueRow label="Clics continuos" count={3} percent="0.46%" />
              </div>
            </div>
          </div>
        </section>

        {/* Link to Clarity */}
        <div className="text-center">
          <a 
            href="https://clarity.microsoft.com/projects/view/v88xp2n5qs/dashboard"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-medium transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            Ver en Microsoft Clarity
          </a>
        </div>
      </div>
    </main>
  );
}

function StatBox({ number, label }: { number: string; label: string }) {
  return (
    <div className="bg-[#141414] border border-[#262626] rounded-xl p-4 text-center">
      <p className="text-2xl md:text-3xl font-bold text-orange-500">{number}</p>
      <p className="text-gray-400 text-xs md:text-sm mt-1">{label}</p>
    </div>
  );
}

function PerformanceCard({ label, value, status, note }: { label: string; value: string; status: "success" | "warning" | "error"; note?: string }) {
  const colors = {
    success: "text-green-500 border-green-500/20",
    warning: "text-yellow-500 border-yellow-500/20",
    error: "text-red-500 border-red-500/20",
  };
  return (
    <div className={"bg-[#141414] border rounded-xl p-4 text-center " + colors[status]}>
      <p className="text-gray-400 text-sm">{label}</p>
      <p className={"text-2xl font-bold mt-1 " + colors[status].split(" ")[0]}>{value}</p>
      {note && <p className="text-xs text-gray-500 mt-1">{note}</p>}
    </div>
  );
}

function IssueRow({ label, count, percent }: { label: string; count: number; percent?: string }) {
  return (
    <div className="flex justify-between items-center py-2 border-b border-[#262626] last:border-0">
      <span className="text-gray-400 text-sm">{label}</span>
      <span className="text-orange-500 font-medium text-sm">{count} {percent && <span className="text-gray-500">({percent})</span>}</span>
    </div>
  );
}
