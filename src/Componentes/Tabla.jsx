import React from "react";

function TablaTurnos() {
  const turnos = [
    {
      id: 1,
      paciente: "Juan Pérez",
      medico: "Dr. Eduardo Pino",
      especialidad: "Cardiología",
      fecha: "2026/06/25",
    },
    {
      id: 2,
      paciente: "María López",
      medico: "Dra. Laura Castro",
      especialidad: "Pediatría",
      fecha: "2026/06/27",
    },
    {
      id: 3,
      paciente: "Pedro Sánchez",
      medico: "Dr. Lucas Rossi",
      especialidad: "Dermatología",
      fecha: "2026/06/30",
    },
  ];

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
                  <th></th>
                </tr>
              </thead>

              <tbody>
                {turnos.map((turno) => (
                  <tr key={turno.id}>
                    <td>{turno.paciente}</td>
                    <td>{turno.medico}</td>
                    <td>{turno.especialidad}</td>
                    <td>{turno.fecha}</td>
                    <td>
                      <div className="d-flex justify-content-center gap-2">
                        <button
                          className="btn btn-warning btn-sm"
                          onClick={() => {}}
                        >
                          <i className="bi bi-gear-fill"></i>
                        </button>

                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() => {}}
                        >
                          <i className="bi bi-trash-fill"></i>
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