
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.get('/assets/:file', (req, res) => {
    res.sendFile(__dirname + `/assets/${req.params.file}`);
}); //gets files

app.get('/style/:file', (req, res) => {
  res.sendFile(__dirname + `/style/${req.params.file}`);
}); //gets files

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})