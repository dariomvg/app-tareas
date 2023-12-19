import { useContext, useEffect } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import {
  getLocalStorageFavoritos,
  setLocalStorageFavoritos,
} from "../../controllers/usosLocalStorage";
import { FunctionsContext } from "../../context/FunctionsContext";
import { ContainerTarea } from "../rutaTareas/ContainerTarea";
import { ContainerNotas } from "../rutaNotas/ContainerNotas";
import { ContainerFavoritos } from "../rutaFavoritos/ContainerFavoritos";
import { Menu } from "./Menu";
import "./SeccionPrincipal.scss";

export function SeccionPrincipal() {
  const {contFavoritos, setContFavoritos} = useContext(FunctionsContext); 

  useEffect(() => {
    const dataLocal = getLocalStorageFavoritos();
    if (dataLocal) {
      setContFavoritos(JSON.parse(dataLocal));
    }
  }, []);

  useEffect(() => {
    setLocalStorageFavoritos(contFavoritos);
  }, [contFavoritos]);

  return (
    <div className="wrapper-principal">
      <HashRouter>
        <Menu />
        <Routes>
          <Route
            path="/"
            element={<ContainerTarea />}
          />
          <Route exact path="/notas" element={<ContainerNotas />} />
          <Route
            path="/favoritos"
            element={<ContainerFavoritos />}
          />
          <Route
            path="*"
            element={<h1 style={{ padding: "40px" }}>Error 404, Not Found</h1>}
          />
        </Routes>
      </HashRouter>
    </div>
  );
}
