let input = '-5\n0\n-3\n-4\n12'
let lines = input.split('\n')

let indice = 0
let par = 0
let positivo = 0
let impar = 0
let negativo = 0


while(indice < 5){

    let entrada = parseFloat(lines[indice])

    if(entrada % 2 === 0){
        par = par + 1
    }

    if(entrada % 2 !== 0){
        impar = impar + 1
    } 

    if(entrada > 0){
        positivo = positivo + 1
    }

    if(entrada < 0){
        negativo = negativo + 1
    }

    indice = indice + 1
}

console.log(par + ' valor(es) par(es)')
console.log(impar + ' valor(es) impar(es)')
console.log(positivo + ' valor(es) positivo(s)')
console.log(negativo + ' valor(es) negativo(s)')