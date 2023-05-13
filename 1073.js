let input = '6'
let lines = input.split(' ')

let entrada = parseFloat(lines[0])
let valor = 1
let total = 0

while(valor <= entrada){

    if(valor % 2 === 0){
        total = valor * valor
        console.log(valor + '^2 = ' + total)
    }
    valor = valor + 1
}