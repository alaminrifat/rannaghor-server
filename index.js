const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => {
  res.send('Chef Recipe Hunter Server is Running')
})

app.listen(port, () => {
  console.log(`Chef Recipe Hunter Server Running on PORT:  ${port}`)
})