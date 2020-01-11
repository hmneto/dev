var express = require('express');
var router = express.Router();
let exec = require('child_process').exec

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req.query)
  exec(`cd projetos && express ${req.query.ok} && cd ..`, function(err, stdout, stdin){
    console.log(stdout)
    res.send('done');
  })
});

router.get('/h', function(req, res, next) {
  console.log(req.query)
  exec(`cd projetos && dir && cd ..`, function(err, stdout, stdin){
    console.log(stdout.split('\n'))
    res.send('done');
  })
});

module.exports = router;