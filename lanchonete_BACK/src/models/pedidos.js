const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    client_id:Number,
    client_product:Number,
    date:Date,
    status:String,
})

const Model = mongoose.model('pedidos',schema);
module.exports=Model;