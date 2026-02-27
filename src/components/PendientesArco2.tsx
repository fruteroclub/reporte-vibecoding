"use client";

import { useState, useEffect } from "react";
import { AlertCircle, CheckCircle } from "lucide-react";
import { SectionTitle } from "./SharedComponents";

const initialPendientes = [
  { id: "checkins", text: "Check-ins con participantes - Verificar ideas y checkpoints", priority: "high" as const },
  { id: "proyectos", text: "Registrar proyectos de cada participante", priority: "high" as const },
  { id: "vale", text: "Confirmar 3 participantes asignados a Vale", priority: "medium" as const },
  { id: "tracking", text: "Tracking de checkpoints activo", priority: "medium" as const },
  { id: "predemo", text: "Pre-demo review (1 Mar)", priority: "medium" as const },
  { id: "demoday", text: "Demo Day — Lunes 2 Mar (YouTube Live)", priority: "medium" as const },
];

export default function PendientesArco2() {
  const [completed, setCompleted] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const saved = localStorage.getItem("arco2-pendientes");
    if (saved) {
      setCompleted(JSON.parse(saved));
    }
  }, []);

  const toggle = (id: string) => {
    const next = { ...completed, [id]: !completed[id] };
    setCompleted(next);
    localStorage.setItem("arco2-pendientes", JSON.stringify(next));
  };

  const colors = {
    high: "border-red-500/30 bg-red-500/5 hover:bg-red-500/10",
    medium: "border-orange-500/30 bg-orange-500/5 hover:bg-orange-500/10",
    low: "border-gray-500/30 bg-gray-500/5 hover:bg-gray-500/10",
  };

  const dotColors = {
    high: "bg-red-500",
    medium: "bg-orange-500",
    low: "bg-gray-500",
  };

  return (
    <section className="py-12 md:py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          title="Pendientes"
          icon={<AlertCircle className="w-5 h-5 md:w-6 md:h-6 text-orange-500" />}
        />

        <div className="bg-[#141414] border border-[#262626] rounded-xl md:rounded-2xl p-4 md:p-8 mt-6 md:mt-8">
          <div className="space-y-3">
            {initialPendientes.map((item) => {
              const done = completed[item.id] || false;
              return (
                <button
                  key={item.id}
                  onClick={() => toggle(item.id)}
                  className={`w-full flex items-center gap-3 p-3 rounded-lg border transition-all cursor-pointer ${
                    done
                      ? "border-green-500/30 bg-green-500/5"
                      : colors[item.priority]
                  }`}
                >
                  {done ? (
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  ) : (
                    <div className={`w-4 h-4 rounded border-2 flex-shrink-0 ${
                      item.priority === "high" ? "border-red-500" : 
                      item.priority === "medium" ? "border-orange-500" : "border-gray-500"
                    }`} />
                  )}
                  <span className={`text-sm md:text-base text-left ${
                    done ? "text-green-400 line-through" : "text-gray-300"
                  }`}>
                    {item.text}
                  </span>
                </button>
              );
            })}
          </div>
          <p className="text-gray-600 text-xs mt-4 text-center">
            Click para marcar como completado
          </p>
        </div>
      </div>
    </section>
  );
}
