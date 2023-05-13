let input = '8'
let lines = input.split('\n')

let entrada = parseFloat(lines[0])
let impares = 0
let contador = entrada

while(impares < 6){

    if(contador % 2 !== 0){
        console.log(contador)
        impares = impares + 1
    }

    contador = contador + 1
}
