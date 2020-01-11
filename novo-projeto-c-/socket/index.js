const app = require('express')()
const server = require('http').createServer(app)
const io = require('socket.io')(server)

app.get('/', (req, res)=>res.sendFile(__dirname+'/index.html'))


io.on('connection', socket => console.log(socket.id))

server.listen(80, ()=>console.log('servidor rodando'))


