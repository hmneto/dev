let promisify = require('promisify-node')
let fs = require('fs')
let readFile = promisify(fs.readFile)

readFile('index.js').then(data=> console.log(data.toString()))