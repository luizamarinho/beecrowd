let input = '-5\n0\n-3\n-4\n12'
let lines = input.split('\n')

let indice = 0 
let pares = 0
let impares = 0
let positivos = 0
let negativos = 0


while(indice < 5){

    let entrada = parseFloat(lines[indice])

    if(entrada % 2 === 0){
        pares += 1

    }

    if(entrada % 2 !== 0){
        impares += 1 

    }

    if(entrada > 0){
        positivos += 1 

    }

    if(entrada < 0){
        negativos += 1 

    }

    indice += 1 

}


console.log(pares + ' valor(es) par(es)')
console.log(impares + ' valor(es) impar(es)')
console.log(positivos + ' valor(es) positivo(s)')
console.log(negativos + ' valor(es) negativo(s)')