import { useState } from "react";

function Medicos({ especialidadSeleccionada }) {
  const [medicoSeleccionado, setMedicoSeleccionado] = useState("");

  const medicos = [
    { id: 1, nombre: "Dr. Marzelo Aguilar", especialidad: 1 },    //1 Gastro
    { id: 2, nombre: "Dra. Martina Gomez", especialidad: 1 },     //2 Cardio
    { id: 3, nombre: "Dr. Eduardo Pino", especialidad: 2 },       //3 Derma
    { id: 4, nombre: "Dra. Sofia Benitez ", especialidad: 2 },    //4 ClinicaMed
    { id: 5, nombre: "Dra. Claudia Zamora", especialidad: 3 },    //5 Oftanmolo
    { id: 6, nombre: "Dr. Lucas Rossi", especialidad: 3 },        //6 Neumonologia
    { id: 7, nombre: "Dr. Carlos Fuentes", especialidad: 4 },      //7 Pediatria
    { id: 8, nombre: "Dra. Beatriz Herrera", especialidad: 4 },       
    { id: 9, nombre: "Dra. Valeria Ortega", especialidad: 5 },       
    { id: 10, nombre: "Dr. Tomas Mendez", especialidad: 5 },       
    { id: 11, nombre: "Dr. Alegandro Rios ", especialidad: 6 },       
    { id: 12, nombre: "Dra. Elena Petterson", especialidad: 6 },       
    { id: 13, nombre: "Dra. Laura Castro", especialidad: 7 },      
    { id: 14, nombre: "Dr. Facundo Diaz", especialidad: 7 },       
  ];

  const medicosFiltrados = medicos.filter(
    (m) => m.especialidad === especialidadSeleccionada
  );

  const medico = medicos.find(
    (m) => m.id === Number(medicoSeleccionado)
  );

  return (
    <div className="mb-3">
      <label htmlFor="medicos" className="form-label">
        Médico
      </label>

      <select
        id="medicos"
        className="form-select"
        value={medicoSeleccionado}
        onChange={(e) => setMedicoSeleccionado(e.target.value)}
      >
        <option value="">Seleccione un médico</option>

        {medicosFiltrados.map((medico) => (
          <option key={medico.id} value={medico.id}>
            {medico.nombre}
          </option>
        ))}
      </select>

      {medico && (
        <div className="alert alert-info mt-3">
          Médico seleccionado: {medico.nombre}
        </div>
      )}
    </div>
  );
}

export default Medicos;