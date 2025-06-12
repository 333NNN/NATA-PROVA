import mysql from "mysql2";

const conn = mysql.createConnection({
  host: "localhost",
  port: "3306",
  user: "root",
  password: "",
  database: "kanban",
});

conn.connect((erro) => {
  if (erro) {
    console.log(erro);
  } else {
    console.log("Conectado com sucesso");
  }
});

export default conn;
