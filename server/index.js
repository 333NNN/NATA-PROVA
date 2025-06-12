import express from "express";
const app = express();
const port = 5000;

import {
  buscarUsuarios,
  criarUsuario,
} from "./controllers/usuarioController.js";

import {
  buscarTarefas,
  criarTarefas,
  buscarTarefaPorId,
  atualizarTarefa,
  deletarTarefa,
} from "./controllers/tarefaController.js";

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

import cors from "cors";

const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.get("/usuarios", buscarUsuarios);

app.post("/usuarios", criarUsuario);

app.get("/tarefas", buscarTarefas);
app.post("/tarefas", criarTarefas);
app.get("/tarefas/:id", buscarTarefaPorId);
app.put("/tarefas/:id", atualizarTarefa);
app.delete("/tarefas/:id", deletarTarefa);

app.get("/", (req, res) => {
  res.status(200);
  res.end();
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
