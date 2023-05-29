const mongoose = require('mongoose')

function connect(){
    mongoose.connect("mongodb://127.0.0.1:27017/api-restfull"); //conectando ao db

    const db = mongoose.connection;//criando constante
    
    db.once('open', ()=>{ 
        console.log('conectado ao DB')
    })
    
    db.on('error', console.error.bind(console, 'conexão deu erro: ')) //erro
}

module.exports = {connect};