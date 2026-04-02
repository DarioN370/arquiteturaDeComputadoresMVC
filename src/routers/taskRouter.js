// requerer o express
const express = require('express')
//instanciar o metodo rotas do express
const router = express.Router()
//requerer o taskController
const taskController = require ('../controller/taskController')

router.get('/task/add',taskController.createTask)

//exportar a rota
module.exports = router