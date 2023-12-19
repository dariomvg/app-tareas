import { useContext, useState } from "react";
import { FunctionsContext } from "../../context/FunctionsContext";
import { inicialNotas } from "../../constantes/objForm";
import "./Notas.scss";

export function FormNotas() {
  const [formNota, setFormNota] = useState(inicialNotas);
  const {notaNueva} = useContext(FunctionsContext); 

  const handleChangeNotas = (e) => {
    setFormNota({
      ...formNota,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitNota = (e) => {
    e.preventDefault();
    notaNueva(formNota)
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
          placeholder="Agregue el título de la nota"
          className="input-nota"
          value={formNota.titulo}
          onChange={handleChangeNotas}
        />
      </div>
      <div className="div-input">
        <label>Coloque una fecha de término</label>
        <input
          type="datetime-local"
          name="fecha"
          className="input-nota"
          value={formNota.fecha}
          onChange={handleChangeNotas}
        />
      </div>
    <div className="div-input">
      <label>Nota</label>
      <textarea
        rows="3"
        name="nota"
        placeholder="Agregue su nota"
        className="input-nota textarea"
        value={formNota.nota}
        onChange={handleChangeNotas}>
        Ingrese su nota
      </textarea>
    </div>


      <button className="btn-nota" type="submit">Agregar</button>
    </form>
  );
}
