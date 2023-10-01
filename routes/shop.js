const path = require('path')
const express = require('express')

const router = express.Router()

router.get('/add-product', (req, res) => {
  return res.sendFile(path.join(__dirname, '../views', 'shop.html'))
})

module.exports = router
