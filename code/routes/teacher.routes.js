const { Router } = require("express");

const {
  actualizarCurso,
  buscarCurso,
  asignarCurso,
  eliminarCurso,
  registrarProfesor,
} = require("../controllers/teacher-controlador.js");

const { logged } = require("../middlewares/logged.js");
const { loggedisTeacher } = require("../middlewares/loggedIsTeacher.js");

const router = Router();

router.get('/mismaterias', [logged, loggedisTeacher], buscarCurso);
router.post('/registrar', [logged, loggedisTeacher], registrarProfesor);
router.post('/asignar/materia', [logged, loggedisTeacher], asignarCurso);
router.put('/actualizar/curso/:course',[logged, loggedisTeacher], actualizarCurso );
router.delete('/eliminar/curso/:course',[logged, loggedisTeacher], eliminarCurso);

module.exports = router;
