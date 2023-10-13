/*
let frutas = ['banana', 'abacaxi', 'laranja']
console.log(frutas)

frutas[1] = 'morango'
frutas.push('limão') //adiciona um elemento no final
console.log(frutas) 

frutas.pop()        //remove o ultimo elemento
console.log(frutas)

frutas.unshift('manga') //adiciona no inicio
console.log(frutas)

frutas.shift()      //remove o elemento do inicio
console.log(frutas)
*/


/*
let preços = [5, 10, 15, 20, 25]
console.log(preços)
preços.sort((a , b)=> a -b )   //ordena de forma crescente (menor para maior)
for(let i = preços.length - 1; i>=0; i-=1){
    console.log(preços[i])
}
console.log("")

for(let preço of preços){
    console.log(preço)
}

let frutas = ['banana', 'abacaxi', 'laranja']

frutas = frutas.sort().reverse() //sort alfabetica, e em seguida reversa

console.log(frutas)
*/




/*
let turma1 = ['Bob Esponja', 'Patrick', 'Sandy']
let turma2 = ['Lula Molusco', 'Mr. Siriguejo', 'Plankton']

//turma1.push(turma2)
//console.log(turma1)

turma1.push(...turma2) // ... significa desagrupar os elementos, "spread operator"
console.log(turma1)    // Experimenta tirar o ...
*/




/*
let a = 1
let b = 1
let c = 1
let d = 1
let e = 1
let f = 1

console.log(soma(a,b,c,d,e,f))

function soma(x,y, ...numeros){
    let total = 0
    total += x + y
    for(let numero of numeros){
        total += numero
    }
    return total
}
*/





/*
soma(2,3, printDOM)

function soma(x,y, display){
    let resultado = x + y
    display(resultado)
}

function printConsole(saida){
    console.log(saida)
}

function printDOM(saida){
    document.getElementById("label").innerHTML = saida
}
*/





/*
let bundoes =['chimas', 'brauner', 'lua']
bundoes.forEach(maiuscula)
bundoes.forEach(print)
*/
/*
function maiuscula(elemento, index, array){
    array[index] = elemento[0].toUpperCase() + elemento.substring(1)
}
*/



/*
let numeros = [1,2,3,4]
let quadrados = numeros.map(square)
let cubos = numeros.map(cube)

quadrados.forEach(print)
cubos.forEach(print)

function print(elemento){
    console.log(elemento)
}

function square(elemento){
    return Math.pow(elemento, 2)
}

function cube(elemento){
    return Math.pow(elemento, 3)
}
*/