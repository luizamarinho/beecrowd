let input = '8'
// let lines = input.split('\n')

let entrada = parseFloat(input) 
// ou (lines[0])

let indice = 1
let impares = 0

while(numero <= entrada){

    if(numero % 2 !== 0){
        console.log(numero)
        impares = impares + 1
    }

    numero = numero + 1
}