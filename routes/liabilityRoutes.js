const express = require('express')
const router = express.Router()

const liabilityController = require('../controller/liabilityController')

router.get('/', liabilityController.dbLiability.getAllLiability)

router.get('/:id', liabilityController.dbLiability.getLiability)

router.post('/add', liabilityController.dbLiability.addLiability)

router.put('/update/:id', liabilityController.dbLiability.updateItem)

router.delete('/delete/:id', liabilityController.dbLiability.deleteItem)

module.exports = router;