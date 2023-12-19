import { FunctionsContext } from "../../context/FunctionsContext";
import { useContext, useState } from "react";
import iconLike from "../../assets/icons/icon-like.png";
import toast, { Toaster } from "react-hot-toast";
import iconCerrar from "../../assets/icons/icon-cerrar.png"
import "./Tareas.scss";

export function TareaNueva({ item }) {
  const { titulo, tarea, id } = item;
  const { handleFavoritos, eliminarTarea } = useContext(FunctionsContext);
  const [favoritos, setFavoritos] = useState(false);

  const notify = () =>
    toast.success("Se agregó a favoritos", {
      duration: 3000,
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
        fontWeight: "bold"
      },
    });

  const agregarFavorito = (tarea) => {
    setFavoritos(true);
    handleFavoritos(tarea);
    notify();
  };

  return (
    <section className="container-tarea">
      <Toaster />
      <div className="funciones-buttons">
        <img
          src={iconLike}
          width={30}
          height={30}
          alt=""
          onClick={() => agregarFavorito(item)}
          className={`icon-like ${favoritos ? "selected" : ""}`}
        />
        <button className="eliminar-tarea" onClick={() => eliminarTarea(id)}>
          <img width={30} height={30} src={iconCerrar} alt="imagen x" />
        </button>
      </div>
      <hr />
      <h3 className="titulo-tarea">{titulo}</h3>

      <div className="div-tarea">
        <p className="p-tarea">{tarea}</p>
      </div>
    </section>
  );
}
