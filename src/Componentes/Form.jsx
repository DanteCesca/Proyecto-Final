// src/Componentes/Forma.jsx
import { useState, useEffect } from "react";
import Especialidades from "./Especialidades";
import Medicos from "./Medicos";
import PacienteInput from "./Pacientes";
import FechaTurno from "./FechaTurno";
import BotonAgregar from "./BotonAgregar";

function Form({ createData, updateData, dataToEdit, setDataToEdit }) {
  const [especialidad, setEspecialidad] = useState("");
  const [nombrePaciente, setNombrePaciente] = useState("");
  const [fecha, setFecha] = useState("");

    useEffect(() => {
    if (dataToEdit) {
      setNombrePaciente(dataToEdit.nombre);
      setEspecialidad(dataToEdit.especialidad);
      setFecha(dataToEdit.fecha);
    } else {
      handleReset();
    }
  }, [dataToEdit]);

  const handleReset = () => {
    setEspecialidad("");
    setNombrePaciente("");
    setFecha("");
    if(setDataToEdit) setDataToEdit(null);
   };

  const handleSubmit = (e) => {
    e.preventDefault();

    const nuevoTurno = {
      nombre: nombrePaciente,
      especialidad: especialidad,
      fecha: fecha,
      id: dataToEdit ? dataToEdit.id : Date.now()
    };

    if (dataToEdit) {
      updateData(nuevoTurno);
    } else {
      createData(nuevoTurno);
    }

    handleReset();
  };


  return (
     <form className="card p-3 shadow" onSubmit={handleSubmit}>
      <Especialidades
        especialidadSeleccionada={especialidad}
        onEspecialidadChange={setEspecialidad}
      />

      <Medicos
        especialidadSeleccionada={especialidad}
      />

      <PacienteInput
        nombre={nombrePaciente}
        onNombreChange={setNombrePaciente}
      />

      <FechaTurno
        fecha={fecha}
        onFechaChange={setFecha}
      />
      
      <div className="mt-3">
        <BotonAgregar isEditing={dataToEdit !== null} />
      </div>

    </form>
  );
}

export default Form;