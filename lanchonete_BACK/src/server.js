const express = require('express');
const cors = require('cors');
const path = require ('path');
const app = express();



const db = require('./dataBase/database')
const routes = require('./routes/route')

 
//conecta banco
db.connect() 

//lista para acesso cors
const allowedOrigins = [
    'http://127.0.0.1:5500', //localhost porta 5500
]
//habilita o cors
app.use(cors({
    origin:function(origin, callback){
        let allowed = true;
        //mobile
        if(!origin){ allowed = true }
        if(!allowedOrigins.includes(origin)){ allowed = false }
        callback(null, allowed)

    },
}))


//habilita server para receber dados JSON
app.use(express.json());

//rota api
app.use('/api', routes)


//404 error not found
app.use('/', (req, res)=>{
    res.send('pagina nao encontrada');
})


//executando servidor
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Server online na porta ${port}`));

