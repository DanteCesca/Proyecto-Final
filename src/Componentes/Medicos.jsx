import { useState } from "react";

function Medicos({ especialidadSeleccionada, medicoSeleccionado, onMedicoChange }) {

  const medicos = [
    { id: 1, nombre: "Dr. Marzelo Aguilar", especialidad: "Gastroenterología" },
    { id: 2, nombre: "Dra. Martina Gomez", especialidad: "Gastroenterología" },
    { id: 3, nombre: "Dr. Eduardo Pino", especialidad: "Cardiología" },   
    { id: 4, nombre: "Dra. Sofia Benitez ", especialidad: "Cardiología" },   
    { id: 5, nombre: "Dra. Claudia Zamora", especialidad: "Dermatología" }, 
    { id: 6, nombre: "Dr. Lucas Rossi", especialidad: "Dermatología" },   
    { id: 7, nombre: "Dr. Carlos Fuentes", especialidad: "Clínica Médica" },     
    { id: 8, nombre: "Dra. Beatriz Herrera", especialidad: "Clínica Médica" },       
    { id: 9, nombre: "Dra. Valeria Ortega", especialidad: "Oftalmología" },       
    { id: 10, nombre: "Dr. Tomas Mendez", especialidad: "Oftalmología" },       
    { id: 11, nombre: "Dr. Alegandro Rios ", especialidad: "Neumonología" },       
    { id: 12, nombre: "Dra. Elena Petterson", especialidad: "Neumonología" },       
    { id: 13, nombre: "Dra. Laura Castro", especialidad: "Pediatría" },      
    { id: 14, nombre: "Dr. Facundo Diaz", especialidad: "Pediatría" },       
  ];

   const medicosFiltrados = medicos.filter(
    (m) => m.especialidad === especialidadSeleccionada
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
        onChange={(e) => onMedicoChange(e.target.value)}
      >
        <option value="">Seleccione un médico</option>
        {medicosFiltrados.map((medico) => (
          <option key={medico.id} value={medico.nombre}>
            {medico.nombre}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Medicos;