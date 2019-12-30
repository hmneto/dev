const connection = require('./db1.js')
async function exec(){
  f = new Promise(async function(resolve, response){
    connection.query('SELECT * FROM products', (err,p)=>{
      resolve(p) 
    })
  })
  aa = null
  await f.then(data=>aa = data)
 return await aa
}
module.exports = exec
