/////////////////////////
/*
let idades = [18, 50, 16, 17, 19, 22, 6, 70, 33, 37]
let adultos = idades.filter(checaIdade)
let somaIdades = idades.reduce(saida) // Reduz um array a um valor único
let somaIdadesAdultos = adultos.reduce(saida)

adultos.sort((a, b) => a - b).forEach(print) //sort crescente
adultos.sort((a, b) => b - a).forEach(print) //sort descresente
//adultos.forEach(print)

//console.log(somaIdades)
//console.log(somaIdadesAdultos)

function saida(somaIdades, i){
    return somaIdades + i;
}

function checaIdade(i){
return i>= 18
}

function print(i){
console.log(i)
}
*/
////////////////////////

/////////////////////////
/*
let count = 0

  //Não precisa criar duas funções únicas pra cada botão
function aumentaCount(){
    count += 1
    document.getElementById('label1').innerHTML = count
}

function diminuiCount(){
    count -= 1
    document.getElementById('label1').innerHTML = count
}


document.getElementById('botaoAumenta').onclick = function(){
    count++
    document.getElementById('label1').innerHTML = count
}
document.getElementById('botaoDiminui').onclick = function(){
    count--
    document.getElementById('label1').innerHTML = count
}
/*
//////////////////////////

/////////////////////////////
/*
const cumprimento = function(user){
    console.log(`Olá ${user}`)
}
*/

/*
function cumprimento(user){
    console.log(`Olá ${user}`)
}
*/

/*
const cumprimento = (user) => console.log(`Olá ${user}`)

cumprimento("João")
*/
//////////////////////////////

///////////////////////////////

let notas = [90, 60, 70, 100, 40]


//notas.sort(descresente)
notas.sort((x,y) => y - x)
notas.forEach(print)

function descresente(x, y){
    return y - x
}

function print(i){
    console.log(i)
}