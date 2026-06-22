import { useState } from "react";
import "./Styles/App.css";

import Especialidades from "./Componentes/Especialidades";
import Medicos from "./Componentes/Medicos";
import PacienteInput from "./Componentes/Pacientes";

function App() {
  const [especialidad, setEspecialidad] = useState("");
  const [nombrePaciente, setNombrePaciente] = useState("");

  return (
    <div className="container mt-4">
      <h1>Gestión de Turnos Médicos</h1>

      <Especialidades
        especialidadSeleccionada={especialidad}
        onEspecialidadChange={setEspecialidad}
      />

      <PacienteInput
        nombre={nombrePaciente}
        onNombreChange={setNombrePaciente}
      />

      <Medicos
        especialidadSeleccionada={especialidad}
      />

      <p>Especialidad: {especialidad}</p>
      <p>Paciente: {nombrePaciente}</p>
    </div>
  );
}

export default App;
