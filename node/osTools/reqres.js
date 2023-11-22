const http = require("node:http");

const server = http.createServer((req, res) => {
  console.log("request received");
  res.end("Repondiendo Peticion");
});

server.listen(0, () => {
  console.log(
    `srvidor activo en el puerto http://localhost:${server.address().port}`
  );
});
