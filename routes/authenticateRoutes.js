const express = require('express')
const router = express.Router()

const authenticateController = require('../controller/authenticateController')

router.post('/', authenticateController.dbAuth.check)

module.exports = router;