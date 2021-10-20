const express = require("express");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;

    // Middlewares
    // Rutas de mi aplicación
    this.middlewares();

    this.routes();
  }

  middlewares() {
    //Directorio Publico
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.get("/api", (req, res) => {
      res.json({
        ok: true,
        msg: "get Api",
      });
    });
    this.app.put("/api", (req, res) => {
      res.json({
        ok: true,
        msg: "get Api",
      });
    });
    this.app.post("/api", (req, res) => {
      res.json({
        ok: true,
        msg: "get Api",
      });
    });
    this.app.delete("/api", (req, res) => {
      res.json({
        ok: true,
        msg: "get Api",
      });
    });
  }

  listen() {
    this.app.listen(process.env.PORT, () => {
      console.log("Servidor corriendo en puerto", this.port);
    });
  }
}

module.exports = Server;
