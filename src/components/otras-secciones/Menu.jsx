import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./menu.scss";
import imgDia from "../../assets/images/img-dia.png";
import imgNoche from "../../assets/images/img-noche.png";
import imgNotas from "../../assets/icons/img-notas.png";
import imgTareas from "../../assets/icons/img-tareas.png";
import imgFavoritos from "../../assets/icons/img-favoritos.png";
import imgLogin from "../../assets/icons/img-login.png";
import imgFlechaIzq from "../../assets/icons/flechaIzq.svg";
import imgFlechaDer from "../../assets/icons/flechaDer.svg";
import { ThemeContext } from "../../context/ThemeContext";

export function Menu() {
  const [menu, setMenu] = useState(false);
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();

  const { theme, setTheme } = useContext(ThemeContext);

  const handleMenu = () => {
    setMenu(!menu);
  };

  const handleTheme = () => {
    setTheme(!theme);
  };

  return (
    <section className={`ligth ${theme ? "dark-menu" : ""} `}>
     <header className={`header ${menu ? "responsive" : ""}`}>
      {menu ? (
        <img
          onClick={handleMenu}
          src={imgFlechaDer}
          className="handle-button"
          width={30}
          height={30}
          alt="imagen flecha derecha"
        />
      ) : (
        <img
          onClick={handleMenu}
          src={imgFlechaIzq}
          className="handle-button"
          width={30}
          height={30}
          alt="imagen flecha izquierda"
        />
      )}
      {menu ? (
        <h1 className="title-menu-cerrado">T++</h1>
      ) : (
        <h1 className="title-header">Tareas++</h1>
      )}
      <nav className="navbar">
        <ul className="lista-nav">
          <li>
            <img src={imgTareas} width={38} height={38} alt="imagen de tarea" />
            <Link className="ruta" to="/">
              Tareas
            </Link>
          </li>
          <li>
            <img src={imgNotas} width={38} height={38} alt="imagen de notas" />
            <Link className="ruta" to="/notas">
              Notas
            </Link>
          </li>
          <li>
            <img
              src={imgFavoritos}
              width={38}
              height={38}
              alt="imagen de favoritos"
            />
            <Link className="ruta" to="/favoritos">
              favoritos
            </Link>
          </li>
          <li>
            <img src={imgLogin} width={38} height={38} alt="imagen de login" />
            {isAuthenticated ? (
              <h4 className="ruta login" onClick={() => logout()}>
                Cerrar Sesión
              </h4>
            ) : (
              <h4 className="ruta login" onClick={() => loginWithRedirect()}>
                Iniciar Sesión
              </h4>
            )}
          </li>
        </ul>
      </nav>
      {!theme ? (
        <img
          className="imgTheme"
          src={imgNoche}
          width={100}
          height={100}
          alt="imagen de dia"
          onClick={handleTheme}
        />
      ) : (
        <img
          className="imgTheme"
          src={imgDia}
          width={100}
          height={100}
          alt="imagen de dia"
          onClick={handleTheme}
        />
      )}
    </header>
  
    </section>
   );
}
