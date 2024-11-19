const getSuspender = (promise) => {
  let status = "pending";
  let response;

  const suspender = promise.then(
    (res) => {
      status = "success";
      response = res;
    },
    (err) => {
      status = "error";
      response = err;
    }
  );

  const read = () => {
    switch (status) {
      case "pending":
        throw suspender; // Esto suspende la ejecución
      case "error":
        throw response; // Esto lanza el error si lo hay
      default:
        return response; // Cuando los datos están listos
    }
  };

  return { read };
};

export function fetchData(url) {
  const promise = fetch(url)
    .then((response) => response.json())
    .then((json) => json);
  return getSuspender(promise);
}