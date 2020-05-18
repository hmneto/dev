const readLine = require('readline')
const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.on('line', (line)=>{
    console.log('line>>',line)
})

rl.on('SIGINT', ()=>{
    rl.pause()
})

rl.question('qual seu nome?', (nome)=>{
    console.log('prazer', nome)
})