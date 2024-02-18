const mongoose = require("mongoose");

const UsuarioSchema = new mongoose.Schema({
  nombre: {
    type: String,
    require: [true, "El nombre es obligatorio"],
  },
  correo: {
    type: String,
    require: [true, "El correo es obligatorio"],
    unique: true,
  },
  password: {
    type: String,
    require: [true, "La contraseña es ob;ligatoria"],
  },
  role: {
    type: String,
    require: true,
    default: "STUDENT_ROLE",
    enum: ["TEACHER_ROLE", "STUDENT_ROLE"],
  },
  estado: {
    type: String,
    default: false,
  },
});

module.exports = mongoose.model("User", UsuarioSchema);
