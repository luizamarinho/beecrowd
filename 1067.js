let input = '8'
let lines = input.split(' ')

let entrada = parseFloat(lines[0])
let numeros = 0

while(numeros <= entrada){
    if(numeros % 2 !== 0){
        console.log(numeros)
    }
    numeros += 1
}