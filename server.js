//configurar as variaveis de ambiente
require('dotenv').config()
//requerer o app
const app = require('./src/app')
//requerer a conexao
const db = require('./src/database/conn')
db.sync()
    .then(() =>{
        //inicializacao do servidor
        app.listen(process.env.PORTA, ()=>{console.info("Servidor inicializado")})
    })
    .catch(error => console.info(error))