const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
require("dotenv").config();


// mongoose.connect("mongodb://localhost:27017/upload", {
//     useNewUrlParser: true
// })
const app = express()

app.use(express.json())

app.use(express.urlencoded({
    extended: true
}))

app.use(morgan('dev'))


app.use(require('./routes'))

console.log(process.env.TESTE)
app.listen(3000)