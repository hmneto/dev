let automerge = require('automerge')

let obj = automerge.init()
obj = automerge.change(obj, 'add key', function(doc){
    doc.a = 1
})

let obj2 = automerge.init()
obj2 = automerge.change(obj2, 'passando valor', function(doc){
    doc.b = 2
})
obj2 = automerge.merge(obj2, obj)

//console.log(obj, obj2)


automerge.getHistory(obj).map(function(atual){
    //console.log(atual, atual.change, atual.snapshot)
})

const changes = automerge.getChanges(obj, obj2)
const changeStr = JSON.stringify(changes)
//console.log(changes)

// em outra maquina

const rChanges = JSON.parse(changeStr)
objn = automerge.applyChanges(obj, rChanges)

// console.log(objn)