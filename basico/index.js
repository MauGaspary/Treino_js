/*
//exemplos de variáveis, declaração e paragrafos(p1 e p2)

var nome = "Maurício" //--> String
let idade = 10 //--> Int
var aluno = true //--> Boolean
idade = idade + 12
const PI = 3.14159 //--> Maiúsculo em constantes é apenas por boa prática

console.log("Olá, ",nome)
console.log("Você tem ",idade, " anos de idade")
console.log(aluno)

//pegar os paragrafros p1 e p2 do html
document.getElementById("p1").innerHTML = nome
document.getElementById("p2").innerHTML = "Idade: " + idade
*/

/*
//exemplos de user input

//facil: janela
var username = window.prompt("Qual é seu nome?")
console.log(username)
console.log(typeof username) //--> String
document.getElementById("p3").innerHTML = username + 1
*/

/*
//dificil: botao
document.getElementById("b1").onclick = function(){

    username = document.getElementById("t1").value
    console.log(username)
    document.getElementById("l1").innerHTML = "Olá, " + username
}
*/

/*
var x
var y
var z

document.getElementById("botaoRodar").onclick = function(){

    x = Math.floor(Math.random() * 6) + 1
    y = Math.floor(Math.random() * 6) + 1
    z = Math.floor(Math.random() * 6) + 1

    document.getElementById("xLabel").innerHTML = x
    document.getElementById("yLabel").innerHTML = y
    document.getElementById("zLabel").innerHTML = z
}
*/

/*
document.getElementById("meuBotao").onclick = function(){

    const minhaCheckBox = document.getElementById("minhaCheckBox")
    const visa = document.getElementById("visa")
    const master = document.getElementById("master")
    const paypal = document.getElementById("paypal")


    if(minhaCheckBox.checked){
        console.log("Você está inscrito!")
    }
    else{
        console.log("Você não está inscrito!")
    }


    if(visa.checked){
        console.log('Você está pagando com Visa')
    }
    else if(master.checked){
        console.log('Você está pagando com MasterCard')
    }
    else if(paypal.checked){
        console.log('Você está pagando com PayPal')
    }
    else{
        console.log('Selecione um cartão')
    }
}
*/

/*
var nota = 'F'

switch(nota){
    case "A":
        console.log(`Parabéns, você foi aprovado com nota ${nota}`)
    case "F":
        console.log(`Infelizmente, você não foi aprovado com nota ${nota}`)
}
*/

/*
const logaNota = notaNumber => {
    console.log(`Sua nota foi ${notaNumber}`)
}
*/


let adulto = verIdade(20)
console.log(adulto)

function verIdade(idade){
    return idade >= 18 ? true : false
}
