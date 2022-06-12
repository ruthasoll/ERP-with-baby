const express = require('express')
const router = express.Router()

const assetController = require('../controller/assetController')

router.get('/', assetController.dbAsset.getAllAsset)

router.get('/:id', assetController.dbAsset.getAsset)

router.post('/add', assetController.dbAsset.addAsset)

router.put('/update/:id', assetController.dbAsset.updateItem)

router.delete('/delete/:id', assetController.dbAsset.deleteItem)

module.exports = router;