const express = require('express')
const router = express.Router()

const brandController = require('../controller/brandController')

router.get('/', brandController.dbBrand.getAllBrand)

router.get('/:id', brandController.dbBrand.getBrand)

router.post('/add', brandController.dbBrand.addBrand)

router.put('/update/:id', brandController.dbBrand.updateItem)

router.delete('/delete/:id', brandController.dbBrand.deleteItem)

module.exports = router;