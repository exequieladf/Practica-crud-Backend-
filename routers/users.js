const express = require('express')
const router = express.Router()
const {users} = require('../controller/usersController')


router.get('/pets/:name/:apellido',users) 

module.exports = router