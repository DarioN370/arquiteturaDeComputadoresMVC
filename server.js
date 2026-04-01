//configurar as variaveis de ambiente
require('dotenv').config()
//requerer o app
const app = require('./src/app')


//inicializacao do servidor
app.listen(process.env.PORTA, ()=>{console.info("Servidor inicializado")})