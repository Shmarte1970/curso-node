const fs = require('node:fs/promises');

console.log('Leyendo el primer Archivo');
const test = fs.readFile('./archivo.txt', 'utf-8')
.then(test =>{
    console.log('primer texto', test);

});

console.log('haciendo Cosas Asincronas');


console.log('Leyendo el Segundo Archivo');
const test2 = fs.readFile('./archivo2.txt', 'utf-8' )
.then(test2 => {

    console.log('Este es el segundo archivo ', test2);

});
