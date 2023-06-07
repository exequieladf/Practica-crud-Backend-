const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');
const auth = require("../middlewares/auth")


router.get('/session', userController.session);
router.get('/probar',auth, userController.probarSession);
router.get('/cerrar', userController.cerrarSession);

module.exports = router