const mysql      = require('mysql');
const connection = mysql.createPool({
  host     : process.env.hostdb1,
  port     : 3306,
  user     : "teste33",
  password : "TESTE123@",
  database : "teste33"
})

module.exports = connection
