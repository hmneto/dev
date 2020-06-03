var express = require('express');
var router = express.Router();

const Axios = require('axios')

const url = 'http://localhost:3000'
// const url = "http://192.168.99.100"

const api = Axios.create({
    baseURL:url
})




/* GET home page. */
router.get('/', async function(req, res, next) {
  // res.render('index', { title: 'Express' });
  api.get('/a/').then(data=>console.log(data.data))
  res.send('indexl')
});

module.exports = router;
