const express = require('express')
const router = express.Router()

const warrantyController = require('../controller/warrantyController')

router.get('/', warrantyController.dbWarranty.getAllWarranty)

router.get('/:id', warrantyController.dbWarranty.getWarranty)

router.post('/add', warrantyController.dbWarranty.addWarranty)

router.put('/update/:id', warrantyController.dbWarranty.updateItem)

router.delete('/delete/:id', warrantyController.dbWarranty.deleteItem)

module.exports = router;