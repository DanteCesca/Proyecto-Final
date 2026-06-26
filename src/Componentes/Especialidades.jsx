function Especialidades({ especialidadSeleccionada, onEspecialidadChange }) {
  
    const especialidades = [
    { id: 1, nombre: "Gastroenterología" },
    { id: 2, nombre: "Cardiología" },
    { id: 3, nombre: "Dermatología" },
    { id: 4, nombre: "Clínica Médica" },
    { id: 5, nombre: "Oftalmología" },
    { id: 6, nombre: "Neumonología" },
    { id: 7, nombre: "Pediatría" },
  ];

  
  return (
    <div className="mb-3">
      <label htmlFor="especialidad" className="form-label">
        Especialidad
      </label>

      <select
        id="especialidad"
        className="form-select"
        value={especialidadSeleccionada}
        onChange={(e) =>
          onEspecialidadChange(Number(e.target.value))
        }
      >
        <option value="">
          Seleccione una especialidad
        </option>

        {especialidades.map((esp) => (
          <option key={esp.id} value={esp.id}>
            {esp.nombre}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Especialidades;