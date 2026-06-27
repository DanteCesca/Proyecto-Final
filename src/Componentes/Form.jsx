import { useState, useEffect } from "react";
import Especialidades from "./Especialidades";
import Medicos from "./Medicos";
import PacienteInput from "./Pacientes";
import FechaTurno from "./FechaTurno";
import BotonAgregar from "./BotonAgregar";

function Form({ createData, updateData, dataToEdit, onCancelarEdicion }) {

  const [especialidad, setEspecialidad] = useState("");
  const [medico, setMedico] = useState("");
  const [nombrePaciente, setNombrePaciente] = useState("");
  const [fecha, setFecha] = useState("");

  useEffect(() => {
    if (dataToEdit) {
      setEspecialidad(dataToEdit.especialidad);
      setNombrePaciente(dataToEdit.nombre);
      setFecha(dataToEdit.fecha);
    } else {
      handleReset();
    }
  }, [dataToEdit]);

  const handleReset = () => {
    setEspecialidad("");
    setMedico("");
    setNombrePaciente("");
    setFecha("");
    onCancelarEdicion(); 
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const nuevoTurno = {
      nombre: nombrePaciente,
      especialidad: especialidad,
      medico: medico,
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
        medicoSelecionado={medico}
        onMedicoChange={setMedico}
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
        <BotonAgregar
          isEditing={dataToEdit !== null}
          onClick={handleSubmit}
        />
      </div>

    </form>
  );
}

export default Form;