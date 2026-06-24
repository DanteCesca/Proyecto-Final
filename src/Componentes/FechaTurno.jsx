import { useState } from "react";

const FechaTurno = ({ fecha, onFechaChange }) => {
  const [tocado, setTocado] = useState(false);
  const hayError = tocado && fecha === "";

  const handleChange = (e) => {
    const valorIngresado = e.target.value;

    
    let soloNumeros = "";
    for (let i = 0; i < valorIngresado.length; i++) {
      if (valorIngresado[i] >= "0" && valorIngresado[i] <= "9") {
        soloNumeros = soloNumeros + valorIngresado[i];
      }
    }

    
    let ocho = "";
    for (let i = 0; i < soloNumeros.length && i < 8; i++) {
      ocho = ocho + soloNumeros[i];
    }

    
    let resultado = "";
    for (let i = 0; i < ocho.length; i++) {
      resultado = resultado + ocho[i];
      if (i === 3 && ocho.length > 4) {
        resultado = resultado + "/";
      }
      if (i === 5 && ocho.length > 6) {
        resultado = resultado + "/";
      }
    }

    onFechaChange(resultado);
  };

  return (
    <div className="mb-3">
      <label htmlFor="fechaTurno" className="form-label">
        Fecha del Turno
      </label>

      <input
        type="text"   
        id="fechaTurno"
        className={"form-control " + (hayError ? "is-invalid" : "")}
        placeholder="AAAA/MM/DD"  
        value={fecha}
        onChange={handleChange}
        onBlur={() => setTocado(true)}
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