function Especialidades({ especialidadSeleccionada, onEspecialidadChange }) {

    const especialidades = [
    "Gastroenterología",
    "Cardiología",
    "Dermatología",
    "Clínica Médica",
    "Oftalmología",
    "Neumonología",
    "Pediatría",
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
        onChange={(e) => onEspecialidadChange(e.target.value)}
      >
        <option value="">Seleccione una especialidad</option>
        {especialidades.map((esp) => (
          <option key={esp} value={esp}>
            {esp}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Especialidades;