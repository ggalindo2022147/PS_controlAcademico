const { Router } = require("express");

const {
  perfil,
  actualizar,
  login,
  eliminar,
} = require("../controllers/users-controlador.js");

const { logged } = require("../middlewares/logged.js");

const router = Router();

router.get('/perfil', logged, perfil);
router.put('/actualizar/perfil', logged, actualizar);
router.post('/login', login);
router.delete('/eliminar/perfil', logged, eliminar);

module.exports = router;