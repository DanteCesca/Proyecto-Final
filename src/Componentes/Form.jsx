// src/Componentes/Forma.jsx
import { useState } from "react";
import Especialidades from "./Especialidades";
import Medicos from "./Medicos";
import PacienteInput from "./Pacientes";
import FechaTurno from "./FechaTurno";

function Form() {
  const [especialidad, setEspecialidad] = useState("");
  const [nombrePaciente, setNombrePaciente] = useState("");
  const [fecha, setFecha] = useState("");

  return (
    <>
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
    </>
  );
}

export default Form;