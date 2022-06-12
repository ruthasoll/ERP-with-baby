const express = require('express')
const router = express.Router()

const damagedGoodController = require('../controller/damagedGoodController')

router.get('/', damagedGoodController.dbDamagedGood.getAllDamagedGood)

router.get('/:id', damagedGoodController.dbDamagedGood.getDamagedGood)

router.post('/add', damagedGoodController.dbDamagedGood.addDamagedGood)

router.put('/update/:id', damagedGoodController.dbDamagedGood.updateItem)

router.delete('/delete/:id', damagedGoodController.dbDamagedGood.deleteItem)

module.exports = router;