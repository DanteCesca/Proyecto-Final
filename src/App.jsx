import { useState } from "react";
import "./Styles/App.css"; 
import Especialidades from "./Componentes/Especialidades";
import Medicos from "./Componentes/Medicos";
import PacienteInput from "./Componentes/Pacientes";
import FechaTurno from "./Componentes/FechaTurno";

function App() {
  const [especialidad, setEspecialidad] = useState("");
  const [nombrePaciente, setNombrePaciente] = useState("");
  const [fecha, setFecha] = useState("");

  return (
    <div className="container mt-4">
      <h1>Gestión de Turnos Médicos</h1>

      <Especialidades
        especialidadSeleccionada={especialidad}
        onEspecialidadChange={setEspecialidad}
      />

      <Medicos
        especialidadSeleccionada={especialidad}
      />

      <PacienteInput
        nombre={nombrePaciente}
        onNombreChange={setNombrePaciente}
      />

      <FechaTurno
        fecha={fecha}
        onFechaChange={setFecha}
      />
    </div>
  );
}


export default App;
