import { useState } from "react";

const MAX_CARACTERES = 30;
const PacienteInput = ({ nombre, onNombreChange }) => {
  const [tocado, setTocado] = useState(false);

  const hayError = tocado && nombre.length === 0;
  const errorMinimo = tocado && nombre.length > 0 && nombre.length < 3;
  const handleChange = (e) => {
     onNombreChange(e.target.value); 
  };

  return (
    <div className="mb-3">
      <label htmlFor="nombreApellido" className="form-label">
        Nombre y Apellido 
      </label>

      <input
        type="text"
        id="nombreApellido"
        className={"form-control " + (hayError || errorMinimo ? "is-invalid" : "")}
        placeholder="Ej:Pepe Honguito"
        value={nombre}
        onChange={handleChange}
        onBlur={() => setTocado(true)}
        maxLength={MAX_CARACTERES}
        required
      />

      {hayError && (
        <div className="invalid-feedback">
          El campo es obligatorio.
        </div>
      )}
      {errorMinimo && (
      <div className="invalid-feedback">
        Debes ingresar al menos 3 caracteres.
      </div>
    )}
    </div>
  );
};

export default PacienteInput;