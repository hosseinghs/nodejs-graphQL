const path = require('path')
const express = require('express')

const shopRoutes = require('./routes/shop')
const adminRoutes = require('./routes/admin')

const app = express()

app.use(express.static(path.join(__dirname, 'public')))

app.use(express.json())

app.use('/shop', shopRoutes)
app.use('/admin', adminRoutes)

app.use((_, res) => {
  return res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))
})

app.listen(3000)
