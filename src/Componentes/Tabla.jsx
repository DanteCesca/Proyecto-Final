import BotonEditar from "./BotonEditar";

function TablaTurnos({ turnos, onEditar, onEliminar }) {
  return (
    <div className="card border-0 shadow-sm mt-4">

      <div className="card-header bg-primary bg-gradient text-white py-3">
        <h5 className="mb-0"> Turnos Registrados</h5>
      </div>

      <div className="card-body p-0">
        <div className="table-responsive">
          <table className="table table-hover align-middle text-center mb-0">

            <thead style={{ backgroundColor: "#e8f4fd", color: "#0d6efd" }}>
              <tr>
                <th className="py-3">Nombre del Paciente</th>
                <th className="py-3">Médico</th>
                <th className="py-3">Especialidad</th>
                <th className="py-3">Fecha del Turno</th>
                <th className="py-3">Acciones</th>
              </tr>
            </thead>

            <tbody>
              {turnos.map((turno) => (
                <tr key={turno.id}>
                  <td>{turno.nombre}</td>
                  <td>{turno.medico}</td>
                  <td>{turno.especialidad}</td>
                  <td>{turno.fecha}</td>
                  <td>
                    <div className="d-flex justify-content-center gap-2">
                      <BotonEditar turno={turno} onEditar={onEditar} />
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => onEliminar(turno.id)}
                      >
                        🗑️ Eliminar
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {turnos.length === 0 && (
            <div className="text-center text-muted py-5">
              <p className="mb-0">No hay turnos registrados aún.</p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

export default TablaTurnos;