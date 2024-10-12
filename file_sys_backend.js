const express = require('express')
const fs = require('fs')
const path = require('path')
const app = express()
const port = 3000

app.use(express.json())

app.get('/files', (req, res) =>{
  fs.readdir('files', (err, files) => {
    if(err) throw err;
    res.json(files)
  })
})

app.get('/files/:fileName', (req, res) => {
  const filePath = path.join('files', req.params.fileName);
  fs.readFile(filePath, 'utf8', (err, data) => {
    if(err) throw err;
    res.json(data)
  })
})
app.listen(port);