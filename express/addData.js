const connection = require('./db1.js')


        function exec(dados){
          connection.getConnection((err, connection) => {
                      if(err) console.log(err);
                      else
                      connection.query(`insert into products (nome) values ('${dados}')`, (err, products) => {
                          connection.release();
                          if(err) console.log(err);
                          //else
                          //console.log(products);
                      });
                  });
}

module.exports = exec
