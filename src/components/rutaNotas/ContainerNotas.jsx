import { useContext, useEffect } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { FunctionsContext } from "../../context/FunctionsContext";
import {
  getLocalStorageNotas,
  setLocalStorageNotas,
} from "../../controllers/usosLocalStorage";
import { FormNotas } from "./FormNotas";
import { NotaNueva } from "./NotaNueva";
import "./Notas.scss";


export function ContainerNotas() {
  const { theme } = useContext(ThemeContext);
  const {contNotas, setContNotas} = useContext(FunctionsContext); 

  useEffect(() => {
    const dataLocal = getLocalStorageNotas();
    console.log(dataLocal)
    if (dataLocal) {
      setContNotas(JSON.parse(dataLocal));
    }
  }, []);

  useEffect(() => {
    setLocalStorageNotas(contNotas);
  }, [contNotas]);

  return (
    <section className={`ruta-notas ${theme ? "dark-notas" : ""}`}>
      <FormNotas />
      <hr />
      <section className="section-notas">
        {contNotas.length > 0 ? (
          contNotas.map((item) => (
            <NotaNueva key={item.id} item={item} />
          ))
        ) : (
          <h1 className="title-sin-notas">Sin Notas</h1>
        )}
      </section>
    </section>
  );
}
