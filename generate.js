var mongoose = require('mongoose');
var Product = require('./product.js');
var Faker = require('faker');

// http_client vai ser o nome do database
mongoose.connect(
    'mongodb://localhost:27017/http_client',
    {useNewUrlParser: true}
);

async function generateProducts(){
    for(let i=0; i<10; i++){
        let p = new Product({
            name: Faker.commerce.productName(),
            department: Faker.commerce.department(),
            price: Faker.commerce.price()
        });
        try {
            await p.save();
        }
        catch(err) {
            throw new Error('Error generating products.');
        }
    }  
}

// A função async vai retornar um promisse, então quando se chama essa
// função se usa o then para 'ser disparado' quando a função terminar.
generateProducts()
    .then( () => {
        mongoose.disconnect();
        console.log('OK');
    });