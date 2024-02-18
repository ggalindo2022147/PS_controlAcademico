const { Router } = require("express");

const {
  crear,
  allCourses
} = require("../controllers/courses-controlador.js");

const { logged } = require("../middlewares/logged.js");
const { loggedisTeacher } = require("../middlewares/loggedIsTeacher.js");

const router = Router();

router.get('/',[logged, loggedisTeacher], allCourses);
router.post('/crear/curso', [logged, loggedisTeacher], crear);

module.exports = router;
