const net = require("node:net");

function buscandoUnPuerto(elPuerto) {
  return new Promise((resolve, reject) => {
    const server = net.createServer();

    server.listen(elPuerto.port, () => {
      const { port } = server.address();
      server.close(() => {
        resolve(port);
      });
    });

    server.on("error", (err) => {
      if (error.code === "EADDRINUSE") {
        buscandoUnPuerto(0).then((port) => resolve(port));
      } else {
        reject(err);
      }
    });
  });
}

module.exports = { buscandoUnPuerto };
