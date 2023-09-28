import { useContext, useEffect, useState } from "react";
import { FormTarea } from "./FormTarea";
import "./Tareas.scss";
import { TareaNueva } from "./TareaNueva";
import { ThemeContext } from "../../context/ThemeContext";

export function ContainerTarea({handleFavoritos}) {

  const {theme} = useContext(ThemeContext); 
  const [contTarea, setContTarea] = useState([]);

  const handleTareaNueva = (data) => {
    data.id = Date.now();
    setContTarea([...contTarea, data]);
  };

  const eliminarTarea = (id) => {
    setContTarea(contTarea.filter((item) => item.id !== id));
  };

  useEffect(() => {
    const dataLocal = localStorage.getItem("tareas");
    if (dataLocal) {
      setContTarea(JSON.parse(dataLocal));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tareas", JSON.stringify(contTarea));
  }, [contTarea]);

  return (
    <section className={`ruta-tareas ${theme ? "dark-tareas" : ""}`}>
      <FormTarea handleTareaNueva={handleTareaNueva}/>

      <section className="section-tareas">
        {contTarea.length > 0 ? (
          contTarea.map((item) => <TareaNueva key={item.id} item={item} eliminarTarea={eliminarTarea}  handleFavoritos={handleFavoritos} />)
        ): (
          <h1 className="titulo-sin-tareas">Sin tareas</h1>
        )}
      </section>
    </section>
  );
}
