let input = '6\n-5'
let lines = input.split('\n')

let entrada = null
let saida = null

let valor1 = parseFloat(lines[0])
let valor2 = parseFloat(lines[1])

if(valor1 < valor2){
    entrada = valor1
    saida = valor2
}

else{
    entrada = valor2
    saida = valor1
}

let numeros = entrada + 1
// let impares = 0
let soma = 0

while(numeros < saida){

    if(numeros % 2 !== 0){

        // impares = impares + 1
        soma = soma + numeros

    }

    numeros = numeros + 1

}

console.log(soma)