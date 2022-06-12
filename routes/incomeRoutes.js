const express = require('express')
const router = express.Router()

const incomeController = require('../controller/incomeController')

router.get('/', incomeController.dbIncome.getAllIncome)

router.get('/:id', incomeController.dbIncome.getIncome)

router.post('/add', incomeController.dbIncome.addIncome)

router.put('/update/:id', incomeController.dbIncome.updateItem)

router.delete('/delete/:id', incomeController.dbIncome.deleteItem)

module.exports = router;