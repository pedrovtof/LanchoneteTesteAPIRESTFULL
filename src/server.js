const express = require('express');
const cors = require('cors');
const db = require('./dataBase/database')
const routes = require('./routes/route')
const app = express();
 
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

//rota
app.use('/api', routes)

//executando servidor
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Server online na porta ${port}`));

