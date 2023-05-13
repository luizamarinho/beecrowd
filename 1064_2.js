let input = '7\n-5\n6\n-3.4\n4.6\n12'
let lines = input.split('\n')

let entrada = null
let indice = 0
let positivos = 0
let soma = 0

while(indice < 6){

    entrada = parseFloat(lines[indice])

    if(entrada >= 0){
        soma = soma + entrada
        positivos = positivos + 1
    }

    indice = indice + 1
}

let media = soma / positivos

console.log(positivos + ' valores positivos')
console.log(media.toFixed(1))