import conn from "../conexao.js"; // Importa a conexão do banco de dados

export const buscarTarefas = async (req, res) => {
  const sql = `SELECT * FROM tarefas`;

  conn.query(sql, (erro, dados) => {
    if (erro) {
      console.log(erro);
    } else {
      res.json(dados);
      res.end();
    }
  });
};

export const criarTarefas = async (req, res) => {
  const descricao = req.body.descricao;
  const nome_setor = req.body.nome_setor;
  const prioridade = req.body.genero;
  const data_cadastro = req.body.data_cadastro;
  const status = req.body.status;
  const usuario_id = req.body.usuario_id;

  const sql = `INSERT INTO tarefas (titulo, autor, genero, status, usuario ) 
               VALUES ('${descricao}', '${nome_setor}', '${prioridade}', '${data_cadastro}','${status}', '${usuario_id}')`;

  conn.query(sql, (erro) => {
    if (erro) {
      console.log(erro);
      res.status(500).json(erro.sqlMessage).end();
    } else {
      res.status(200).json("Cadastro de tarefa efetuado").end();
    }
  });
};

export const buscarTaredaPorId = (req, res) => {
  const id = req.params.id;
  const sql = `SELECT * FROM tarefas WHERE id_tarefa = '${id_tarefa}' `;

  conn.query(sql, (erro, dados) => {
    if (erro) {
      console.log(erro);
    } else {
      res.json(dados[0]);
      res.end();
    }
  });
};

export const atualizarTarefa = (req, res) => {
  const id = req.params.id;
  const descricao = req.body.descricao;
  const nome_setor = req.body.nome_setor;
  const prioridade = req.body.genero;
  const data_cadastro = req.body.data_cadastro;
  const status = req.body.status;
  const usuario_id = req.body.usuario_id;
  const sql = `UPDATE tarefas SET titulo = '${descricao}', '${nome_setor}', '${prioridade}', '${data_cadastro}','${status}', '${usuario_id}' WHERE id_tarefa = '${id_tarefa}' `;

  conn.query(sql, (erro) => {
    if (erro) {
      console.log(erro);
      res.status(500).end();
    } else {
      res.status(200).end();
    }
  });
};

export const deletarTarefa = (req, res) => {
  const id = req.params.id;

  const sql = `DELETE FROM tarefas WHERE id_tarefa = '${id_tarefa}'`;

  conn.query(sql, (erro, result) => {
    if (erro) {
      console.log(erro);
      res.status(500).json(erro.sqlMessage).end();
    } else {
      res.status(200).json(JSON.stringify(result)).end();
    }
  });
};
