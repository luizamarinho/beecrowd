let input = '7\n-5\n6\n-4\n12'
let lines = input.split('\n')

let pares = 0
let indice = 0 

while(indice < 5){

    let entrada = parseFloat(lines[indice])

    if(entrada % 2 === 0){
        pares += 1 

    }

    indice += 1 

}

console.log(pares + ' valores pares')