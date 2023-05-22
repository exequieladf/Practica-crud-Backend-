const express = require('express')
const router = express.Router()
const {list} = require('../controller/listControllers')


router.get('/listadecompras',list) 

module.exports = router