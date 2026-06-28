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
      setMedico(dataToEdit.medico);
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
    if (!especialidad || !medico || !nombrePaciente.trim() || !fecha) {
      alert("Debe completar todos los campos.");
      return;
    }
    const nuevoTurno = {
      nombre: nombrePaciente,
      especialidad,
      medico,
      fecha,
      id: dataToEdit ? dataToEdit.id : Date.now()
    };
    if (dataToEdit) updateData(nuevoTurno);
    else createData(nuevoTurno);
    handleReset();
  };

  return (
    <div className="card border-0 shadow-sm mb-4">

      <div className="card-header bg-primary text-white py-3">
        <h5 className="mb-0"> Solicitar Turno Médico</h5>
      </div>

      <div className="card-body p-4">
        <form onSubmit={handleSubmit}>

          <div className="row g-3">
            <div className="col-md-6">
              <Especialidades
                especialidadSeleccionada={especialidad}
                onEspecialidadChange={setEspecialidad}
              />
            </div>
            <div className="col-md-6">
              <Medicos
                especialidadSeleccionada={especialidad}
                medicoSeleccionado={medico}
                onMedicoChange={setMedico}
              />
            </div>
          </div>

          <div className="row g-3 mt-1">
            <div className="col-md-6">
              <PacienteInput
                nombre={nombrePaciente}
                onNombreChange={setNombrePaciente}
              />
            </div>
            <div className="col-md-6">
              <FechaTurno
                fecha={fecha}
                onFechaChange={setFecha}
              />
            </div>
          </div>

          <div className="d-flex gap-2 mt-4">
            <BotonAgregar
              isEditing={dataToEdit !== null}
              onClick={handleSubmit}
            />
            {dataToEdit && (
              <button
                type="button"
                className="btn btn-light border w-100"
                onClick={handleReset}
              >
                Cancelar
              </button>
            )}
          </div>

        </form>
      </div>
    </div>
  );
}

export default Form;