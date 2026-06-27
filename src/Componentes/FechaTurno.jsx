import { useState } from "react";

const FechaTurno = ({ fecha, onFechaChange }) => {
  const [tocado, setTocado] = useState(false);

  const hoy = new Date().toISOString().split("T")[0];

  const hayError = tocado && fecha === "";

  return (
    <div className="mb-3">
      <label htmlFor="fechaTurno" className="form-label">
        Fecha del Turno
      </label>

      <input
        type="date"
        id="fechaTurno"
        className={"form-control " + (hayError ? "is-invalid" : "")}
        value={fecha}
        onChange={(e) => {
            onFechaChange(e.target.value);
            setTocado(true);}
        }
        min={hoy} 
        required
      />

      {hayError && (
        <div className="invalid-feedback">
          La fecha es obligatoria.
        </div>
      )}
    </div>
  );
};

export default FechaTurno;