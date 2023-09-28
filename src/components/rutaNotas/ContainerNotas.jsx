import { useContext, useEffect, useState } from "react";
import "./Notas.scss";
import { FormNotas } from "./FormNotas";
import { NotaNueva } from "./NotaNueva";
import { ThemeContext } from "../../context/ThemeContext";

export function ContainerNotas() {
 const {theme} = useContext(ThemeContext); 

 const [nota, setNota] = useState([]);

 const handleNotaNueva = (data) => {
   data.id =  Date.now();
   setNota([...nota, data]);
 };

 const eliminarNota = (id) => {
   setNota(nota.filter((item) => item.id !== id));
 };

 useEffect(() => {
   const dataLocal = localStorage.getItem("notas");
   if (dataLocal) {
     setNota(JSON.parse(dataLocal));
   }
 }, []);

 useEffect(() => {
   localStorage.setItem("notas", JSON.stringify(nota));
 }, [nota]);
 
  return (
    <section className={`ruta-notas ${theme ? "dark-notas" : ""}`}>
      <FormNotas handleNotaNueva={handleNotaNueva} />
      <section className="section-notas">
        {nota.length > 0 ? (
        nota.map((item) => (
          <NotaNueva key={item.id} item={item} eliminarNota={eliminarNota} />
        ))
      ) : (
        <h1 className="title-sin-notas">Sin Notas</h1>
      )}
      </section>
      
    </section>
  );
}
