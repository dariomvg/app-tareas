import { FunctionsContext } from "../../context/FunctionsContext";
import { useContext } from "react";
import iconCerrar from "../../assets/icons/icon-cerrar.png";
import "./Notas.scss";

export function NotaNueva({ item }) {

  const { id, titulo, fecha, nota } = item;
  const {eliminarNota} = useContext(FunctionsContext); 

  return (
    <section className="container-nota">
      <button className="eliminar-nota" onClick={() => eliminarNota(id)}>
        <img src={iconCerrar} alt="imagen de x" width={30} height={30} />
      </button>
      <hr />
      <h3 className="titulo-nota">{titulo}</h3>
      <strong className="titulo-fecha">Fecha límite:</strong>
      <p className="fecha-nota">{fecha}Hs</p>
      <div className="div-nota">
        <p className="p-nota">{nota}</p>
      </div>
    </section>
  );
}
