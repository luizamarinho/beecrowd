let input = '4\n14\n123\n10\n-25'
let lines = input.split('\n')

let indice = 1
let dentro = 0
let fora = 0
let quantidade = parseFloat(lines[0])

while(indice <= quantidade){

    let numero = parseFloat(lines[indice]) 

    if(numero >= 10 && numero <= 20){
        dentro = dentro + 1
    }
    else{
        fora = fora + 1
    }

    indice = indice + 1

}
console.log(dentro + ' in')
console.log(fora + ' out')