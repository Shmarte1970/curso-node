const os = require("node:os");

console.log("Nombre del Equipo", os.platform());
console.log("Version del OS", os.release());
console.log("Arquitectura del OS", os.arch());
console.log("CPUs", os.cpus());
console.log("Nombre de la maquina", os.hostname());
console.log("Memoria libre", os.freemem() / 1024 / 1024);
console.log("Memoria total", os.totalmem() / 1024 / 1024);
console.log("uptime", os.uptime() / 60 / 60 / 24);
