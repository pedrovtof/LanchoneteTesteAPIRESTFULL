const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name_cliente:String,
    mail:String,
    phone_number:Number,
    adress:String,
    password:String
})

const Model = mongoose.model('clientes',schema);
module.exports=Model;