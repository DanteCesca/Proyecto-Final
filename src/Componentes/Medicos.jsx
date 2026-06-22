import { useState } from "react";

function Medicos({ especialidadSeleccionada }) {
  const [medicoSeleccionado, setMedicoSeleccionado] = useState("");

  const medicos = [
    { id: 1, nombre: "Dr. Juan Pérez", especialidad: 1 },     // Gastro
    { id: 2, nombre: "Dra. María Gómez", especialidad: 2 },   // Cardio
    { id: 3, nombre: "Dr. Carlos López", especialidad: 2 },   // Cardio
    { id: 4, nombre: "Dra. Ana Rodríguez", especialidad: 3 }, // Derma
    { id: 5, nombre: "Dr. Pedro Ruiz", especialidad: 7 }      // Pediatra
  ];

  const medicosFiltrados = medicos.filter(
    (m) => m.especialidad === especialidadSeleccionada
  );

  const medico = medicos.find(
    (m) => m.id === Number(medicoSeleccionado)
  );

  return (
    <div className="mb-3">
      <label htmlFor="medicos" className="form-label">
        Médico
      </label>

      <select
        id="medicos"
        className="form-select"
        value={medicoSeleccionado}
        onChange={(e) => setMedicoSeleccionado(e.target.value)}
      >
        <option value="">Seleccione un médico</option>

        {medicosFiltrados.map((medico) => (
          <option key={medico.id} value={medico.id}>
            {medico.nombre}
          </option>
        ))}
      </select>

      {medico && (
        <div className="alert alert-info mt-3">
          Médico seleccionado: {medico.nombre}
        </div>
      )}
    </div>
  );
}

export default Medicos;