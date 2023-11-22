const fs = require('node:fs')

const stats = fs.statSync('./archivo.txt')

console.log ('En un Fichero', stats.isFile()) 
console.log ('Es un Directorio', stats.isDirectory())
console.log ('Es un enlace se sistema', stats.isSymbolicLink())
console.log ('Tamaño ', stats.size, ' bytes')



