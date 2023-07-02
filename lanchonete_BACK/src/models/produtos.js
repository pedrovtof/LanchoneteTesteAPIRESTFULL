const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name_product:String,
    price:Number,
})

const Model = mongoose.model('produtos',schema);
module.exports=Model;