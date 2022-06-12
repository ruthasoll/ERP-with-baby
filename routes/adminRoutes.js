const express = require('express')
const router = express.Router()

const adminController = require('../controller/adminController')

router.get('/', adminController.dbAdmin.getAllAdmin)

router.get('/:id', adminController.dbAdmin.getAdmin)

router.post('/add', adminController.dbAdmin.addAdmin)

router.put('/update/:id', adminController.dbAdmin.updateItem)

router.delete('/delete/:id', adminController.dbAdmin.deleteItem)

module.exports = router;