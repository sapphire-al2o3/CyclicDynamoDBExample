require('dotenv').config();
console.log(process.env.CYCLIC_DB);
console.log(process.env.AWS_ACCESS_KEY_ID);
const CyclicDB = require('@cyclic.sh/dynamodb');
const db = CyclicDB(process.env.CYCLIC_DB);

async function run() {
    let animals = db.collection('animals');

    // create an item in collection with key "leo"
    let leo = await animals.set('leo', {
        type:'cat',
        color:'orange'
    })

    // get an item at key "leo" from collection animals
    let item = await animals.get('leo');
    console.log(item);
}
run();