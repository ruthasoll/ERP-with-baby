const express = require('express')
const router = express.Router()

const salesController = require('../controller/salesController')

router.get('/', salesController.dbSales.getAllSales)

router.get('/:id', salesController.dbSales.getSales)

router.post('/add', salesController.dbSales.addSales)

router.put('/update/:id', salesController.dbSales.updateItem)

router.delete('/delete/:id', salesController.dbSales.deleteItem)

module.exports = router;