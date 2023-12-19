export const getLocalStorageTareas = () => {
  const dataLocal = localStorage.getItem("tareas");
  return dataLocal;
};

export const setLocalStorageTareas = (tarea) => {
  localStorage.setItem("tareas", JSON.stringify(tarea));
};

export const getLocalStorageNotas = () => {
  const dataLocal = localStorage.getItem("notas");
  return dataLocal;
};

export const setLocalStorageNotas = (nota) => {
  localStorage.setItem("notas", JSON.stringify(nota));
};

export const getLocalStorageFavoritos = () => {
  const dataLocal = localStorage.getItem("favoritos");
  return dataLocal;
};

export const setLocalStorageFavoritos = (favorito) => {
  localStorage.setItem("favoritos", JSON.stringify(favorito));
};
