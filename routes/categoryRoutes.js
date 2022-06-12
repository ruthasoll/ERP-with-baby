const express = require('express')
const router = express.Router()

const categoryController = require('../controller/categoryController')

router.get('/', categoryController.dbCategory.getAllCategory)

router.get('/:id', categoryController.dbCategory.getCategory)

router.post('/add', categoryController.dbCategory.addCategory)

router.put('/update/:id', categoryController.dbCategory.updateItem)

router.delete('/delete/:id', categoryController.dbCategory.deleteItem)

module.exports = router;