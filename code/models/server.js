const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const { dbConnection } = require("../db/config");
const User = require("../models/user.js");

require("dotenv").config();

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;

    this.conectarDB();
    this.middlewares();
    this.routes();
  }

  async conectarDB() {
    await dbConnection();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(express.json());
    this.app.use(cors());
    this.app.use(morgan("dev"));
  }

  routes() {
    this.app.use('/usuario', require("../routes/user.routes.js"));
    this.app.use('/curso', require("../routes/courses.routes.js"));
    this.app.use('/estudiante', require("../routes/students.routes.js"));
    this.app.use('/maestro', require("../routes/teacher.routes.js"));
  }

   listen() {
    this.app.listen(this.port, () => {
      console.log("Servidor ejecutansose y escuchando en el puerto", this.port);
    });
  }
}

module.exports = Server;
