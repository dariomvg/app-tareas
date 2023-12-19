import { useContext, useEffect } from "react";
import { getLocalStorageTareas, setLocalStorageTareas } from "../../controllers/usosLocalStorage";
import { FunctionsContext } from "../../context/FunctionsContext";
import { FormTarea } from "./FormTarea";
import { TareaNueva } from "./TareaNueva";
import { ThemeContext } from "../../context/ThemeContext";
import "./Tareas.scss";

export function ContainerTarea() {
  const {theme} = useContext(ThemeContext); 
  const {contTarea, setContTarea} = useContext(FunctionsContext); 

  useEffect(() => {
    const dataLocal = getLocalStorageTareas(); 
    if (dataLocal) {
      setContTarea(JSON.parse(dataLocal));
    }
  }, []);

  useEffect(() => {
    setLocalStorageTareas(contTarea)
  }, [contTarea]);

  return (
    <section className={`ruta-tareas ${theme ? "dark-tareas" : ""}`}>
      <FormTarea />
      <hr />
      <section className="section-tareas">
        {contTarea.length > 0 ? (
          contTarea.map((item) => <TareaNueva key={item.id} item={item} />)
        ): (
          <h1 className="titulo-sin-tareas">Sin tareas</h1>
        )}
      </section>
    </section>
  );
}
