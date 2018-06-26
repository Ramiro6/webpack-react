const express = require('express')
const app = express()





const port = process.env.PORT || 9000

app.listen(port, () => {
  console.log(`Init new server on Port ${port}`)
})
