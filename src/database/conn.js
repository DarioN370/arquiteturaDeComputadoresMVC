//requerer as variaveis de ambiente - DOTENV
require("dotenv").config();

// requerer a classe sequelize
const { Sequelize } = require("sequelize");

//conecta com o banco
const conn = new Sequelize(
  process.env.DATABASE,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
  },
);

// autenticacao do banco com try catch para tratar possiveis erros
try {
  conn.authenticate();
  console.log("Banco de dados Conectado");
} catch (error) {
  console.log(`Banco não inicializado: ${error}`);
}

//exportacao do banco
module.exports = conn;
