export function debounce(func, delay) {
  /* Recibe dos parametros funcion que queremos ejecurtar y delay tiempo de espera */
  let timeoutId;
  return function (...args) {
    /* pasa todo los argumentos  */
    // Cancelar el timeout anterior si existe
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    // Crear un nuevo timeout
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}
