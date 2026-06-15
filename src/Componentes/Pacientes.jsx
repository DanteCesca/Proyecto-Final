import { useState } from "react";

const PacienteInput = ({ nombre, onNombreChange }) => {
  const [tocado, setTocado] = useState(false);

  const hayError = tocado && !nombre.trim();

  return (
    <div className="mb-3">
      <label htmlFor="nombreApellido" className="form-label">
        Nombre y Apellido
      </label>

      <input
        type="text"
        id="nombreApellido"
        className={`form-control ${hayError ? "is-invalid" : ""}`}
        placeholder="Ej: Juan Pérez"
        value={nombre}
        onChange={(e) => onNombreChange(e.target.value)}
        onBlur={() => setTocado(true)}
        required
      />

      {hayError && (
        <div className="invalid-feedback">
          El nombre y apellido es obligatorio.
        </div>
      )}
    </div>
  );
};

export default PacienteInput;