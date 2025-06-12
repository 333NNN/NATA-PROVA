const url = import.meta.env.VITE_API_URL;

import { useState, useEffect } from "react";

export function useListaUsuarios() {
  const [usuarios, setUsuarios] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const req = await fetch(`${url}/usuarios`);
        const usuarios = await req.json();
        setUsuarios(usuarios);
      } catch (erro) {
        console.log(erro.message);
      }
    }
    fetchData();
  }, []);

  return usuarios;
}

export function useInserirUsuario() {
  const inserirUsuario = async (data) => {
    const req = await fetch(`${url}/usuarios`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const res = await req.json();
    console.log("usuario inserido:", res);
    return res;
  };

  return { inserirUsuario };
}
