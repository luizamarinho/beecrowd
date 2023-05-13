let input = '13'

let entrada = parseFloat(input)
let numero = 1

while(numero < 10000){

    if(numero % entrada === 2){
        console.log(numero)
    }

    numero = numero + 1
}