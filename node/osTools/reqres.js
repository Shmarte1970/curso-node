const http = require("node:http");
const { buscandoUnPuerto } = require("./freeport.js");

// console.log(process.env);

const elPuerto = process.env.NODE_ENV ?? 3000;

const server = http.createServer((req, res) => {
  console.log("request received");
  res.end("Repondiendo Peticion");
});

buscandoUnPuerto(3000).then((port) => {
  server.listen(port, () => {
    console.log(`servidor activo en el puerto http://localhost:${port}`);
  });
});
