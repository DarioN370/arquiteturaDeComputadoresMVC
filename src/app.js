// requerer a biblioteca express
const express = require('express')
// instalar o express em uma const APP
const app = express()
//requerendo a conexao do banco
const conn = require('./database/conn.js')

//exportando a lib
module.exports = app