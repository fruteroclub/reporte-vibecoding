"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { 
  Flame, Users, Calendar, CheckCircle, Clock, 
  Target, BarChart3, Youtube, MessageCircle,
  User, Trophy, AlertCircle, ChevronDown, ChevronUp,
  Github, ExternalLink, FileText
} from "lucide-react";
import {
  StatCard, SectionTitle, ArcoTabs
} from "@/components/SharedComponents";
import PendientesArco2 from "@/components/PendientesArco2";

// Participantes data inicial
// cp = [cp1, cp2, cp3, cp4, cp5] donde: 0=pending, 1=done, 2=blocked
const participantesInicial = [
  { handle: "@S4kurak", mentor: "Mel", proyecto: "TBD", cp: [0,0,0,0,0], github: "", vercel: "", notas: "" },
  { handle: "@wairamoon", mentor: "Brian", proyecto: "TBD", cp: [0,0,0,0,0], github: "", vercel: "", notas: "" },
  { handle: "@Whitehatcryptoedd", mentor: "Scarf", proyecto: "TBD", cp: [0,0,0,0,0], github: "", vercel: "", notas: "" },
  { handle: "@LokiyIsaac", mentor: "Mel", proyecto: "TBD", cp: [0,0,0,0,0], github: "", vercel: "", notas: "" },
  { handle: "@sergiotechx", mentor: "Mel", proyecto: "TBD", cp: [0,0,0,0,0], github: "", vercel: "", notas: "" },
  { handle: "@esdras_josue", mentor: "Brian", proyecto: "TBD", cp: [0,0,0,0,0], github: "", vercel: "", notas: "" },
  { handle: "@BBPMW", mentor: "Scarf", proyecto: "TBD", cp: [0,0,0,0,0], github: "", vercel: "", notas: "" },
  { handle: "@ToryDom", mentor: "Brian", proyecto: "TBD", cp: [0,0,0,0,0], github: "", vercel: "", notas: "" },
  { handle: "@eeelien39", mentor: "Scarf", proyecto: "TBD", cp: [0,0,0,0,0], github: "", vercel: "", notas: "" },
  { handle: "@Alan_BK_Breck", mentor: "Vale", proyecto: "TBD", cp: [0,0,0,0,0], github: "", vercel: "", notas: "" },
  { handle: "@j4rias", mentor: "Vale", proyecto: "TBD", cp: [0,0,0,0,0], github: "", vercel: "", notas: "" },
  { handle: "@DanielRubio_Web3", mentor: "Vale", proyecto: "TBD", cp: [0,0,0,0,0], github: "", vercel: "", notas: "" },
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
  { 
    num: 1, 
    name: "Idea Definida", 
    dia: "Lun 23", 
    desc: "Claridad del proyecto",
    detalle: {
      objetivo: "Verificar claridad del proyecto",
      criterios: [
        "Puede explicar su idea en 1 frase",
        "Sabe qué problema resuelve",
        "Tiene usuario target identificado",
        "Scope realista para 1 semana"
      ],
      preguntas: [
        "¿Qué vas a construir? (1 frase)",
        "¿Para quién es?",
        "¿Qué problema resuelve?",
        "¿Qué es lo MÍNIMO que debe hacer para el Demo Day?"
      ],
      evidencia: "Respuestas claras a las 4 preguntas"
    }
  },
  { 
    num: 2, 
    name: "Setup Técnico", 
    dia: "Mar 24", 
    desc: "Repo + proyecto corriendo",
    detalle: {
      objetivo: "Capacidad de arrancar",
      criterios: [
        "Repo creado (GitHub/GitLab)",
        "Proyecto inicializado y corre local",
        "Stack definido claramente",
        "Primera página/componente existe"
      ],
      preguntas: [
        "¿Cuál es el link de tu repo?",
        "¿El proyecto corre sin errores?",
        "¿Qué tecnologías estás usando?",
        "¿Tienes la primera pantalla?"
      ],
      evidencia: "Link al repo + Screenshot corriendo local"
    }
  },
  { 
    num: 3, 
    name: "MVP Funcional", 
    dia: "Jue 26", 
    desc: "Feature principal funciona",
    detalle: {
      objetivo: "Progreso real de código",
      criterios: [
        "Feature principal existe y funciona",
        "Datos persisten (DB/localStorage)",
        "Se puede usar el flow completo",
        "Sin errores críticos"
      ],
      preguntas: [
        "¿Cuál es tu feature principal?",
        "¿Los datos se guardan?",
        "¿Puedo usarlo de inicio a fin?",
        "¿Qué falta para estar listo?"
      ],
      evidencia: "Demo en video o pantalla compartida (2 min)"
    }
  },
  { 
    num: 4, 
    name: "Deploy Listo", 
    dia: "Sáb 28", 
    desc: "URL pública accesible",
    detalle: {
      objetivo: "Producto accesible públicamente",
      criterios: [
        "Deployed en internet (URL funciona)",
        "Sin errores en producción",
        "Accesible sin setup especial",
        "Link compartible listo"
      ],
      preguntas: [
        "¿Cuál es tu URL de producción?",
        "¿Funciona sin errores?",
        "¿Cualquiera puede usarlo?",
        "¿El link es público?"
      ],
      evidencia: "URL deployed + Screenshot funcionando en producción"
    }
  },
  { 
    num: 5, 
    name: "Demo Ready", 
    dia: "Dom 1", 
    desc: "Pitch + demo ensayado",
    detalle: {
      objetivo: "Preparación para presentar",
      criterios: [
        "Pitch preparado (sabe qué decir)",
        "Demo ensayado y fluido",
        "Tiempo controlado (~5 min)",
        "Producto estable (no crashea)"
      ],
      preguntas: [
        "¿Puedes explicar qué construiste en 30 seg?",
        "¿El demo funciona sin sorpresas?",
        "¿Qué aprendiste? (1-2 puntos)",
        "¿Qué sigue después del Demo Day?"
      ],
      evidencia: "Ensayo del pitch completo"
    }
  },
];

export default function Arco2Page() {
  const [participantes, setParticipantes] = useState<Participante[]>(participantesInicial);
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedCheckpoint, setSelectedCheckpoint] = useState<number | null>(null);
  const [expandedParticipant, setExpandedParticipant] = useState<number | null>(null);

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

  // Función para actualizar campo de participante
  const updateParticipante = (idx: number, field: keyof Participante, value: string) => {
    setParticipantes(prev => {
      const updated = [...prev];
      updated[idx] = { ...updated[idx], [field]: value };
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
            subtitle="5 etapas para medir el progreso — Click para ver detalles"
          />
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 mt-6 md:mt-8">
            {checkpoints.map((cp) => (
              <button 
                key={cp.num}
                onClick={() => setSelectedCheckpoint(cp.num)}
                className="bg-[#141414] border border-[#262626] rounded-xl p-4 text-center hover:border-orange-500/50 hover:bg-[#1a1a1a] transition-all cursor-pointer hover:scale-105 active:scale-95"
              >
                <div className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center mx-auto mb-3">
                  <span className="text-orange-500 font-bold">{cp.num}</span>
                </div>
                <h3 className="text-white font-medium text-sm mb-1">{cp.name}</h3>
                <p className="text-orange-500 text-xs mb-2">{cp.dia}</p>
                <p className="text-gray-500 text-xs">{cp.desc}</p>
                <p className="text-orange-500/50 text-[10px] mt-2">👆 Click para detalles</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Checkpoint Modal */}
      {selectedCheckpoint !== null && (
        <CheckpointModal 
          checkpoint={checkpoints[selectedCheckpoint - 1]} 
          onClose={() => setSelectedCheckpoint(null)} 
        />
      )}

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

      {/* Participantes Section - EXPANDIBLE */}
      <section className="py-12 md:py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionTitle 
            title="Participantes" 
            icon={<Users className="w-5 h-5 md:w-6 md:h-6 text-orange-500" />}
            subtitle="12 builders — Click en fila para expandir detalles"
          />
          
          <div className="bg-[#141414] border border-[#262626] rounded-xl md:rounded-2xl p-4 md:p-6 mt-6 md:mt-8">
            <div className="space-y-2">
              {participantes.map((p, i) => (
                <div key={i} className="border border-[#262626] rounded-lg overflow-hidden">
                  {/* Fila principal - clickeable */}
                  <button
                    onClick={() => setExpandedParticipant(expandedParticipant === i ? null : i)}
                    className="w-full flex items-center justify-between p-3 md:p-4 hover:bg-[#1a1a1a] transition-colors text-left"
                  >
                    <div className="flex items-center gap-4 flex-1">
                      <span className="text-orange-500 font-medium text-sm md:text-base min-w-[140px]">{p.handle}</span>
                      <span className="text-gray-400 text-sm hidden sm:block">{p.mentor}</span>
                      <span className="text-gray-500 text-sm hidden md:block truncate max-w-[150px]">{p.proyecto}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1">
                        {p.cp.map((status, idx) => (
                          <div
                            key={idx}
                            className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                              status === 0 ? "bg-gray-600" : status === 1 ? "bg-green-500" : "bg-red-500"
                            } text-white`}
                          >
                            {idx + 1}
                          </div>
                        ))}
                      </div>
                      {expandedParticipant === i ? (
                        <ChevronUp className="w-5 h-5 text-orange-500" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-500" />
                      )}
                    </div>
                  </button>

                  {/* Panel expandido */}
                  {expandedParticipant === i && (
                    <div className="p-4 md:p-6 bg-[#0a0a0a] border-t border-[#262626] space-y-4">
                      {/* Proyecto */}
                      <div>
                        <label className="text-gray-400 text-xs mb-1 block">Proyecto</label>
                        <input
                          type="text"
                          value={p.proyecto}
                          onChange={(e) => updateParticipante(i, 'proyecto', e.target.value)}
                          placeholder="Nombre del proyecto..."
                          className="w-full bg-[#141414] border border-[#262626] rounded-lg px-3 py-2 text-white text-sm focus:border-orange-500 outline-none"
                        />
                      </div>

                      {/* GitHub + Vercel */}
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="text-gray-400 text-xs mb-1 flex items-center gap-1">
                            <Github className="w-3 h-3" /> GitHub
                          </label>
                          <input
                            type="url"
                            value={p.github}
                            onChange={(e) => updateParticipante(i, 'github', e.target.value)}
                            placeholder="https://github.com/..."
                            className="w-full bg-[#141414] border border-[#262626] rounded-lg px-3 py-2 text-white text-sm focus:border-orange-500 outline-none"
                          />
                        </div>
                        <div>
                          <label className="text-gray-400 text-xs mb-1 flex items-center gap-1">
                            <ExternalLink className="w-3 h-3" /> Vercel URL
                          </label>
                          <input
                            type="url"
                            value={p.vercel}
                            onChange={(e) => updateParticipante(i, 'vercel', e.target.value)}
                            placeholder="https://proyecto.vercel.app"
                            className="w-full bg-[#141414] border border-[#262626] rounded-lg px-3 py-2 text-white text-sm focus:border-orange-500 outline-none"
                          />
                        </div>
                      </div>

                      {/* Notas */}
                      <div>
                        <label className="text-gray-400 text-xs mb-1 flex items-center gap-1">
                          <FileText className="w-3 h-3" /> Notas del mentor
                        </label>
                        <textarea
                          value={p.notas}
                          onChange={(e) => updateParticipante(i, 'notas', e.target.value)}
                          placeholder="Notas privadas sobre el progreso..."
                          rows={2}
                          className="w-full bg-[#141414] border border-[#262626] rounded-lg px-3 py-2 text-white text-sm focus:border-orange-500 outline-none resize-none"
                        />
                      </div>

                      {/* Checkpoints clickeables */}
                      <div>
                        <label className="text-gray-400 text-xs mb-2 block">Checkpoints (click para cambiar)</label>
                        <div className="flex items-center gap-2">
                          {p.cp.map((status, idx) => (
                            <CheckpointDot 
                              key={idx} 
                              status={status} 
                              num={idx + 1} 
                              onClick={() => toggleCheckpoint(i, idx)}
                            />
                          ))}
                        </div>
                      </div>

                      {/* Links rápidos */}
                      {(p.github || p.vercel) && (
                        <div className="flex gap-2 pt-2 border-t border-[#262626]">
                          {p.github && (
                            <a 
                              href={p.github} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 px-3 py-1 bg-[#141414] rounded-lg text-xs text-gray-300 hover:text-white"
                            >
                              <Github className="w-3 h-3" /> Ver repo
                            </a>
                          )}
                          {p.vercel && (
                            <a 
                              href={p.vercel} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 px-3 py-1 bg-orange-500/10 rounded-lg text-xs text-orange-400 hover:text-orange-300"
                            >
                              <ExternalLink className="w-3 h-3" /> Ver deploy
                            </a>
                          )}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            {/* Legend */}
            <div className="mt-4 pt-4 border-t border-[#262626]">
              <div className="flex items-center justify-center gap-4 flex-wrap">
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

      {/* Pendientes Section — Interactive */}
      <PendientesArco2 />

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

// Checkpoint Modal Component
function CheckpointModal({ checkpoint, onClose }: { 
  checkpoint: typeof checkpoints[0]; 
  onClose: () => void;
}) {
  return (
    <div 
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div 
        className="bg-[#141414] border border-[#262626] rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b border-[#262626] flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center">
              <span className="text-orange-500 font-bold text-xl">{checkpoint.num}</span>
            </div>
            <div>
              <h2 className="text-white font-bold text-xl">{checkpoint.name}</h2>
              <p className="text-orange-500 text-sm">{checkpoint.dia}</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-white transition-colors text-2xl"
          >
            ×
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Objetivo */}
          <div>
            <h3 className="text-orange-500 font-semibold mb-2 flex items-center gap-2">
              <Target className="w-4 h-4" /> Objetivo
            </h3>
            <p className="text-gray-300">{checkpoint.detalle.objetivo}</p>
          </div>

          {/* Criterios */}
          <div>
            <h3 className="text-orange-500 font-semibold mb-3 flex items-center gap-2">
              <CheckCircle className="w-4 h-4" /> Criterios de Cumplimiento
            </h3>
            <div className="space-y-2">
              {checkpoint.detalle.criterios.map((criterio, i) => (
                <div key={i} className="flex items-start gap-2 bg-[#1a1a1a] p-3 rounded-lg">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span className="text-gray-300 text-sm">{criterio}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Preguntas */}
          <div>
            <h3 className="text-orange-500 font-semibold mb-3 flex items-center gap-2">
              <MessageCircle className="w-4 h-4" /> Preguntas de Verificación
            </h3>
            <div className="space-y-2">
              {checkpoint.detalle.preguntas.map((pregunta, i) => (
                <div key={i} className="flex items-start gap-2 bg-[#1a1a1a] p-3 rounded-lg">
                  <span className="text-orange-500 font-bold">{i + 1}.</span>
                  <span className="text-gray-300 text-sm">{pregunta}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Evidencia */}
          <div>
            <h3 className="text-orange-500 font-semibold mb-2 flex items-center gap-2">
              <BarChart3 className="w-4 h-4" /> Evidencia Requerida
            </h3>
            <div className="bg-orange-500/10 border border-orange-500/30 p-4 rounded-lg">
              <p className="text-orange-300 text-sm">{checkpoint.detalle.evidencia}</p>
            </div>
          </div>

          {/* Estados */}
          <div>
            <h3 className="text-orange-500 font-semibold mb-3">Estados Posibles</h3>
            <div className="flex gap-3 flex-wrap">
              <div className="flex items-center gap-2 bg-green-500/10 px-3 py-2 rounded-lg">
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="text-green-400 text-sm">Aprobado</span>
              </div>
              <div className="flex items-center gap-2 bg-yellow-500/10 px-3 py-2 rounded-lg">
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <span className="text-yellow-400 text-sm">Necesita refinamiento</span>
              </div>
              <div className="flex items-center gap-2 bg-red-500/10 px-3 py-2 rounded-lg">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <span className="text-red-400 text-sm">Sin definir/Bloqueado</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-[#262626]">
          <button 
            onClick={onClose}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg transition-colors"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
}
