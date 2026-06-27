import { useState } from "react";
import "./Styles/App.css";
import Form from "./Componentes/Form";
import TablaTurnos from "./Componentes/Tabla";

function App() {

  const [turnos, setTurnos] = useState([]);
  const [dataToEdit, setDataToEdit] = useState(null);

  const createData = (nuevoTurno) => {
    const turnoConId = { ...nuevoTurno, id: Date.now() };
    setTurnos([...turnos, turnoConId]);
  };

  const updateData = (turnoEditado) => {
    const actualizados = turnos.map((t) =>
      t.id === turnoEditado.id ? turnoEditado : t
    );
    setTurnos(actualizados);
    setDataToEdit(null);
  };

  const handleEditar = (turno) => {
    setDataToEdit(turno);
  };

  const handleEliminar = (id) => {
    const filtrados = turnos.filter((t) => t.id !== id);
    setTurnos(filtrados);
  };

  return (
    <div className="container mt-4">
      <h1>Gestión de Turnos Médicos</h1>

      <Form
        dataToEdit={dataToEdit}
        createData={createData}
        updateData={updateData}
        onCancelarEdicion={() => setDataToEdit(null)}
      />

      <TablaTurnos
        turnos={turnos}
        onEditar={handleEditar}
        onEliminar={handleEliminar}
      />
    </div>
  );
}

export default App;
