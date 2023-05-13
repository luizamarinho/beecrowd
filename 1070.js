let input = '8'
let lines = input.split(' ')

let entrada = parseFloat(lines[0])

let impares = 0
let numeros = entrada

while(impares < 6){

    if(numeros % 2 !== 0){
        console.log(numeros)
        impares += 1
    }
    numeros += 1
    
}