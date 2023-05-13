let input = '7\n-5\n6\n-4\n12'
let lines = input.split('\n')

let indice = 0
let pares = 0

while(indice < 6){

    let entrada = parseFloat(lines[indice])

    if(entrada % 2 === 0){
        pares = pares + 1
    }

    indice = indice + 1
}

console.log(pares + ' valores pares')
