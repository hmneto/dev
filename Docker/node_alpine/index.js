const jsome = require('jsome')
jsome.level.show = true
jsome.level.char = '>>'
jsome.level.color = 'white'

jsome({
    teste:4
})

const json = '{"primeiro": 1, "segundo":2}'

jsome.parse(json)
