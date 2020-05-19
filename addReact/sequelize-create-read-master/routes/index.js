var express = require('express');
var router = express.Router();


const Sequelize = require('sequelize')

var sequelize = new Sequelize('teste', 'devuser', 'devpass',{
  host: 'http://192.168.99.100',
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

video.create({titulo: 'novo registro', descricao: 'sim', numero: 2}).then(function(task){
  task.save()
})

sequelize.sync()

/* GET home page. */
router.get('/', function(req, res, next) {
  video.findAll().then(function(objs){
    //console.log(objs)
    res.render('index', { title: 'Express', lista: objs });
  })
  
});

module.exports = router;
