const express = require('express')
const router = express.Router()
const {objPost} = require('../controller/objPostController')


router.post('/objpost',objPost) 

module.exports = router



