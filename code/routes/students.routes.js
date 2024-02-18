const { Router } = require("express");

const {
  asignarCurso,
  registrarEstudiante,
  verMisCursos,
} = require("../controllers/stundents-controlador.js");

const { logged } = require("../middlewares/logged.js");
const { limitCourses } = require("../middlewares/limitCourses.js");

const router = Router();

router.get('/miscursos', logged, verMisCursos);
router.post('/registrar/estudiante', registrarEstudiante);
router.post('/asignar/curso', [logged, limitCourses], asignarCurso);

module.exports = router;
