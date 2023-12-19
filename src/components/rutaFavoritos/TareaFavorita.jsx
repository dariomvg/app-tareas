import { FunctionsContext } from "../../context/FunctionsContext";
import { useContext } from "react";
import iconCerrar from "../../assets/icons/icon-cerrar.png";
import "./Favoritos.scss";

export function TareaFavorita({ item, info }) {
  const { titulo, tarea, id } = item;
  const { eliminarFav } = useContext(FunctionsContext);

  return (
    <section className={`container-favoritos ${info ? "modal" : ""}`}>
      <button className="eliminar-fav" onClick={() => eliminarFav(id)}>
        <img width={30} height={30} src={iconCerrar} alt="imacen de x" />
      </button>
      <h3 className="titulo-fav">{titulo}</h3>
      <p className="tarea-fav">{tarea}</p>
    </section>
  );
}
