var mysql = require('mysql')

var db_config = {
  host: process.env.HOST_MYSQL,
  user: process.env.USER_MYSQL,
  password: process.env.PASSWORD_MYSQL,
  port: process.env.PORT_MYSQL
};

const connection = mysql.createPool(db_config)

connection.query('select 1 + 1', (err, rows) => console.log(rows))

async function abreBanco() {
  return connection
}

module.exports = abreBanco