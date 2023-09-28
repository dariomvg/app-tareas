import "./Notas.scss";

export function NotaNueva({ item, eliminarNota }) {

  const { id, titulo, fecha, nota } = item;

  return (
    <section className="container-nota">
      <button className="eliminar-nota" onClick={() => eliminarNota(id)}>X</button>
      <h3 className="titulo-nota">{titulo}</h3>
      <strong className="titulo-fecha">Fecha límite:</strong>
      <p className="fecha-nota">{fecha}Hs</p>
      <div className="div-nota">
        <p className="p-nota">{nota}</p>
      </div>
    </section>
  );
}
