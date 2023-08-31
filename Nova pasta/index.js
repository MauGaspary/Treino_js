let nomeCompleto = "Ricardo Gaspary"
let nome
let sobrenome

/*
console.log(user.length)
console.log(user.charAt(5))
console.log(user.indexOf("r"))
console.log(user.lastIndexOf("M"))

user = user.trim()
user = user.toUpperCase()
*/
//console.log(user)

//user = user.replaceAll("R", "m")

nome = nomeCompleto.slice(0, nomeCompleto.indexOf(" "))
sobrenome = nomeCompleto.slice(nomeCompleto.indexOf(" ") + 1)

console.log(nome)
console.log(sobrenome)