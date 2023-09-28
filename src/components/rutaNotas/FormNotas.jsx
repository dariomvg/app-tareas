import { useState } from "react";
import "./Notas.scss";
import { inicialNotas } from "../../constantes/objNotas";

export function FormNotas({handleNotaNueva}) {
  const [formNota, setFormNota] = useState(inicialNotas);

  const handleChangeNotas = (e) => {
    setFormNota({
      ...formNota,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitNota = (e) => {
    e.preventDefault();
    handleNotaNueva(formNota)
    setFormNota(inicialNotas)
  };

  return (
    <form
      onSubmit={handleSubmitNota}
      className="form-nota"
      >
      <div className="div-input">
        <label>Título de la nota</label>
        <input
          type="text"
          name="titulo"
          placeholder="Salir a caminar, terminar..."
          className="input-nota"
          value={formNota.titulo}
          onChange={handleChangeNotas}
        />
      </div>
      <div className="div-input">
        <label>Ingrése la fecha de término</label>
        <input
          type="datetime-local"
          name="fecha"
          className="input-nota"
          value={formNota.fecha}
          onChange={handleChangeNotas}
        />
      </div>

      <textarea
        rows="3"
        name="nota"
        placeholder="Ingrése su Nota"
        className="div-input input-nota textarea"
        value={formNota.nota}
        onChange={handleChangeNotas}>
        Ingrese su nota
      </textarea>

      <button className="btn-nota" type="submit">Agregar</button>
    </form>
  );
}
