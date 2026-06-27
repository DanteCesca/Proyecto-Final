import React from 'react';


const BotonEditar = ({ turno, onEditar }) => {

  return (
    <button 
      type="button" 
      className="btn btn-warning btn-sm" 
      onClick={() => onEditar(turno)} 
    >
      Editar
    </button>
  );
};

export default BotonEditar;