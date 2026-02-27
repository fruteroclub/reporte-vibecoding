"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { 
  Flame, Users, Calendar, CheckCircle, Clock, 
  Target, BarChart3, Youtube, MessageCircle,
  User, Trophy, AlertCircle
} from "lucide-react";
import {
  StatCard, SectionTitle, ArcoTabs
} from "@/components/SharedComponents";

// Participantes data inicial
// cp = [cp1, cp2, cp3, cp4, cp5] donde: 0=pending, 1=done, 2=blocked
const participantesInicial = [
  { handle: "@S4kurak", mentor: "Mel", proyecto: "TBD", cp: [0,0,0,0,0] },
  { handle: "@wairamoon", mentor: "Brian", proyecto: "TBD", cp: [0,0,0,0,0] },
  { handle: "@Whitehatcryptoedd", mentor: "Scarf", proyecto: "TBD", cp: [0,0,0,0,0] },
  { handle: "@LokiyIsaac", mentor: "Mel", proyecto: "TBD", cp: [0,0,0,0,0] },
  { handle: "@sergiotechx", mentor: "Mel", proyecto: "TBD", cp: [0,0,0,0,0] },
  { handle: "@esdras_josue", mentor: "Brian", proyecto: "TBD", cp: [0,0,0,0,0] },
  { handle: "@BBPMW", mentor: "Scarf", proyecto: "TBD", cp: [0,0,0,0,0] },
  { handle: "@ToryDom", mentor: "Brian", proyecto: "TBD", cp: [0,0,0,0,0] },
  { handle: "@eeelien39", mentor: "Scarf", proyecto: "TBD", cp: [0,0,0,0,0] },
  { handle: "@Alan_BK_Breck", mentor: "Vale", proyecto: "TBD", cp: [0,0,0,0,0] },
  { handle: "@j4rias", mentor: "Vale", proyecto: "TBD", cp: [0,0,0,0,0] },
  { handle: "@DanielRubio_Web3", mentor: "Vale", proyecto: "TBD", cp: [0,0,0,0,0] },
];

type Participante = typeof participantesInicial[0];

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
  { dia: "Lun", fecha: "2 Mar", actividad: "🎤 Demo Day (YouTube Live)", status: "pending" },
];

const checkpoints = [
  { num: 1, name: "Idea Definida", dia: "Lun 23", desc: "Claridad del proyecto" },
  { num: 2, name: "Setup Técnico", dia: "Mar 24", desc: "Repo + proyecto corriendo" },
  { num: 3, name: "MVP Funcional", dia: "Jue 26", desc: "Feature principal funciona" },
  { num: 4, name: "Deploy Listo", dia: "Sáb 28", desc: "URL pública accesible" },
  { num: 5, name: "Demo Ready", dia: "Dom 1", desc: "Pitch + demo ensayado" },
];

export default function Arco2Page() {
  const [participantes, setParticipantes] = useState<Participante[]>(participantesInicial);
  const [isLoaded, setIsLoaded] = useState(false);

  // Cargar estado de localStorage al iniciar
  useEffect(() => {
    const saved = localStorage.getItem('arco2-checkpoints');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setParticipantes(parsed);
      } catch (e) {
        console.error('Error loading saved state');
      }
    }
    setIsLoaded(true);
  }, []);

  // Guardar en localStorage cuando cambian los checkpoints
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem('arco2-checkpoints', JSON.stringify(participantes));
    }
  }, [participantes, isLoaded]);

  // Función para cambiar estado de checkpoint
  const toggleCheckpoint = (participanteIdx: number, cpIdx: number) => {
    setParticipantes(prev => {
      const updated = [...prev];
      const currentStatus = updated[participanteIdx].cp[cpIdx];
      // Ciclo: 0 (pending) → 1 (done) → 2 (blocked) → 0
      const newStatus = (currentStatus + 1) % 3;
      updated[participanteIdx] = {
        ...updated[participanteIdx],
        cp: updated[participanteIdx].cp.map((s, i) => i === cpIdx ? newStatus : s)
      };
      return updated;
    });
  };

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
            <p className="text-sm text-orange-500/70 mt-2">
              Meta: producto deployed + 10 usuarios reales
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
                    <th className="text-center text-gray-400 text-xs md:text-sm font-medium py-3 px-2">Checkpoints</th>
                  </tr>
                </thead>
                <tbody>
                  {participantes.map((p, i) => (
                    <tr key={i} className="border-b border-[#262626] last:border-0">
                      <td className="text-orange-500 text-sm md:text-base py-3 px-2">{p.handle}</td>
                      <td className="text-gray-300 text-sm md:text-base py-3 px-2">{p.mentor}</td>
                      <td className="text-gray-500 text-sm md:text-base py-3 px-2 hidden sm:table-cell">{p.proyecto}</td>
                      <td className="text-center py-3 px-2">
                        <div className="flex items-center justify-center gap-1">
                          {p.cp.map((status, idx) => (
                            <CheckpointDot 
                              key={idx} 
                              status={status} 
                              num={idx + 1} 
                              onClick={() => toggleCheckpoint(i, idx)}
                            />
                          ))}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            {/* Legend + Instructions */}
            <div className="mt-4 pt-4 border-t border-[#262626]">
              <p className="text-center text-orange-500 text-sm font-medium mb-3">
                👆 Click en los números para cambiar estado
              </p>
              <div className="flex items-center justify-center gap-4">
                <div className="flex items-center gap-1 text-xs text-gray-500">
                  <div className="w-3 h-3 rounded-full bg-gray-600" /> Pendiente
                </div>
                <div className="flex items-center gap-1 text-xs text-gray-500">
                  <div className="w-3 h-3 rounded-full bg-green-500" /> Completado
                </div>
                <div className="flex items-center gap-1 text-xs text-gray-500">
                  <div className="w-3 h-3 rounded-full bg-red-500" /> Bloqueado
                </div>
              </div>
              <p className="text-center text-gray-600 text-xs mt-2">
                Los cambios se guardan automáticamente en tu navegador
              </p>
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
              <PendienteItem text="Check-ins con participantes - Verificar ideas y checkpoints" priority="high" />
              <PendienteItem text="Registrar proyectos de cada participante" priority="high" />
              <PendienteItem text="Confirmar 3 participantes asignados a Vale" priority="medium" />
              <PendienteItem text="Tracking de checkpoints activo" priority="medium" />
              <PendienteItem text="Pre-demo review (1 Mar)" priority="medium" />
              <PendienteItem text="Demo Day — Lunes 2 Mar (YouTube Live)" priority="medium" />
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

// Checkpoint Dot Component - CLICKEABLE
function CheckpointDot({ status, num, onClick }: { status: number; num: number; onClick: () => void }) {
  // status: 0=pending, 1=done, 2=blocked
  const colors = {
    0: "bg-gray-600 hover:bg-gray-400",
    1: "bg-green-500 hover:bg-green-400",
    2: "bg-red-500 hover:bg-red-400",
  };
  
  const statusText = status === 0 ? 'Pendiente' : status === 1 ? 'Completado' : 'Bloqueado';
  
  return (
    <button 
      onClick={onClick}
      className={`w-6 h-6 md:w-7 md:h-7 rounded-full flex items-center justify-center text-[10px] md:text-xs font-bold transition-all cursor-pointer hover:scale-110 active:scale-95 ${colors[status as keyof typeof colors] || colors[0]} text-white shadow-lg`}
      title={`CP${num}: ${statusText} (click para cambiar)`}
    >
      {num}
    </button>
  );
}
