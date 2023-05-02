const express = require('express')
const app = express()
var cors = require('cors')
const port = 5000

const chef_data = require('./Data/data.json')
app.use(cors())

app.get('/', (req, res) => {
  res.send('Chef Recipe Hunter Server is Running...')
})

app.get('/chef', (req, res) => {
  res.send(chef_data);
})
app.get("/chef/:id", (req, res) => {
  const id = req.params.id;
  const selectedChef = chef_data.find((n) => n.id == id);
  res.send(selectedChef);
})

app.listen(port, () => {
  console.log(`Chef Recipe Hunter Server Running on PORT:  ${port}`)
})