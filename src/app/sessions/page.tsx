import Link from "next/link";
import { ArrowLeft, GraduationCap, Calendar, CheckCircle, Clock, Play, FileText, Code, ExternalLink } from "lucide-react";

export default function SessionsPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 mb-8">
          <ArrowLeft className="w-4 h-4" /> Volver al Dashboard
        </Link>
        
        <div className="flex items-center gap-4 mb-8">
          <GraduationCap className="w-12 h-12 text-purple-400" />
          <div>
            <h1 className="text-4xl font-bold text-white">Sesiones del Bootcamp</h1>
            <p className="text-gray-400">6 sesiones • 9-20 Feb 2026</p>
          </div>
        </div>

        <div className="space-y-6">
          <SessionDetail 
            number={1}
            title="¿Qué es VibeCoding?"
            date="9 Feb 2026"
            time="19:00"
            status="completed"
            description="Introducción al concepto de VibeCoding. Modelo de 5 capas (UI, DATA, AI, AUTH, DEPLOY). Demo de Regenmon."
            youtube="https://www.youtube.com/watch?v=aZBhDom8tAA"
            doc="https://bootcamp.frutero.club/doc/session-1"
            deliverable="Regenmon básico creado"
            visits={123}
          />
          
          <SessionDetail 
            number={2}
            title="Chat con tu Regenmon"
            date="11 Feb 2026"
            time="17:00"
            status="completed"
            description="Conexión con OpenAI API. El Regenmon aprende a hablar y responder. Introducción a la capa AI."
            doc="https://bootcamp.frutero.club/doc/session-2"
            deliverable="Chat con OpenAI funcionando"
            visits={72}
          />
          
          <SessionDetail 
            number={3}
            title="Stats y Evolución"
            date="13 Feb 2026"
            time="17:00"
            status="completed"
            description="Sistema de stats (felicidad, energía, hambre). Los stats cambian con el tiempo. Comportamiento basado en stats."
            doc="https://bootcamp.frutero.club/doc/session-3"
            deliverable="Sistema de stats implementado"
            visits={31}
          />
          
          <SessionDetail 
            number={4}
            title="Tu Regenmon Evoluciona"
            date="16 Feb 2026"
            time="17:00"
            status="completed"
            description="Sistema de entrenamiento con IA Vision. El usuario sube fotos, la IA evalúa, el Regenmon gana puntos y evoluciona (Bebé → Joven → Adulto)."
            doc="https://bootcamp.frutero.club/doc/session-4"
            deliverable="Sistema de entrenamiento + evolución"
            visits={0}
          />
          
          <SessionDetail 
            number={5}
            title="Comunidad"
            date="18 Feb 2026"
            time="17:00"
            status="pending"
            description="Perfiles públicos. Sistema de visitas e interacciones. Feed comunitario. Notificaciones sociales."
            doc="https://bootcamp.frutero.club/doc/session-5"
            deliverable="Perfiles públicos + comunidad"
          />
          
          <SessionDetail 
            number={6}
            title="Demo Day"
            date="20 Feb 2026"
            time="17:00"
            status="pending"
            description="Presentación de proyectos finales. Feedback de la comunidad. Cierre del bootcamp."
            deliverable="Proyecto final presentado"
          />
        </div>
      </div>
    </main>
  );
}

function SessionDetail({ 
  number, title, date, time, status, description, youtube, doc, deliverable, visits 
}: { 
  number: number; 
  title: string; 
  date: string; 
  time: string; 
  status: "completed" | "pending"; 
  description: string; 
  youtube?: string; 
  doc?: string; 
  deliverable: string;
  visits?: number;
}) {
  return (
    <div className={`glow-card rounded-2xl p-8 ${status === "completed" ? "border-green-500/20" : "border-amber-500/20"}`}>
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="text-purple-400 font-medium">Sesión {number}</span>
            <span className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs ${
              status === "completed" 
                ? "bg-green-500/20 text-green-400" 
                : "bg-amber-500/20 text-amber-400"
            }`}>
              {status === "completed" ? <CheckCircle className="w-3 h-3" /> : <Clock className="w-3 h-3" />}
              {status === "completed" ? "Completada" : "Pendiente"}
            </span>
          </div>
          <h2 className="text-2xl font-bold text-white">{title}</h2>
          <div className="flex items-center gap-4 mt-2 text-gray-400">
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" /> {date}
            </span>
            <span>{time} MX</span>
            {visits !== undefined && visits > 0 && (
              <span className="text-purple-400">{visits} visitas al doc</span>
            )}
          </div>
        </div>
        
        <div className="flex gap-2">
          {youtube && (
            <a href={youtube} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-red-500/20 text-red-400 rounded-lg hover:bg-red-500/30 transition-colors">
              <Play className="w-4 h-4" /> YouTube
            </a>
          )}
          {doc && (
            <a href={doc} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-purple-500/20 text-purple-400 rounded-lg hover:bg-purple-500/30 transition-colors">
              <FileText className="w-4 h-4" /> Doc
            </a>
          )}
        </div>
      </div>
      
      <p className="text-gray-300 mb-4">{description}</p>
      
      <div className="flex items-center gap-2 p-3 bg-gray-800/50 rounded-lg">
        <Code className="w-5 h-5 text-cyan-400" />
        <span className="text-gray-400">Entregable:</span>
        <span className="text-white">{deliverable}</span>
      </div>
    </div>
  );
}
