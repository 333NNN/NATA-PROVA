import conn from "../conexao.js"; 

export const buscarUsuarios = (req, res) => {
  const sql = `SELECT * FROM usuarios `;

  conn.query(sql, (erro, result) => {
    if (erro) {
      console.log(erro);
      res.status(500).json(erro).end();
    } else {
      res.status(200).json(result).end();
    }
  });
}

export const criarUsuario = (req, res) => {
  const nome = req.body.nome;
  const email = req.body.email;

  const sql = `INSERT INTO usuarios (nome, email) VALUES ('${nome}', '${email}')`;

  conn.query(sql, (erro) => {
    if (erro) {
      console.log(erro);
      res.status(500).json(erro.sqlMessage).end();
    } else {
      res.status(200).json("Cadastro efetuado").end();
    }
  });
}