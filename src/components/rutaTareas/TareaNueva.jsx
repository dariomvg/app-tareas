import { useState } from "react";
import "./Tareas.scss";

export function TareaNueva({ item, eliminarTarea, handleFavoritos }) {
  const { titulo, tarea, id } = item;
  const [favoritos, setFavoritos] = useState(false); 

  const handleFavorito = () => {
    setFavoritos(true);
    if (!favoritos) {
      handleFavoritos(item)
    }else {
      return
    }
    
  };

  return (
    <section className="container-tarea">
      <div className="funciones-buttons">
        <div className={`circulo ${favoritos ? "selected" : ""}`} onClick={handleFavorito}></div>
        <button className="eliminar-tarea" onClick={() => eliminarTarea(id)}>
          x
        </button>
      </div>
      <h3 className="titulo-tarea">{titulo}</h3>
      <div className="div-tarea">
        <p className="p-tarea">{tarea}</p>
      </div>
    </section>
  );
}
