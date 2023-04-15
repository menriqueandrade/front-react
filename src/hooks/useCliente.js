import { useState } from "react";

const useCliente = () => {
  const [cliente, setCliente] = useState(null);
  const [error, setError] = useState(null);

  const guardarCliente = async (nuevoCliente) => {
    try {
      const response = await fetch("http://localhost:8080/clientController/guardar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(nuevoCliente),
      });

      if (!response.ok) {
        throw new Error("Hubo un problema al guardar el cliente");
      }

      const data = await response.json();
      setCliente(data);
    } catch (error) {
      setError(error.message);
    }
  };

  return { cliente, error, guardarCliente };
};

export default useCliente;