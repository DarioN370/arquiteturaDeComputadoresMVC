//requerer o DataType (tipo de dados) do sequelize
const DataTypes = require('sequelize')

//requerer a conexao com o banco de dados
const db = require('../database/conn')

//Criando as colunas
const Task = db.define('task', {
    tittle:{
        type: DataTypes.STRING,
        required: true,
    },
    description:{
        type: DataTypes.STRING,
        required: true,
    },
    done:{
        type: DataTypes.BOOLEAN,
        required: true,
    }
})

//exportando
module.exports = Task