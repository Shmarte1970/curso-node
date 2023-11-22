const fs = require('node:fs');

console.log('Leyendo el primer Archivo');
const test = fs.readFile('./archivo.txt', 'utf-8', (err, test) => {

    console.log('Este es el primer archivo ',test);

});

console.log('haciendo Cosas Asincronas');


console.log('Leyendo el Segundo Archivo');
const test2 = fs.readFile('./archivo2.txt', 'utf-8', (err, test2) => {

    console.log('Este es el segundo archivo ', test2);

});

