"use client";

import { useState } from "react";
import { Target, ChevronDown, ChevronUp } from "lucide-react";
import { SectionTitle } from "./SharedComponents";

const checkpointsData = [
  {
    num: 1,
    name: "Idea Definida",
    dia: "Lun 23",
    desc: "Claridad del proyecto",
    criterios: [
      "Puede explicar su idea en 1 frase",
      "Sabe qué problema resuelve",
      "Tiene usuario target específico (no \"para todos\")",
      "Scope realista para 1 semana",
      "Sabe a quién pedirle que lo pruebe (10 personas en mente)",
    ],
    preguntaClave: "¿A quiénes les vas a pedir que lo prueben? Dime 10 nombres o grupos.",
  },
  {
    num: 2,
    name: "Setup Técnico",
    dia: "Mar 24",
    desc: "Repo + proyecto corriendo",
    criterios: [
      "Repo creado (GitHub/GitLab)",
      "Proyecto inicializado y corre local",
      "Stack definido y claro",
      "Primera página o componente existe",
    ],
    preguntaClave: "Mándame link al repo y screenshot del proyecto corriendo local.",
  },
  {
    num: 3,
    name: "MVP Funcional",
    dia: "Jue 26",
    desc: "Feature principal funciona",
    criterios: [
      "Feature principal existe y funciona (no solo UI)",
      "Datos persisten (DB/localStorage)",
      "Un usuario puede completar el flow completo",
      "Sin errores críticos — estable",
    ],
    preguntaClave: "Muéstrame un video de 2 min del flow principal funcionando.",
  },
  {
    num: 4,
    name: "Deploy Listo",
    dia: "Sáb 28",
    desc: "URL pública accesible",
    criterios: [
      "Deployed en internet — URL funciona",
      "Sin errores en producción",
      "Accesible sin setup — cualquiera puede usarlo",
      "Ya lo compartió con al menos 3 usuarios",
    ],
    preguntaClave: "¿Cuántas personas ya lo probaron? ¿Qué te dijeron?",
  },
  {
    num: 5,
    name: "Demo Ready",
    dia: "Dom 1",
    desc: "Pitch + demo ensayado",
    criterios: [
      "10 usuarios lo probaron (evidencia)",
      "Tiene feedback de usuarios reales",
      "Pitch preparado (~5 min)",
      "Demo ensayado y fluido",
      "Producto estable — no crashea en demo",
    ],
    preguntaClave: "¿Qué te dijeron tus usuarios? ¿Cambiarías algo basado en su feedback?",
  },
];

export default function CheckpointsArco2() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section className="py-12 md:py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          title="Sistema de Checkpoints"
          icon={<Target className="w-5 h-5 md:w-6 md:h-6 text-orange-500" />}
          subtitle="5 etapas para medir el progreso — click para ver detalle"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 mt-6 md:mt-8">
          {checkpointsData.map((cp) => (
            <div key={cp.num} className="flex flex-col">
              <button
                onClick={() => setExpanded(expanded === cp.num ? null : cp.num)}
                className={`bg-[#141414] border rounded-xl p-4 text-center transition-all cursor-pointer ${
                  expanded === cp.num
                    ? "border-orange-500/50 bg-orange-500/5"
                    : "border-[#262626] hover:border-orange-500/30"
                }`}
              >
                <div className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center mx-auto mb-3">
                  <span className="text-orange-500 font-bold">{cp.num}</span>
                </div>
                <h3 className="text-white font-medium text-sm mb-1">{cp.name}</h3>
                <p className="text-orange-500 text-xs mb-2">{cp.dia}</p>
                <p className="text-gray-500 text-xs">{cp.desc}</p>
                <div className="mt-2">
                  {expanded === cp.num ? (
                    <ChevronUp className="w-4 h-4 text-orange-500 mx-auto" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-gray-500 mx-auto" />
                  )}
                </div>
              </button>
            </div>
          ))}
        </div>

        {/* Expanded Detail */}
        {expanded && (
          <div className="mt-6 bg-[#141414] border border-orange-500/30 rounded-xl p-6 animate-in fade-in">
            {(() => {
              const cp = checkpointsData.find((c) => c.num === expanded)!;
              return (
                <>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center">
                      <span className="text-orange-500 font-bold text-sm">{cp.num}</span>
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg">{cp.name}</h3>
                      <p className="text-orange-500 text-sm">{cp.dia} — {cp.desc}</p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-gray-400 text-sm font-medium mb-2">Criterios de evaluación:</h4>
                    <ul className="space-y-2">
                      {cp.criterios.map((criterio, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-300 text-sm">
                          <span className="text-orange-500 mt-0.5">✓</span>
                          {criterio}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-orange-500/5 border border-orange-500/20 rounded-lg p-3">
                    <p className="text-orange-500 text-xs font-medium mb-1">💬 Pregunta clave:</p>
                    <p className="text-gray-300 text-sm italic">&ldquo;{cp.preguntaClave}&rdquo;</p>
                  </div>
                </>
              );
            })()}
          </div>
        )}
      </div>
    </section>
  );
}
