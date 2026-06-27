const BotonAgregar = ({ isEditing }) => {

  const texto = isEditing ? "Aceptar" : "Agregar";
  const estilo = isEditing ? "btn btn-success w-100" : "btn btn-primary w-100";

  return (
    <button type="submit" className={estilo}>
      {texto}
    </button>
  );
};

export default BotonAgregar;