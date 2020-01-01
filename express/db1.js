const mysql      = require('mysql');
const connection = mysql.createPool({
  host     : "den1.mysql1.gear.host",
  port     : 3306,
  user     : "teste33",
  password : "TESTE123@",
  database : "teste33"
})

module.exports = connection
