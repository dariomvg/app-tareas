import { useState } from "react";
import "./Tareas.scss";
import { tareaInicial } from "../../constantes/objTareas";


export function FormTarea({handleTareaNueva}) {
  const [form, setForm] = useState(tareaInicial);
 
  const handleChangeTarea = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmitTarea = (e) => {
    e.preventDefault();
    handleTareaNueva(form);
    setForm(tareaInicial);
  };

  return (
    <form className="form-tarea" onSubmit={handleSubmitTarea}>
      <input
        className="caja-tarea"
        type="text"
        placeholder="Terminar proyecto,Hacer... "
        name="titulo"
        value={form.titulo}
        onChange={handleChangeTarea}
        required
      />
      <textarea
        className="caja-tarea textarea"
        rows="3"
        placeholder="Escríba su Tarea aquí..."
        name="tarea"
        value={form.tarea}
        onChange={handleChangeTarea}
        required></textarea>
      <button className="btn-tarea" type="submit">
        Agregar
      </button>
    </form>
  );
}
