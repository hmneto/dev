const mysql      = require('mysql');
const connection = mysql.createPool({
  host     : process.env['hostdb1'],
  port     : 3306,
  user     : process.env['userdb1'],
  password : process.env['passdb1'],
  database : process.env['userdb1']
})

module.exports = connection
