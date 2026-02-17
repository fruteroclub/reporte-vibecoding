import { Metadata } from "next";
import Link from "next/link";
import { 
  Globe, Users, FileText, Twitter, TrendingUp, BarChart3, 
  Monitor, Link2, Youtube, PieChart, Trophy,
  GraduationCap, Target, Activity, Medal, Award, CheckCircle, Clock, ExternalLink
} from "lucide-react";
import {
  StatCard, SectionTitle, SectionTitleWithArrow, FunnelStep,
  MetricCard, SessionCard, CommunityRow, StudentRow,
  PerformerRow, LinkCard
} from "@/components/SharedComponents";

export const metadata: Metadata = {
  title: "Reporte VibeCoding Bootcamp 2026",
  description: "Reporte general del bootcamp de desarrollo con IA",
};

// POAPs data
const poaps = [
  {
    session: 1,
    name: "Vibe Bootcamp S1",
    date: "Feb 9, 2026",
    description: "Construye tu primera app con IA en 2 semanas. Let's Fruta Build!",
    tokenId: "7563405",
    dropId: "225994",
    status: "minted",
    collectors: 24,
    image: "https://assets.poap.xyz/b0329e07-b6e6-42a1-af4f-0b403d08ee18.png"
  },
  {
    session: 2,
    name: "Vibe Coding Bootcamp S2",
    date: "Feb 11, 2026",
    description: "Segunda sesión, primer producto real. Learning by building, always!",
    tokenId: "7563753",
    dropId: "226008",
    status: "minted",
    collectors: 21,
    image: "https://assets.poap.xyz/adfca192-4589-4039-bbc5-bbdb1fa262c2.png"
  },
  {
    session: 3,
    name: "Vibe Coding Bootcamp S3",
    date: "Feb 13, 2026",
    description: "Los Regenmons evolucionaron. From app to system.",
    tokenId: "7564849",
    dropId: "226087",
    status: "minted",
    collectors: 18,
    image: "https://assets.poap.xyz/0bc67172-085f-4590-9004-95e1ab97dc10.png"
  },
  {
    session: 4,
    name: "Vibe Coding Bootcamp S4",
    date: "Feb 16, 2026",
    description: "Los Regenmons se convirtieron en verdaderos compañeros digitales.",
    tokenId: "7565914",
    dropId: "226165",
    status: "minted",
    collectors: 24,
    image: "https://assets.poap.xyz/f37b79d6-3497-4788-8895-3e793e87b3f4.png"
  },
  {
    session: 5,
    name: "Vibe Coding Bootcamp S5",
    date: "Feb 18, 2026",
    description: "Comunidad - Próximamente",
    tokenId: null,
    dropId: null,
    status: "pending",
    collectors: 0,
    image: null
  },
  {
    session: 6,
    name: "Vibe Coding Bootcamp S6",
    date: "Feb 20, 2026",
    description: "Demo Day - Próximamente",
    tokenId: null,
    dropId: null,
    status: "pending",
    collectors: 0,
    image: null
  },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <span className="inline-flex items-center gap-2 px-3 md:px-4 py-2 rounded-full bg-[#1a1a1a] text-gray-400 text-xs md:text-sm mb-4 md:mb-6 border border-[#333]">
              <BarChart3 className="w-3 h-3 md:w-4 md:h-4" />
              Reporte Actualizado • 17 Feb 2026
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6">
              <span className="text-white">VibeCoding: </span>
              <span className="text-orange-500">De Idea a App</span>
              <br />
              <span className="text-white">en 2 semanas con IA</span>
            </h1>
            <p className="text-base md:text-xl text-gray-400 max-w-2xl mx-auto px-4">
              Reporte general de métricas y progreso del bootcamp
            </p>
          </div>

          {/* Stats Grid - CLICKABLE */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mt-8 md:mt-12">
            <StatCard number="651" label="Visitas Web" icon={<Globe className="w-5 h-5 md:w-6 md:h-6 text-orange-500" />} href="/analytics" />
            <StatCard number="263" label="Usuarios Únicos" icon={<Users className="w-5 h-5 md:w-6 md:h-6 text-orange-500" />} href="/analytics" />
            <StatCard number="82" label="Inscripciones" icon={<FileText className="w-5 h-5 md:w-6 md:h-6 text-orange-500" />} href="/sessions" />
            <StatCard number="49K" label="Impresiones Twitter" icon={<Twitter className="w-5 h-5 md:w-6 md:h-6 text-orange-500" />} href="/twitter" />
          </div>
        </div>
      </section>

      {/* POAPs Section - NEW */}
      <section className="py-12 md:py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionTitle 
            title="POAPs Emitidos" 
            icon={<Award className="w-5 h-5 md:w-6 md:h-6 text-orange-500" />} 
            subtitle="Proof of Attendance Protocol • Coleccionables on-chain"
          />
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4 mt-6 md:mt-8">
            {poaps.map((poap) => (
              <PoapCard key={poap.session} poap={poap} />
            ))}
          </div>
        </div>
      </section>

      {/* Funnel Section */}
      <section className="py-12 md:py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionTitle title="Funnel de Conversión" icon={<TrendingUp className="w-5 h-5 md:w-6 md:h-6 text-orange-500" />} />
          
          <div className="bg-[#141414] border border-[#262626] rounded-xl md:rounded-2xl p-4 md:p-8 mt-6 md:mt-8">
            <div className="space-y-4 md:space-y-6">
              <FunnelStep number="651" label="Visitas web" percentage="100%" />
              <FunnelStep number="263" label="Usuarios únicos" percentage="40.4%" />
              <FunnelStep number="82" label="Inscripciones" percentage="31.2%" />
              <FunnelStep number="57" label="Activados" percentage="69.5%" />
              <FunnelStep number="40" label="Con progreso" percentage="70.2%" />
            </div>
          </div>
        </div>
      </section>

      {/* Web Analytics Section */}
      <Link href="/analytics" className="block">
        <section className="py-12 md:py-16 px-4 hover:bg-[#0f0f0f]/50 transition-colors cursor-pointer">
          <div className="max-w-6xl mx-auto">
            <SectionTitleWithArrow 
              title="Web Analytics" 
              icon={<Globe className="w-5 h-5 md:w-6 md:h-6 text-orange-500" />} 
              subtitle="Microsoft Clarity • Click para ver detalles" 
            />
            
            <div className="grid md:grid-cols-3 gap-4 md:gap-6 mt-6 md:mt-8">
              <MetricCard 
                title="Engagement" 
                icon={<Activity className="w-4 h-4 md:w-5 md:h-5 text-orange-500" />}
                items={[
                  { label: "Páginas/sesión", value: "3.17" },
                  { label: "Scroll promedio", value: "72.49%" },
                  { label: "Tiempo activo", value: "2:27" },
                ]} 
              />
              <MetricCard 
                title="Fuentes de Tráfico" 
                icon={<Target className="w-4 h-4 md:w-5 md:h-5 text-orange-500" />}
                items={[
                  { label: "Twitter", value: "62.6%" },
                  { label: "YouTube", value: "16.1%" },
                  { label: "Google", value: "4.3%" },
                ]} 
              />
              <MetricCard 
                title="Dispositivos" 
                icon={<Monitor className="w-4 h-4 md:w-5 md:h-5 text-orange-500" />}
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
        <section className="py-12 md:py-16 px-4 hover:bg-[#0f0f0f]/50 transition-colors cursor-pointer">
          <div className="max-w-6xl mx-auto">
            <SectionTitleWithArrow title="Sesiones del Bootcamp" icon={<GraduationCap className="w-5 h-5 md:w-6 md:h-6 text-orange-500" />} subtitle="Click para ver detalles" />
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-6 md:mt-8">
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
        <section className="py-12 md:py-16 px-4 hover:bg-[#0f0f0f]/50 transition-colors cursor-pointer">
          <div className="max-w-6xl mx-auto">
            <SectionTitleWithArrow 
              title="Métricas Twitter" 
              icon={<Twitter className="w-5 h-5 md:w-6 md:h-6 text-orange-500" />} 
              subtitle="49,109 impresiones • Click para ver detalles" 
            />
            
            <div className="grid md:grid-cols-2 gap-4 md:gap-6 mt-6 md:mt-8">
              <div className="bg-[#141414] border border-[#262626] rounded-xl md:rounded-2xl p-4 md:p-8">
                <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
                  <Trophy className="w-5 h-5 md:w-6 md:h-6 text-orange-500" />
                  <h3 className="text-lg md:text-xl font-semibold text-white">Top Comunidades</h3>
                </div>
                <div className="space-y-3 md:space-y-4">
                  <CommunityRow name="ETH Cinco de Mayo" impressions="2,820" />
                  <CommunityRow name="Ethereum México" impressions="1,759" />
                  <CommunityRow name="meximalist" impressions="1,241" />
                </div>
              </div>
              
              <div className="bg-[#141414] border border-[#262626] rounded-xl md:rounded-2xl p-4 md:p-8">
                <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
                  <Users className="w-5 h-5 md:w-6 md:h-6 text-orange-500" />
                  <h3 className="text-lg md:text-xl font-semibold text-white">Estudiantes Activos (27)</h3>
                </div>
                <div className="space-y-2 md:space-y-3">
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
      <section className="py-12 md:py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionTitle 
            title="Top Performers" 
            icon={<Medal className="w-5 h-5 md:w-6 md:h-6 text-orange-500" />} 
            subtitle="Estudiantes con mayor progreso" 
          />
          
          <div className="bg-[#141414] border border-[#262626] rounded-xl md:rounded-2xl p-4 md:p-8 mt-6 md:mt-8">
            <div className="space-y-2 md:space-y-4">
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
      <section className="py-12 md:py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionTitle title="Links Importantes" icon={<Link2 className="w-5 h-5 md:w-6 md:h-6 text-orange-500" />} />
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 mt-6 md:mt-8">
            <LinkCard title="Landing Page" url="https://bootcamp.frutero.club/" icon={<Globe className="w-4 h-4 md:w-5 md:h-5 text-orange-500" />} />
            <LinkCard title="Canal YouTube" url="https://www.youtube.com/@fruterotv" icon={<Youtube className="w-4 h-4 md:w-5 md:h-5 text-red-500" />} />
            <LinkCard title="Microsoft Clarity" url="https://clarity.microsoft.com/projects/view/v88xp2n5qs/dashboard" icon={<PieChart className="w-4 h-4 md:w-5 md:h-5 text-orange-500" />} />
            <LinkCard title="Métricas Twitter" url="https://docs.google.com/spreadsheets/d/1IR9E70JuFQyE-WiCGs4ziZHBaSyQwysdkHtV0JK2UPE/edit" icon={<Twitter className="w-4 h-4 md:w-5 md:h-5 text-orange-500" />} />
            <LinkCard title="Lista Estudiantes" url="https://docs.google.com/spreadsheets/d/1BaaSr97v1osRpfvHCe9c5CPNLvd0_MukXGzr-s1FErM/edit" icon={<Users className="w-4 h-4 md:w-5 md:h-5 text-orange-500" />} />
            <LinkCard title="Entregables" url="https://poktapok-iaegp4wrg-fruteroclub.vercel.app/bootcamp/vibecoding" icon={<FileText className="w-4 h-4 md:w-5 md:h-5 text-orange-500" />} />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 md:py-12 px-4 border-t border-[#262626]">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400 text-sm md:text-base">
            Generado por <span className="text-orange-500">Fruterito</span> 🍓
          </p>
          <p className="text-gray-500 text-xs md:text-sm mt-2">
            VibeCoding Bootcamp • Frutero Club 2026
          </p>
        </div>
      </footer>
    </main>
  );
}

// POAP Card Component - No background
function PoapCard({ poap }: { poap: typeof poaps[0] }) {
  const isPending = poap.status === "pending";
  
  const content = (
    <div className="text-center transition-all group p-2">
      
      {/* POAP Image */}
      <div className="relative w-20 h-20 md:w-24 md:h-24 mx-auto mb-2 md:mb-3">
        {poap.image ? (
          <img 
            src={poap.image} 
            alt={poap.name}
            className="w-full h-full rounded-full object-cover"
          />
        ) : (
          <div className="w-full h-full rounded-full bg-[#1a1a1a] border-2 border-dashed border-orange-500/30 flex items-center justify-center">
            <Clock className="w-8 h-8 text-orange-500/50" />
          </div>
        )}
        
        {/* Status Badge */}
        <div className={"absolute -bottom-1 -right-1 w-6 h-6 md:w-7 md:h-7 rounded-full flex items-center justify-center " +
          (isPending ? "bg-[#0a0a0a] border-2 border-orange-500" : "bg-[#0a0a0a] border-2 border-green-500")}>
          {isPending ? (
            <Clock className="w-3 h-3 text-orange-500" />
          ) : (
            <CheckCircle className="w-3 h-3 text-green-500" />
          )}
        </div>
      </div>
      
      {/* Info */}
      <p className="text-orange-500 text-xs font-medium">S{poap.session}</p>
      <p className="text-gray-500 text-xs mt-1">{poap.date.split(", ")[0]}</p>
      
      {!isPending && (
        <p className="text-gray-400 text-xs mt-1">{poap.collectors} collectors</p>
      )}
    </div>
  );
  
  if (isPending) {
    return content;
  }
  
  return (
    <a 
      href={"https://collectors.poap.xyz/token/" + poap.tokenId}
      target="_blank"
      rel="noopener noreferrer"
      className="hover:scale-105 transition-transform"
    >
      {content}
    </a>
  );
}

