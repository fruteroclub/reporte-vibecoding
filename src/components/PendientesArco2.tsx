"use client";

import { useState, useEffect } from "react";
import { AlertCircle, CheckCircle, User, Plus, X, Trash2 } from "lucide-react";
import { SectionTitle } from "./SharedComponents";

type Pendiente = {
  id: string;
  text: string;
  priority: "low" | "medium" | "high"; // verde, amarillo, rojo
  done: boolean;
};

// Pendientes generales iniciales
const pendientesGeneralesInicial: Pendiente[] = [
  { id: "checkins", text: "Check-ins con participantes - Verificar ideas y checkpoints", priority: "high", done: false },
  { id: "proyectos", text: "Registrar proyectos de cada participante", priority: "high", done: false },
  { id: "vale", text: "Confirmar 3 participantes asignados a Vale", priority: "medium", done: false },
  { id: "tracking", text: "Tracking de checkpoints activo", priority: "medium", done: false },
  { id: "predemo", text: "Pre-demo review (1 Mar)", priority: "medium", done: false },
  { id: "demoday", text: "Demo Day — Lunes 2 Mar (YouTube Live)", priority: "medium", done: false },
];

// Pendientes por mentor iniciales
const pendientesMentorInicial: { [key: string]: Pendiente[] } = {
  Brian: [
    { id: "brian-1", text: "Contactar a @wairamoon", priority: "medium", done: false },
    { id: "brian-2", text: "Contactar a @esdras_josue", priority: "medium", done: false },
    { id: "brian-3", text: "Contactar a @ToryDom", priority: "medium", done: false },
  ],
  Mel: [
    { id: "mel-1", text: "Contactar a @S4kurak", priority: "medium", done: false },
    { id: "mel-2", text: "Contactar a @LokiyIsaac", priority: "medium", done: false },
    { id: "mel-3", text: "Contactar a @sergiotechx", priority: "medium", done: false },
  ],
  Scarf: [
    { id: "scarf-1", text: "Contactar a @Whitehatcryptoedd", priority: "medium", done: false },
    { id: "scarf-2", text: "Contactar a @BBPMW", priority: "medium", done: false },
    { id: "scarf-3", text: "Contactar a @eeelien39", priority: "medium", done: false },
  ],
  Vale: [
    { id: "vale-1", text: "Contactar a @Alan_BK_Breck", priority: "medium", done: false },
    { id: "vale-2", text: "Contactar a @j4rias", priority: "medium", done: false },
    { id: "vale-3", text: "Contactar a @DanielRubio_Web3", priority: "medium", done: false },
  ],
};

export default function PendientesArco2() {
  const [pendientesGenerales, setPendientesGenerales] = useState<Pendiente[]>(pendientesGeneralesInicial);
  const [pendientesMentor, setPendientesMentor] = useState<{ [key: string]: Pendiente[] }>(pendientesMentorInicial);
  const [selectedMentor, setSelectedMentor] = useState<string>("Brian");
  const [showAddPanel, setShowAddPanel] = useState(false);
  
  // Estado para nuevo pendiente
  const [newText, setNewText] = useState("");
  const [newPriority, setNewPriority] = useState<"low" | "medium" | "high">("medium");
  const [newDestino, setNewDestino] = useState<string>("general");

  // Cargar estado de localStorage
  useEffect(() => {
    const savedGenerales = localStorage.getItem("arco2-pendientes-generales-v2");
    const savedMentor = localStorage.getItem("arco2-pendientes-mentor-v2");
    if (savedGenerales) setPendientesGenerales(JSON.parse(savedGenerales));
    if (savedMentor) setPendientesMentor(JSON.parse(savedMentor));
  }, []);

  // Guardar en localStorage
  useEffect(() => {
    localStorage.setItem("arco2-pendientes-generales-v2", JSON.stringify(pendientesGenerales));
    localStorage.setItem("arco2-pendientes-mentor-v2", JSON.stringify(pendientesMentor));
  }, [pendientesGenerales, pendientesMentor]);

  // Toggle pendiente general
  const toggleGeneral = (id: string) => {
    setPendientesGenerales(prev => 
      prev.map(p => p.id === id ? { ...p, done: !p.done } : p)
    );
  };

  // Toggle pendiente de mentor
  const toggleMentor = (mentor: string, id: string) => {
    setPendientesMentor(prev => ({
      ...prev,
      [mentor]: prev[mentor].map(p => p.id === id ? { ...p, done: !p.done } : p)
    }));
  };

  // Eliminar pendiente general
  const deleteGeneral = (id: string) => {
    setPendientesGenerales(prev => prev.filter(p => p.id !== id));
  };

  // Eliminar pendiente de mentor
  const deleteMentor = (mentor: string, id: string) => {
    setPendientesMentor(prev => ({
      ...prev,
      [mentor]: prev[mentor].filter(p => p.id !== id)
    }));
  };

  // Agregar nuevo pendiente
  const addPendiente = () => {
    if (!newText.trim()) return;
    
    const newPendiente: Pendiente = {
      id: `custom-${Date.now()}`,
      text: newText.trim(),
      priority: newPriority,
      done: false,
    };

    if (newDestino === "general") {
      setPendientesGenerales(prev => [...prev, newPendiente]);
    } else {
      setPendientesMentor(prev => ({
        ...prev,
        [newDestino]: [...(prev[newDestino] || []), newPendiente]
      }));
    }

    // Reset form
    setNewText("");
    setNewPriority("medium");
    setShowAddPanel(false);
  };

  // Colores por prioridad
  const getPriorityColors = (priority: string, done: boolean) => {
    if (done) return "border-green-500/30 bg-green-500/5";
    switch (priority) {
      case "high": return "border-red-500/30 bg-red-500/5 hover:border-red-500/50";
      case "medium": return "border-yellow-500/30 bg-yellow-500/5 hover:border-yellow-500/50";
      case "low": return "border-green-500/30 bg-green-500/5 hover:border-green-500/50";
      default: return "border-orange-500/30 bg-orange-500/5";
    }
  };

  const getCheckboxColor = (priority: string, done: boolean) => {
    if (done) return "border-green-500 bg-green-500";
    switch (priority) {
      case "high": return "border-red-500";
      case "medium": return "border-yellow-500";
      case "low": return "border-green-500";
      default: return "border-orange-500";
    }
  };

  return (
    <section className="py-12 md:py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <SectionTitle
            title="Pendientes"
            icon={<AlertCircle className="w-5 h-5 md:w-6 md:h-6 text-orange-500" />}
          />
          <button
            onClick={() => setShowAddPanel(!showAddPanel)}
            className="flex items-center gap-2 px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg text-sm font-medium transition-colors"
          >
            {showAddPanel ? <X className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
            {showAddPanel ? "Cancelar" : "Agregar"}
          </button>
        </div>

        {/* Panel para agregar nuevo pendiente */}
        {showAddPanel && (
          <div className="bg-[#141414] border border-orange-500/50 rounded-xl p-4 md:p-6 mb-6">
            <h3 className="text-white font-semibold mb-4">Nuevo Pendiente</h3>
            
            {/* Texto */}
            <div className="mb-4">
              <label className="text-gray-400 text-xs mb-1 block">Descripción</label>
              <input
                type="text"
                value={newText}
                onChange={(e) => setNewText(e.target.value)}
                placeholder="¿Qué necesitas hacer?"
                className="w-full bg-[#0a0a0a] border border-[#262626] rounded-lg px-3 py-2 text-white text-sm focus:border-orange-500 outline-none"
              />
            </div>

            {/* Prioridad */}
            <div className="mb-4">
              <label className="text-gray-400 text-xs mb-2 block">Prioridad</label>
              <div className="flex gap-2">
                <button
                  onClick={() => setNewPriority("low")}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    newPriority === "low" 
                      ? "bg-green-500 text-white" 
                      : "bg-green-500/10 text-green-400 hover:bg-green-500/20"
                  }`}
                >
                  🟢 Fácil
                </button>
                <button
                  onClick={() => setNewPriority("medium")}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    newPriority === "medium" 
                      ? "bg-yellow-500 text-white" 
                      : "bg-yellow-500/10 text-yellow-400 hover:bg-yellow-500/20"
                  }`}
                >
                  🟡 Complicado
                </button>
                <button
                  onClick={() => setNewPriority("high")}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    newPriority === "high" 
                      ? "bg-red-500 text-white" 
                      : "bg-red-500/10 text-red-400 hover:bg-red-500/20"
                  }`}
                >
                  🔴 Urgente
                </button>
              </div>
            </div>

            {/* Destino */}
            <div className="mb-4">
              <label className="text-gray-400 text-xs mb-2 block">Agregar a</label>
              <div className="flex gap-2 flex-wrap">
                <button
                  onClick={() => setNewDestino("general")}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    newDestino === "general" 
                      ? "bg-orange-500 text-white" 
                      : "bg-[#262626] text-gray-400 hover:text-white"
                  }`}
                >
                  📋 Generales
                </button>
                {Object.keys(pendientesMentor).map((mentor) => (
                  <button
                    key={mentor}
                    onClick={() => setNewDestino(mentor)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      newDestino === mentor 
                        ? "bg-orange-500 text-white" 
                        : "bg-[#262626] text-gray-400 hover:text-white"
                    }`}
                  >
                    👤 {mentor}
                  </button>
                ))}
              </div>
            </div>

            {/* Botón agregar */}
            <button
              onClick={addPendiente}
              disabled={!newText.trim()}
              className="w-full py-3 bg-orange-500 hover:bg-orange-600 disabled:bg-gray-600 disabled:cursor-not-allowed text-white rounded-lg font-medium transition-colors"
            >
              Agregar Pendiente
            </button>
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          {/* COLUMNA IZQUIERDA - Pendientes Generales */}
          <div className="bg-[#141414] border border-[#262626] rounded-xl md:rounded-2xl p-4 md:p-6">
            <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-orange-500" />
              Pendientes Generales
            </h3>
            <div className="space-y-2">
              {pendientesGenerales.map((item) => (
                <div
                  key={item.id}
                  className={`flex items-center gap-3 p-3 rounded-lg border transition-all ${getPriorityColors(item.priority, item.done)}`}
                >
                  <button
                    onClick={() => toggleGeneral(item.id)}
                    className={`w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 ${getCheckboxColor(item.priority, item.done)}`}
                  >
                    {item.done && <CheckCircle className="w-3 h-3 text-white" />}
                  </button>
                  <span className={`text-sm flex-1 ${item.done ? "text-gray-500 line-through" : "text-gray-300"}`}>
                    {item.text}
                  </span>
                  <button
                    onClick={() => deleteGeneral(item.id)}
                    className="text-gray-500 hover:text-red-500 transition-colors p-1"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-center gap-3 mt-4 pt-3 border-t border-[#262626]">
              <div className="flex items-center gap-1 text-xs text-gray-500">
                <div className="w-2 h-2 rounded-full bg-green-500" /> Fácil
              </div>
              <div className="flex items-center gap-1 text-xs text-gray-500">
                <div className="w-2 h-2 rounded-full bg-yellow-500" /> Complicado
              </div>
              <div className="flex items-center gap-1 text-xs text-gray-500">
                <div className="w-2 h-2 rounded-full bg-red-500" /> Urgente
              </div>
            </div>
          </div>

          {/* COLUMNA DERECHA - Pendientes del Mentor */}
          <div className="bg-[#141414] border border-[#262626] rounded-xl md:rounded-2xl p-4 md:p-6">
            <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
              <User className="w-4 h-4 text-orange-500" />
              Pendientes del Mentor
            </h3>

            {/* Selector de mentor */}
            <div className="flex gap-2 mb-4 flex-wrap">
              {Object.keys(pendientesMentor).map((mentor) => (
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
              {pendientesMentor[selectedMentor]?.map((item) => (
                <div
                  key={item.id}
                  className={`flex items-center gap-3 p-3 rounded-lg border transition-all ${getPriorityColors(item.priority, item.done)}`}
                >
                  <button
                    onClick={() => toggleMentor(selectedMentor, item.id)}
                    className={`w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 ${getCheckboxColor(item.priority, item.done)}`}
                  >
                    {item.done && <CheckCircle className="w-3 h-3 text-white" />}
                  </button>
                  <span className={`text-sm flex-1 ${item.done ? "text-gray-500 line-through" : "text-gray-300"}`}>
                    {item.text}
                  </span>
                  <button
                    onClick={() => deleteMentor(selectedMentor, item.id)}
                    className="text-gray-500 hover:text-red-500 transition-colors p-1"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
              {pendientesMentor[selectedMentor]?.length === 0 && (
                <p className="text-gray-500 text-sm text-center py-4">
                  No hay pendientes para {selectedMentor}
                </p>
              )}
            </div>
            <p className="text-gray-600 text-xs mt-3 text-center">
              Pendientes de {selectedMentor}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
