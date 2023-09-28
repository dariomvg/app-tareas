import "./Favoritos.scss";

export function TareaFavorita({ item, eliminarFav, info }) {
  const { titulo, tarea, id } = item;

  return (
    <>
      <section className={`container-favoritos ${info ? "modal" : ""}`}>
        <button className="eliminar-fav" onClick={() => eliminarFav(id)}>
          X
        </button>
        <h3 className="titulo-fav">{titulo}</h3>
        <p className="tarea-fav">{tarea}</p>

      </section>
    </>
  );
}
