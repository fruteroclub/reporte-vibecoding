"use client";

import { useState, useEffect } from "react";
import { AlertCircle, CheckCircle, User } from "lucide-react";
import { SectionTitle } from "./SharedComponents";

// Pendientes generales del bootcamp
const pendientesGeneralesInicial = [
  { id: "checkins", text: "Check-ins con participantes - Verificar ideas y checkpoints", priority: "high" as const },
  { id: "proyectos", text: "Registrar proyectos de cada participante", priority: "high" as const },
  { id: "vale", text: "Confirmar 3 participantes asignados a Vale", priority: "medium" as const },
  { id: "tracking", text: "Tracking de checkpoints activo", priority: "medium" as const },
  { id: "predemo", text: "Pre-demo review (1 Mar)", priority: "medium" as const },
  { id: "demoday", text: "Demo Day — Lunes 2 Mar (YouTube Live)", priority: "medium" as const },
];

// Pendientes por mentor
const pendientesMentorInicial: { [key: string]: { id: string; text: string }[] } = {
  Brian: [
    { id: "brian-1", text: "Contactar a @wairamoon" },
    { id: "brian-2", text: "Contactar a @esdras_josue" },
    { id: "brian-3", text: "Contactar a @ToryDom" },
  ],
  Mel: [
    { id: "mel-1", text: "Contactar a @S4kurak" },
    { id: "mel-2", text: "Contactar a @LokiyIsaac" },
    { id: "mel-3", text: "Contactar a @sergiotechx" },
  ],
  Scarf: [
    { id: "scarf-1", text: "Contactar a @Whitehatcryptoedd" },
    { id: "scarf-2", text: "Contactar a @BBPMW" },
    { id: "scarf-3", text: "Contactar a @eeelien39" },
  ],
  Vale: [
    { id: "vale-1", text: "Contactar a @Alan_BK_Breck" },
    { id: "vale-2", text: "Contactar a @j4rias" },
    { id: "vale-3", text: "Contactar a @DanielRubio_Web3" },
  ],
};

export default function PendientesArco2() {
  const [completedGenerales, setCompletedGenerales] = useState<Record<string, boolean>>({});
  const [completedMentor, setCompletedMentor] = useState<Record<string, boolean>>({});
  const [selectedMentor, setSelectedMentor] = useState<string>("Brian");

  // Cargar estado de localStorage
  useEffect(() => {
    const savedGenerales = localStorage.getItem("arco2-pendientes-generales");
    const savedMentor = localStorage.getItem("arco2-pendientes-mentor");
    if (savedGenerales) setCompletedGenerales(JSON.parse(savedGenerales));
    if (savedMentor) setCompletedMentor(JSON.parse(savedMentor));
  }, []);

  // Toggle pendiente general
  const toggleGeneral = (id: string) => {
    const next = { ...completedGenerales, [id]: !completedGenerales[id] };
    setCompletedGenerales(next);
    localStorage.setItem("arco2-pendientes-generales", JSON.stringify(next));
  };

  // Toggle pendiente de mentor
  const toggleMentor = (id: string) => {
    const next = { ...completedMentor, [id]: !completedMentor[id] };
    setCompletedMentor(next);
    localStorage.setItem("arco2-pendientes-mentor", JSON.stringify(next));
  };

  return (
    <section className="py-12 md:py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          title="Pendientes"
          icon={<AlertCircle className="w-5 h-5 md:w-6 md:h-6 text-orange-500" />}
        />

        <div className="grid md:grid-cols-2 gap-4 md:gap-6 mt-6 md:mt-8">
          {/* COLUMNA IZQUIERDA - Pendientes Generales */}
          <div className="bg-[#141414] border border-[#262626] rounded-xl md:rounded-2xl p-4 md:p-6">
            <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-orange-500" />
              Pendientes Generales
            </h3>
            <div className="space-y-2">
              {pendientesGeneralesInicial.map((item) => {
                const done = completedGenerales[item.id] || false;
                return (
                  <button
                    key={item.id}
                    onClick={() => toggleGeneral(item.id)}
                    className={`w-full flex items-center gap-3 p-3 rounded-lg border transition-all text-left ${
                      done
                        ? "border-green-500/30 bg-green-500/5"
                        : item.priority === "high"
                        ? "border-red-500/30 bg-red-500/5 hover:border-red-500/50"
                        : "border-orange-500/30 bg-orange-500/5 hover:border-orange-500/50"
                    }`}
                  >
                    <div
                      className={`w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 ${
                        done
                          ? "border-green-500 bg-green-500"
                          : item.priority === "high"
                          ? "border-red-500"
                          : "border-orange-500"
                      }`}
                    >
                      {done && <CheckCircle className="w-3 h-3 text-white" />}
                    </div>
                    <span
                      className={`text-sm ${
                        done ? "text-gray-500 line-through" : "text-gray-300"
                      }`}
                    >
                      {item.text}
                    </span>
                  </button>
                );
              })}
            </div>
            <p className="text-gray-600 text-xs mt-3 text-center">
              Click para marcar como completado
            </p>
          </div>

          {/* COLUMNA DERECHA - Pendientes del Mentor */}
          <div className="bg-[#141414] border border-[#262626] rounded-xl md:rounded-2xl p-4 md:p-6">
            <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
              <User className="w-4 h-4 text-orange-500" />
              Pendientes del Mentor
            </h3>

            {/* Selector de mentor */}
            <div className="flex gap-2 mb-4 flex-wrap">
              {Object.keys(pendientesMentorInicial).map((mentor) => (
                <button
                  key={mentor}
                  onClick={() => setSelectedMentor(mentor)}
                  className={`px-3 py-1 rounded-full text-sm transition-colors ${
                    selectedMentor === mentor
                      ? "bg-orange-500 text-white"
                      : "bg-[#262626] text-gray-400 hover:text-white"
                  }`}
                >
                  {mentor}
                </button>
              ))}
            </div>

            {/* Lista de pendientes del mentor seleccionado */}
            <div className="space-y-2">
              {pendientesMentorInicial[selectedMentor]?.map((item) => {
                const done = completedMentor[item.id] || false;
                return (
                  <button
                    key={item.id}
                    onClick={() => toggleMentor(item.id)}
                    className={`w-full flex items-center gap-3 p-3 rounded-lg border transition-all text-left ${
                      done
                        ? "border-green-500/30 bg-green-500/5"
                        : "border-orange-500/30 bg-orange-500/5 hover:border-orange-500/50"
                    }`}
                  >
                    <div
                      className={`w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 ${
                        done ? "border-green-500 bg-green-500" : "border-orange-500"
                      }`}
                    >
                      {done && <CheckCircle className="w-3 h-3 text-white" />}
                    </div>
                    <span
                      className={`text-sm ${
                        done ? "text-gray-500 line-through" : "text-gray-300"
                      }`}
                    >
                      {item.text}
                    </span>
                  </button>
                );
              })}
            </div>
            <p className="text-gray-600 text-xs mt-3 text-center">
              Pendientes privados de {selectedMentor}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
