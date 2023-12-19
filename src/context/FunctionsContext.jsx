import { createContext, useState } from "react";

export const FunctionsContext = createContext();

const FunctionsProvider = ({ children }) => {
  const [contFavoritos, setContFavoritos] = useState([]);
  const [contTarea, setContTarea] = useState([]);
  const [contNotas, setContNotas] = useState([]);

  const tareaNueva = (data) => {
    data.id = Date.now();
    setContTarea([...contTarea, data]);
  };

  const eliminarTarea = (id) => {
    setContTarea(contTarea.filter((item) => item.id !== id));
  };

  const notaNueva = (data) => {
    data.id = Date.now();
    setContNotas([...contNotas, data])
  };

  const eliminarNota = (id) => {
    setContNotas(contNotas.filter((item) => item.id !== id));
  };

  const handleFavoritos = (data) => {
    const nuevoFavorito = contFavoritos.find((item) => item.id === data.id);
    if (!nuevoFavorito) {
      setContFavoritos([...contFavoritos, data]);
    } else {
      return;
    }
  };

  const eliminarFav = (id) => {
    setContFavoritos(contFavoritos.filter((item) => item.id !== id));
  };

  return (
    <FunctionsContext.Provider
      value={{
        handleFavoritos,
        contFavoritos,
        setContFavoritos,
        eliminarFav,
        contTarea,
        setContTarea,
        tareaNueva,
        eliminarTarea,
        notaNueva,
        contNotas, 
        setContNotas,
        eliminarNota
      }}>
      {children}
    </FunctionsContext.Provider>
  );
};

export default FunctionsProvider;
