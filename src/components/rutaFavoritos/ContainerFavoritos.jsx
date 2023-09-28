import { useContext, useState } from "react";
import "./Favoritos.scss";
import { TareaFavorita } from "./TareaFavorita";
import { ThemeContext } from "../../context/ThemeContext";

export function ContainerFavoritos({ contFavoritos, eliminarFav }) {
  const [info, setInfo] = useState(false);
  const {theme} = useContext(ThemeContext); 

  const handleInfo = () => {
    setInfo(!info);
  };
  
  return (
    <section className={`light ${theme ? "dark-favoritos" : ""}`}>
      <section className={`ruta-favoritos ${info ? "fondo-modal" : ""}`}>
        {contFavoritos.length > 0 && (
          <button className="btn-info" onClick={handleInfo}>
            {!info ? "Ver Tarea" : "Salir de vista Principal"}
          </button>
        )}
        {contFavoritos.length > 0 ? (
          contFavoritos.map((item) => (
            <TareaFavorita
              key={item.id}
              item={item}
              eliminarFav={eliminarFav}
              info={info}
            />
          ))
        ) : (
          <h1 className="titulo-sin-favoritos">Sin favoritos agregados</h1>
        )}
      </section>
    </section>
  );
}
