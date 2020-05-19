var express = require('express');
var router = express.Router();


const Sequelize = require('sequelize')

var sequelize = new Sequelize('controlestoque', 'devuser', 'devpass',{
  host: 'dbforcontroleestoque',
  dialect: 'mysql',

  pool:{
    max: 5,
    min: 0,
    idle: 10000
  },
  //SQLITe ONLY
  //storage: 'path/to//database.sqlite'
})

var video = sequelize.define('video', {
  titulo: Sequelize.STRING,
  descricao: Sequelize.TEXT,
  numero: Sequelize.INTEGER
})


sequelize.sync()

/* GET home page. */
router.get('/', function(req, res, next) {
  video.findAll().then(function(objs){
    console.log(objs)
    res.render('index', { title: 'Express', lista: objs });
  })
  
});

router.get('/add', function(req, res, next) {
  video.findAll().then(function(objs){
    video.create({titulo: 'velho registro', descricao: 'sim', numero: 2}).then(function(task){
      task.save()
    })
    res.send('ok')    
  })
  
});

module.exports = router;
