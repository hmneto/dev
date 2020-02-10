const addData = require('./addData.js')
const getData = require('./getData.js')

var bodyParser = require("body-parser")
var express = require('express')
var cors = require('cors')
var app = express()
var porta = 8080


app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/add', function (req, res) {
  console.log(req.body)
  addData(req.body.username)
  res.end()
})

app.get('/get', async function (req, res) {
  const t = await getData() 
  console.log(t)
  res.send(t)
})

app.listen(porta, function () {
  console.log('Example app listening on port ' + porta);
})
console.log(process.env["hostdb1"])
console.log(process.env["userdb1"])
console.log(process.env["passdb1"])

console.log(process.env["hostdb2"])
console.log(process.env["userdb2"])
console.log(process.env["passdb2"])

console.log(process.env["hostdb3"])
console.log(process.env["userdb3"])
console.log(process.env["passdb3"])
