import { ThemeContext } from "../../context/ThemeContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import imgNotas from "../../assets/icons/img-notas.png";
import imgTareas from "../../assets/icons/img-tareas.png";
import imgFavoritos from "../../assets/icons/img-favoritos.png";
import imgLogo from "../../assets/images/img-logo.png";
import "./menu.scss";

export function Menu() {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleTheme = () => {
    setTheme(!theme);
  };

  return (
    <section className={`ligth ${theme ? "dark-menu" : ""} `}>
      <header className="header">
        <div className="logo">
          <img src={imgLogo} alt="imagen logo" />
          <h1 className="title-logo">Notas</h1>
        </div>
        <nav className="navbar">
          <ul className="lista-nav">
            <li>
              <img
                src={imgTareas}
                width={40}
                height={40}
                alt="imagen de tarea"
              />
              <Link className="ruta" to="/">
                Tareas
              </Link>
            </li>
            <li>
              <img
                src={imgNotas}
                width={40}
                height={40}
                alt="imagen de notas"
              />
              <Link className="ruta" to="/notas">
                Notas
              </Link>
            </li>
            <li>
              <img
                src={imgFavoritos}
                width={40}
                height={40}
                alt="imagen de favoritos"
              />
              <Link className="ruta" to="/favoritos">
                favoritos
              </Link>
            </li>
          </ul>
        </nav>
        <div className="toggle-switch">
          <label className="switch-label">
            <input type="checkbox" className="checkbox" />
            <span className="slider" onClick={handleTheme}></span>
          </label>
        </div>
      </header>
    </section>
  );
}
