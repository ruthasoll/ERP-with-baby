const express = require('express')
const router = express.Router()

const expenseController = require('../controller/expenseController')

router.get('/', expenseController.dbExpense.getAllExpense)

router.get('/:id', expenseController.dbExpense.getExpense)

router.post('/add', expenseController.dbExpense.addExpense)

router.put('/update/:id', expenseController.dbExpense.updateItem)

router.delete('/delete/:id', expenseController.dbExpense.deleteItem)

module.exports = router;