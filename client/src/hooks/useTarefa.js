// Importa a url da api do aquivo .env
const url = import.meta.env.VITE_API_URL;

import { useState, useEffect } from "react";

export function useInserirTarefa() {
  const inserirTarefa = async (data) => {
    const req = await fetch(`${url}/tarefas`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const res = await req.json();
    console.log("ltarefa inserida:", res);
    return res;
  };

  return { inserirTarefa };
}

export function useListaTarefas() {
  const [tarefas, setTarefas] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const req = await fetch(`${url}/tarefas`);
        const tarefas = await req.json();
        setTarefas(tarefas);
      } catch (erro) {
        console.log(erro.message);
      }
    }
    fetchData();
  }, []);

  return tarefas;
}

export function useDeletaTarefa() {
  const deletarTarefa = async (idTarefa) => {
    const req = await fetch(`${url}/tarefas/${idTarefa}`, {
      method: "DELETE",
    });
    const res = await req.json();
    return res;
  };
  return { deletarTarefa };
}

export function useBuscarTarefaPorId() {
  const buscarTarefaPorId = async (idTarefa) => {
    const req = await fetch(`${url}/tarefas/${idTarefa}`);
    const res = await req.json();
    console.log("Tarefa encontrada:", res);
    return res;
  };
  return { buscarTarefaPorId };
}

export function useAtualizaTarefa() {
  const atualizaTarefa = async (data, idTarefa) => {
    console.log(data);

    const req = await fetch(`${url}/tarefas/${idTarefa}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const res = await req.json();
    console.log("Tarefa atualizada:", res);
    return res;
  };
  return { atualizaTarefa };
}
