import { useContext, useState } from "react";
import { FunctionsContext } from "../../context/FunctionsContext";
import { tareaInicial } from "../../constantes/objForm";
import "./Tareas.scss";

export function FormTarea() {
  const [form, setForm] = useState(tareaInicial);
  const {tareaNueva} = useContext(FunctionsContext); 
 
  const handleChangeTarea = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmitTarea = (e) => {
    e.preventDefault();
    tareaNueva(form);
    setForm(tareaInicial);
  };

  return (
    <form className="form-tarea" onSubmit={handleSubmitTarea}>
      <input
        className="caja-tarea"
        type="text"
        placeholder="Ingrese título de la tarea"
        name="titulo"
        value={form.titulo}
        onChange={handleChangeTarea}
        required
      />
      <textarea
        className="caja-tarea textarea"
        rows="3"
        placeholder="Escríba su tarea aquí"
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
