const app = require('express')()
const http = require('http').createServer(app)
const io = require('socket.io')(http)
app.get('/', function(req, res){
    res.sendFile(`${__dirname}/index.html`)
})
io.on('connection', function(socket){
    //console.log(`usuario ${socket.id} conectado`)
    socket.on('mensagem', function(data){
        console.log(data)
        socket.broadcast.emit('mensagem', `broadcast ${socket['id']}`)
    })
})
http.listen(80)