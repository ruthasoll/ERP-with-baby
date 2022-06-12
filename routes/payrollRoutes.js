const express = require('express')
const router = express.Router()

const payrollController = require('../controller/payrollController')

router.get('/', payrollController.dbPayroll.getAllPayroll)

router.get('/:id', payrollController.dbPayroll.getPayroll)

router.post('/add', payrollController.dbPayroll.addPayroll)

router.put('/update/:id', payrollController.dbPayroll.updateItem)

router.delete('/delete/:id', payrollController.dbPayroll.deleteItem)

module.exports = router;