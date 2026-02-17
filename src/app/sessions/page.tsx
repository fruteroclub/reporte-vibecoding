import { Metadata } from "next";
import { 
  GraduationCap, Calendar, CheckCircle, Clock, 
  Youtube, FileText, MessageSquare, ExternalLink, Eye
} from "lucide-react";
import { BackLink, PageHeader, SectionTitle } from "@/components/SharedComponents";

export const metadata: Metadata = {
  title: "Sesiones | Reporte VibeCoding",
  description: "Detalle de todas las sesiones del bootcamp",
};

const sessions = [
  { number: 1, name: "¿Qué es VibeCoding?", date: "9 Feb", time: "19:00", status: "completed", 
    youtube: "https://www.youtube.com/watch?v=aZBhDom8tAA", 
    doc: "/doc/session-1", prompt: "/doc/session-1/prompt", deliverable: "/doc/session-1/deliverable",
    visits: { doc: 123, prompt: 50, deliverable: 54 }
  },
  { number: 2, name: "Chat con tu Regenmon", date: "11 Feb", time: "17:00", status: "completed",
    youtube: null, doc: "/doc/session-2", prompt: "/doc/session-2/prompt", deliverable: "/doc/session-2/deliverable",
    visits: { doc: 72, prompt: 54, deliverable: null }
  },
  { number: 3, name: "Stats y Evolución", date: "13 Feb", time: "17:00", status: "completed",
    youtube: null, doc: "/doc/session-3", prompt: "/doc/session-3/prompt", deliverable: "/doc/session-3/deliverable",
    visits: { doc: 31, prompt: null, deliverable: null }
  },
  { number: 4, name: "Tu Regenmon Evoluciona", date: "16 Feb", time: "17:00", status: "completed",
    youtube: null, doc: "/doc/session-4", prompt: "/doc/session-4/prompt", deliverable: "/doc/session-4/deliverable",
    visits: null
  },
  { number: 5, name: "Comunidad", date: "18 Feb", time: "17:00", status: "pending",
    youtube: null, doc: "/doc/session-5", prompt: "/doc/session-5/prompt", deliverable: "/doc/session-5/deliverable",
    visits: null
  },
  { number: 6, name: "Demo Day", date: "20 Feb", time: "17:00", status: "pending",
    youtube: null, doc: "/doc/session-6", prompt: "/doc/session-6/prompt", deliverable: "/doc/session-6/deliverable",
    visits: null
  },
];

export default function SessionsPage() {
  return (
    <main className="min-h-screen py-8 md:py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <BackLink />
        
        <PageHeader 
          title="Sesiones del Bootcamp" 
          subtitle="6 sesiones • 2 semanas • De idea a app"
          icon={<GraduationCap className="w-8 h-8 md:w-10 md:h-10 text-orange-500" />}
        />

        {/* Progress Overview */}
        <div className="bg-[#141414] border border-[#262626] rounded-xl md:rounded-2xl p-4 md:p-6 mb-8 md:mb-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h3 className="text-white font-semibold">Progreso del Bootcamp</h3>
              <p className="text-gray-400 text-sm">4 de 6 sesiones completadas</p>
            </div>
            <div className="flex-1 md:max-w-md">
              <div className="h-3 bg-[#1a1a1a] rounded-full overflow-hidden">
                <div className="h-full bg-orange-500 rounded-full" style={{ width: "66.6%" }} />
              </div>
            </div>
            <span className="text-orange-500 font-bold text-xl">66%</span>
          </div>
        </div>

        {/* Sessions Grid */}
        <div className="space-y-4 md:space-y-6">
          {sessions.map((session) => (
            <SessionDetailCard key={session.number} session={session} />
          ))}
        </div>

        {/* Schedule Info */}
        <div className="bg-[#141414] border border-[#262626] rounded-xl md:rounded-2xl p-4 md:p-6 mt-8 md:mt-12">
          <SectionTitle title="Información de Sesiones" icon={<Calendar className="w-5 h-5 md:w-6 md:h-6 text-orange-500" />} />
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="text-center p-4">
              <p className="text-gray-400 text-sm">Horario</p>
              <p className="text-white font-medium text-lg">17:00 CDMX</p>
            </div>
            <div className="text-center p-4">
              <p className="text-gray-400 text-sm">Días</p>
              <p className="text-white font-medium text-lg">Lun, Mié, Vie</p>
            </div>
            <div className="text-center p-4">
              <p className="text-gray-400 text-sm">Plataforma</p>
              <p className="text-white font-medium text-lg">Google Meet</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

function SessionDetailCard({ session }: { session: typeof sessions[0] }) {
  const isCompleted = session.status === "completed";
  
  return (
    <div className={"bg-[#141414] border rounded-xl md:rounded-2xl p-4 md:p-6 " + 
      (isCompleted ? "border-[#262626]" : "border-orange-500/30")}>
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-orange-500 font-medium">Sesión {session.number}</span>
            <span className={"flex items-center gap-1 px-2 py-0.5 rounded-full text-xs " + 
              (isCompleted 
                ? "bg-green-500/10 text-green-500 border border-green-500/20" 
                : "bg-orange-500/10 text-orange-500 border border-orange-500/20")
            }>
              {isCompleted ? <CheckCircle className="w-3 h-3" /> : <Clock className="w-3 h-3" />}
              {isCompleted ? "Completada" : "Pendiente"}
            </span>
          </div>
          <h3 className="text-white font-bold text-lg md:text-xl">{session.name}</h3>
        </div>
        <div className="flex items-center gap-2 text-gray-400 text-sm">
          <Calendar className="w-4 h-4" />
          <span>{session.date} • {session.time}</span>
        </div>
      </div>

      {/* Links */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3">
        {session.youtube && (
          <a 
            href={session.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-red-500/10 border border-red-500/20 text-red-500 rounded-lg p-2 md:p-3 hover:bg-red-500/20 transition-colors text-sm"
          >
            <Youtube className="w-4 h-4" />
            <span className="hidden sm:inline">YouTube</span>
          </a>
        )}
        <a 
          href={"https://bootcamp.frutero.club" + session.doc}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-[#1a1a1a] border border-[#333] text-gray-300 rounded-lg p-2 md:p-3 hover:border-orange-500/50 transition-colors text-sm"
        >
          <FileText className="w-4 h-4" />
          <span className="hidden sm:inline">Doc</span>
        </a>
        <a 
          href={"https://bootcamp.frutero.club" + session.prompt}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-[#1a1a1a] border border-[#333] text-gray-300 rounded-lg p-2 md:p-3 hover:border-orange-500/50 transition-colors text-sm"
        >
          <MessageSquare className="w-4 h-4" />
          <span className="hidden sm:inline">Prompt</span>
        </a>
        <a 
          href={"https://bootcamp.frutero.club" + session.deliverable}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-[#1a1a1a] border border-[#333] text-gray-300 rounded-lg p-2 md:p-3 hover:border-orange-500/50 transition-colors text-sm"
        >
          <ExternalLink className="w-4 h-4" />
          <span className="hidden sm:inline">Entregable</span>
        </a>
      </div>

      {/* Visits Stats */}
      {session.visits && (
        <div className="mt-4 pt-4 border-t border-[#262626]">
          <div className="flex items-center gap-2 mb-2">
            <Eye className="w-4 h-4 text-gray-500" />
            <span className="text-gray-500 text-sm">Visitas registradas</span>
          </div>
          <div className="flex flex-wrap gap-3 text-sm">
            {session.visits.doc && <span className="text-gray-400">Doc: <span className="text-orange-500">{session.visits.doc}</span></span>}
            {session.visits.prompt && <span className="text-gray-400">Prompt: <span className="text-orange-500">{session.visits.prompt}</span></span>}
            {session.visits.deliverable && <span className="text-gray-400">Entregable: <span className="text-orange-500">{session.visits.deliverable}</span></span>}
          </div>
        </div>
      )}
    </div>
  );
}
