import "./Styles/App.css";
import Forma from "./Componentes/Form";
import Tabla from "./Componentes/Tabla";

function App() {
  return (
    <div className="container mt-4">
      <h1>Gestión de Turnos Médicos</h1>

      <Forma />

      <Tabla />
    </div>
  );
}

export default App;
