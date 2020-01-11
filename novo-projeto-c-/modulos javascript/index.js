// let poli = require('./polimorfismo')
let escreverDados = require('./escreverDados')
let lerDados = require('./lerDados')

// console.log(poli.get())

// let filho = Object.create(poli)

// filho.val = 90

// console.log(filho.get.call(poli))

// let neto = Object.create(filho)


// console.log(neto.get())

// filho.val = 91

// console.log(neto.get())


let obj = {
    nome:'pedro',
    idade: {
        antes: true
    }
}

escreverDados('novo.txt',JSON.stringify(obj))

lerDados('index.js').then(function(data){
    console.log(data) 
})


