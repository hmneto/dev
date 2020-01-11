import * as shelljs from 'shelljs';
interface Person {
    firstname: string
    lastname: string
}
function greeter(person : Person) : string {
    return "Hello, " + person.firstname + " " + person.lastname
}

var user = {firstname: "Honorio", casa: "cposa a mais no script", lastname: "neto"}

console.log(greeter(user))

let contents = shelljs.cat('arq.txt')

shelljs.cp('arq.txt', 'arq2.txt')
console.log(contents.toString())