// requerer o MODEL TASK
const task = require ('../model/task')

//Criando a classe task controller
module.exports = class taskController{
    static createTask(req, res){
        res.render('/task/create')
    }
}