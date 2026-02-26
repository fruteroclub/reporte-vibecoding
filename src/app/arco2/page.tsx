import { Metadata } from "next";
import Link from "next/link";
import { 
  Flame, Users, Calendar, CheckCircle, Clock, 
  Target, BarChart3, Youtube, MessageCircle,
  User, Trophy, AlertCircle
} from "lucide-react";
import {
  StatCard, SectionTitle, ArcoTabs
} from "@/components/SharedComponents";

export const metadata: Metadata = {
  title: "ARCO 2 - La Forja | VibeCoding Bootcamp",
  description: "1 semana para lanzar TU producto - Mentoría 1:1",
};

// Participantes data
const participantes = [
  { handle: "@S4kurak", mentor: "Mel", proyecto: "TBD", status: "pending" },
  { handle: "@wairamoon", mentor: "Brian", proyecto: "TBD", status: "pending" },
  { handle: "@Whitehatcryptoedd", mentor: "Scarf", proyecto: "TBD", status: "pending" },
  { handle: "@LokiyIsaac", mentor: "Mel", proyecto: "TBD", status: "pending" },
  { handle: "@sergiotechx", mentor: "Mel", proyecto: "TBD", status: "pending" },
  { handle: "@esdras_josue", mentor: "Brian", proyecto: "TBD", status: "pending" },
  { handle: "@BBPMW", mentor: "Scarf", proyecto: "TBD", status: "pending" },
  { handle: "@ToryDom", mentor: "Brian", proyecto: "TBD", status: "pending" },
  { handle: "@eeelien39", mentor: "Scarf", proyecto: "TBD", status: "pending" },
  { handle: "@Alan_BK_Breck", mentor: "Vale", proyecto: "TBD", status: "pending" },
  { handle: "@j4rias", mentor: "Vale", proyecto: "TBD", status: "pending" },
  { handle: "@DanielRubio_Web3", mentor: "Vale", proyecto: "TBD", status: "pending" },
];

const mentores = [
  { name: "Brian", participantes: 3, color: "text-orange-500" },
  { name: "Mel", participantes: 3, color: "text-pink-500" },
  { name: "Scarf", participantes: 3, color: "text-green-500" },
  { name: "Vale", participantes: 3, color: "text-blue-500" },
];

const calendario = [
  { dia: "Lun", fecha: "23 Feb", actividad: "🎬 Live Apertura", status: "completed" },
  { dia: "Mar-Sáb", fecha: "24-28 Feb", actividad: "🛠️ Building + Soporte 1:1", status: "active" },
  { dia: "Dom", fecha: "1 Mar", actividad: "🛠️ Building libre", status: "pending" },
  { dia: "Lun", fecha: "2 Mar", actividad: "🎤 Demo Day", status: "pending" },
];

const checkpoints = [
  { num: 1, name: "Idea Definida", dia: "Lun 23", desc: "Claridad del proyecto" },
  { num: 2, name: "Setup Técnico", dia: "Mar 24", desc: "Repo + proyecto corriendo" },
  { num: 3, name: "MVP Funcional", dia: "Jue 26", desc: "Feature principal funciona" },
  { num: 4, name: "Deploy Listo", dia: "Sáb 28", desc: "URL pública accesible" },
  { num: 5, name: "Demo Ready", dia: "Dom 1", desc: "Pitch + demo ensayado" },
];

export default function Arco2Page() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            {/* ARCO Tabs */}
            <ArcoTabs active="arco2" />
            
            <span className="inline-flex items-center gap-2 px-3 md:px-4 py-2 rounded-full bg-orange-500/10 text-orange-500 text-xs md:text-sm mb-4 md:mb-6 border border-orange-500/20">
              <Flame className="w-3 h-3 md:w-4 md:h-4" />
              En Progreso • 23 Feb - 2 Mar 2026
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6">
              <span className="text-white">ARCO 2: </span>
              <span className="text-orange-500">La Forja</span>
            </h1>
            <p className="text-base md:text-xl text-gray-400 max-w-2xl mx-auto px-4">
              1 semana para lanzar TU producto con mentoría 1:1
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mt-8 md:mt-12">
            <StatCard number="12" label="Participantes" icon={<Users className="w-5 h-5 md:w-6 md:h-6 text-orange-500" />} />
            <StatCard number="4" label="Mentores" icon={<User className="w-5 h-5 md:w-6 md:h-6 text-orange-500" />} />
            <StatCard number="1:1" label="Formato" icon={<MessageCircle className="w-5 h-5 md:w-6 md:h-6 text-orange-500" />} />
            <StatCard number="5" label="Checkpoints" icon={<Target className="w-5 h-5 md:w-6 md:h-6 text-orange-500" />} />
          </div>
        </div>
      </section>

      {/* Calendario Section */}
      <section className="py-12 md:py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionTitle 
            title="Calendario" 
            icon={<Calendar className="w-5 h-5 md:w-6 md:h-6 text-orange-500" />}
          />
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6 md:mt-8">
            {calendario.map((item, i) => (
              <div 
                key={i}
                className={`bg-[#141414] border rounded-xl p-4 md:p-6 ${
                  item.status === "completed" ? "border-green-500/30" :
                  item.status === "active" ? "border-orange-500/50" :
                  "border-[#262626]"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-orange-500 text-sm font-medium">{item.dia}</span>
                  {item.status === "completed" && <CheckCircle className="w-4 h-4 text-green-500" />}
                  {item.status === "active" && <Flame className="w-4 h-4 text-orange-500 animate-pulse" />}
                  {item.status === "pending" && <Clock className="w-4 h-4 text-gray-500" />}
                </div>
                <p className="text-gray-500 text-xs mb-2">{item.fecha}</p>
                <p className="text-white font-medium text-sm md:text-base">{item.actividad}</p>
              </div>
            ))}
          </div>

          {/* Live Apertura Link */}
          <div className="mt-6 text-center">
            <a 
              href="https://www.youtube.com/watch?v=_4hKdJ-uTwU&t=3s"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 text-red-500 rounded-full text-sm hover:bg-red-500/20 transition-colors"
            >
              <Youtube className="w-4 h-4" />
              Ver Live de Apertura
            </a>
          </div>
        </div>
      </section>

      {/* Checkpoints Section */}
      <section className="py-12 md:py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionTitle 
            title="Sistema de Checkpoints" 
            icon={<Target className="w-5 h-5 md:w-6 md:h-6 text-orange-500" />}
            subtitle="5 etapas para medir el progreso"
          />
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 mt-6 md:mt-8">
            {checkpoints.map((cp) => (
              <div 
                key={cp.num}
                className="bg-[#141414] border border-[#262626] rounded-xl p-4 text-center hover:border-orange-500/30 transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center mx-auto mb-3">
                  <span className="text-orange-500 font-bold">{cp.num}</span>
                </div>
                <h3 className="text-white font-medium text-sm mb-1">{cp.name}</h3>
                <p className="text-orange-500 text-xs mb-2">{cp.dia}</p>
                <p className="text-gray-500 text-xs">{cp.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mentores Section */}
      <section className="py-12 md:py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionTitle 
            title="Mentores" 
            icon={<Trophy className="w-5 h-5 md:w-6 md:h-6 text-orange-500" />}
            subtitle="4 mentores • 3 participantes cada uno"
          />
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-6 md:mt-8">
            {mentores.map((mentor) => (
              <div 
                key={mentor.name}
                className="bg-[#141414] border border-[#262626] rounded-xl p-4 md:p-6 text-center"
              >
                <div className={`text-2xl md:text-3xl font-bold ${mentor.color} mb-2`}>
                  {mentor.name}
                </div>
                <p className="text-gray-400 text-sm">
                  {mentor.participantes} participantes
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Participantes Section */}
      <section className="py-12 md:py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionTitle 
            title="Participantes" 
            icon={<Users className="w-5 h-5 md:w-6 md:h-6 text-orange-500" />}
            subtitle="12 builders confirmados"
          />
          
          <div className="bg-[#141414] border border-[#262626] rounded-xl md:rounded-2xl p-4 md:p-8 mt-6 md:mt-8">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[#262626]">
                    <th className="text-left text-gray-400 text-xs md:text-sm font-medium py-3 px-2">Participante</th>
                    <th className="text-left text-gray-400 text-xs md:text-sm font-medium py-3 px-2">Mentor</th>
                    <th className="text-left text-gray-400 text-xs md:text-sm font-medium py-3 px-2 hidden sm:table-cell">Proyecto</th>
                    <th className="text-center text-gray-400 text-xs md:text-sm font-medium py-3 px-2">Estado</th>
                  </tr>
                </thead>
                <tbody>
                  {participantes.map((p, i) => (
                    <tr key={i} className="border-b border-[#262626] last:border-0">
                      <td className="text-orange-500 text-sm md:text-base py-3 px-2">{p.handle}</td>
                      <td className="text-gray-300 text-sm md:text-base py-3 px-2">{p.mentor}</td>
                      <td className="text-gray-500 text-sm md:text-base py-3 px-2 hidden sm:table-cell">{p.proyecto}</td>
                      <td className="text-center py-3 px-2">
                        <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs bg-orange-500/10 text-orange-500 border border-orange-500/20">
                          <Clock className="w-3 h-3" />
                          <span className="hidden sm:inline">Pendiente</span>
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Pendientes Section */}
      <section className="py-12 md:py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionTitle 
            title="Pendientes" 
            icon={<AlertCircle className="w-5 h-5 md:w-6 md:h-6 text-orange-500" />}
          />
          
          <div className="bg-[#141414] border border-[#262626] rounded-xl md:rounded-2xl p-4 md:p-8 mt-6 md:mt-8">
            <div className="space-y-3">
              <PendienteItem text="Definir fecha exacta Demo Day" priority="high" />
              <PendienteItem text="Check-ins con participantes - Verificar Checkpoint 1" priority="high" />
              <PendienteItem text="Registrar proyectos de cada participante" priority="medium" />
              <PendienteItem text="Tracking de checkpoints activo" priority="medium" />
            </div>
          </div>
        </div>
      </section>

      {/* Links Section */}
      <section className="py-12 md:py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            <a 
              href="https://www.youtube.com/watch?v=_4hKdJ-uTwU&t=3s"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#141414] border border-[#262626] rounded-full text-sm text-gray-300 hover:border-orange-500/50 transition-colors"
            >
              <Youtube className="w-4 h-4 text-red-500" />
              Live Apertura
            </a>
            <a 
              href="https://t.me/+v2barwDisNAwMTRh"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#141414] border border-[#262626] rounded-full text-sm text-gray-300 hover:border-orange-500/50 transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-blue-500" />
              Telegram
            </a>
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
            VibeCoding Bootcamp ARCO 2 • Frutero Club 2026
          </p>
        </div>
      </footer>
    </main>
  );
}

// Pendiente Item Component
function PendienteItem({ text, priority }: { text: string; priority: "high" | "medium" | "low" }) {
  const colors = {
    high: "border-red-500/30 bg-red-500/5",
    medium: "border-orange-500/30 bg-orange-500/5",
    low: "border-gray-500/30 bg-gray-500/5",
  };
  
  return (
    <div className={`flex items-center gap-3 p-3 rounded-lg border ${colors[priority]}`}>
      <div className={`w-2 h-2 rounded-full ${
        priority === "high" ? "bg-red-500" :
        priority === "medium" ? "bg-orange-500" : "bg-gray-500"
      }`} />
      <span className="text-gray-300 text-sm md:text-base">{text}</span>
    </div>
  );
}
