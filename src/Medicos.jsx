import { useState } from "react";

function DropdownMedicos() {
  const [medicoSeleccionado, setMedicoSeleccionado] = useState("");

  const medicos = [
    { id: 1, nombre: "Dr. Juan Pérez" },
    { id: 2, nombre: "Dra. María Gómez" },
    { id: 3, nombre: "Dr. Carlos López" },
    { id: 4, nombre: "Dra. Ana Rodríguez" }
  ];

  const handleChange = (e) => {
    setMedicoSeleccionado(e.target.value);
  };

  const medico = medicos.find(
    (m) => m.id === Number(medicoSeleccionado)
  );

  return (
    <div className="container mt-4">
      <div className="mb-3">
        <label htmlFor="medicos" className="form-label">
          Seleccione un médico
        </label>

        <select
          id="medicos"
          className="form-select"
          value={medicoSeleccionado}
          onChange={handleChange}
        >
          <option value="">Medico</option>

          {medicos.map((medico) => (
            <option key={medico.id} value={medico.id}>
              {medico.nombre}
            </option>
          ))}
        </select>
      </div>

      {medico && (
        <div className="alert alert-info">
          Médico seleccionado: {medico.nombre}
        </div>
      )}
    </div>
  );
}

export default DropdownMedicos;