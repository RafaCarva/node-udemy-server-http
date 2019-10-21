const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var productSchema = new Schema({
    name: String,
    department: String,
    price: Number
});

//'Product' + 's' vai ser o nome da coleção lá no mongo
module.exports = mongoose.model('Product', productSchema);