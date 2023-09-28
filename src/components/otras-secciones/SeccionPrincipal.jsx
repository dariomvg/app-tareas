import { HashRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import { ContainerTarea } from "../rutaTareas/ContainerTarea"
import { ContainerNotas } from "../rutaNotas/ContainerNotas";
import { ContainerFavoritos } from "../rutaFavoritos/ContainerFavoritos";
import { Menu } from "./Menu";
import "./SeccionPrincipal.scss";

export function SeccionPrincipal() {
  const [contFavoritos, setContFavoritos] = useState([]);

  const handleFavoritos = (data) => {
    const rep = contFavoritos.find((item) => item.id === data.id);
    if (rep) {
      return;
    } else {
      setContFavoritos([...contFavoritos, data]);
    }
  };

  const eliminarFav = (id) => {
    setContFavoritos(contFavoritos.filter((item) => item.id !== id))
  }; 

  useEffect(() => {
    const dataLocal = localStorage.getItem("favoritos"); 
    if(dataLocal){
      setContFavoritos(JSON.parse(dataLocal))
    }
  },[]);

  useEffect(() => {
    localStorage.setItem("favoritos", JSON.stringify(contFavoritos))
  },[contFavoritos]);

  return (
    <div className="wrapper-principal" >
      <HashRouter>
        <Menu />
        <Routes>
          <Route
            exact
            path="/"
            element={<ContainerTarea handleFavoritos={handleFavoritos} />}
          />
          <Route exact path="/notas" element={<ContainerNotas />} />
          <Route
            exact
            path="/favoritos"
            element={<ContainerFavoritos contFavoritos={contFavoritos} eliminarFav={eliminarFav} />}
          />
          <Route path="*" element={<h1 style={{padding:"40px"}}>Error 404, Not Found</h1>} />
        </Routes>
      </HashRouter>
    </div>
  );
}
