const express = require('express')
const router = express.Router()
const Maths = require('../controller/mathsController')


router.get('/dividir/:divisor/:dividendo', Maths.div) 
router.get('/sumar/:num1/:num2', Maths.sum) 
router.get('/parimpar', Maths.parimpar) 

module.exports = router



