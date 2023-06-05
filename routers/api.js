const express = require('express')
const router = express.Router()
const apiController = require('../controller/apiController');
const { validarID } = require('../middlewares/validarID.js');
const checks = require('../middlewares/checks');
const { validarChecks } = require('../middlewares/validarChecks');


/*MIDDLEWARE es el software que se va a ubicar en medio de la 
ruta http y el controlador(callback)*/
//Middlewares de ruta, su proposito es validar la informacion 

router.get('/ver', apiController.list);
router.get('/buscar/id/:id',validarID,apiController.buscarSegunId);
router.post('/crear',checks, validarChecks,apiController.crear);
router.put('/editar/id/:id',validarID,checks,validarChecks , apiController.editar);
router.delete('/eliminar/id/:id',validarID, apiController.eliminar);



  module.exports = router