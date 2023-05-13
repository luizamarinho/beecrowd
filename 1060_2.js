let input = '7\n-5\n6\n-3.4\n4.6\n12'
let lines = input.split('\n')

let positivos = 0

let indice = 0

while(indice <= 5){

    let entrada = parseFloat(lines[indice])
    if(entrada > 0){
        positivos = positivos + 1
    }

    indice = indice + 1
}

console.log(positivos + ' valores positivos')
