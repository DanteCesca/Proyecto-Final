import { useState } from "react";
import "./Styles/App.css";
import Especialidades from "./Componentes/Especialidades";
import Medicos from "./Componentes/Medicos";

function App() {
  const [especialidad, setEspecialidad] = useState("");

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

      <p>ID seleccionado: {especialidad}</p>
    </div>
  );
}

export default App;
