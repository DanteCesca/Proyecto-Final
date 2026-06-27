import React from "react";
import BotonEditar from "./BotonEditar";

function TablaTurnos({ turnos, onEditar, onEliminar }) {
  return (
    <div className="container mt-5">
      <div className="card shadow">
        <div className="card-header bg-primary text-white">
          <h3 className="mb-0">Listado de Turnos</h3>
        </div>

        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-striped table-hover table-bordered align-middle text-center">
              <thead className="table-dark">
                <tr>
                  <th>Nombre del Paciente</th>
                  <th>Médico</th>
                  <th>Especialidad</th>
                  <th>Fecha del Turno</th>
                  <th>Acciones</th>
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
                        <BotonEditar
                          turno={turno}
                          onEditar={onEditar}
                        />
                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() => onEliminar(turno.id)}
                        >
                          Eliminar
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {turnos.length === 0 && (
              <div className="alert alert-warning text-center">
                No hay turnos registrados.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TablaTurnos;