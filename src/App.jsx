import { useState } from "react";
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

  return (
    <div className="d-flex flex-column min-vh-100">

      <nav className="navbar bg-primary px-4 py-3">
        <div className="container">
          <span className="navbar-brand text-white fw-bold fs-4">
            Clínica Tucumán
          </span>
          <span className="text-white-50 small">
            Portal de Autogestión de Turnos
          </span>
        </div>
      </nav>

      <main className="flex-grow-1">
        <div className="container mt-4" style={{ maxWidth: "960px" }}>
          <Form
            dataToEdit={dataToEdit}
            createData={createData}
            updateData={updateData}
            onCancelarEdicion={() => setDataToEdit(null)}
          />
          <TablaTurnos
            turnos={turnos}
            onEditar={(t) => setDataToEdit(t)}
            onEliminar={(id) => setTurnos(turnos.filter((t) => t.id !== id))}
          />
        </div>
      </main>

      <footer className="bg-primary text-white text-center py-3 mt-5">
        <small>©copyright 2026 Hermanos Cesca — Turnero Médico.</small>
      </footer>

    </div>
  );
}

export default App;