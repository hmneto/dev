const router = require('express').Router()
const multer = require('multer')
const multerConfig = require('./config/multer')
router.get('/', function (req, res) {
    return res.json({world:'hello'})
})

router.post('/posts', multer(multerConfig).single('file'), function(req, res){
    console.log(req.file)
    return res.json({world:'hello'})
})
module.exports = router 
