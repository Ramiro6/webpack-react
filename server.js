const path = require('path')
const express = require('express')
const app = express()


const port = process.env.PORT || 9000

app.use(express.static(path.join(__dirname, 'dist')))

app.listen(port, () => {
  console.log(`Init new server on Port ${port}`)
})
