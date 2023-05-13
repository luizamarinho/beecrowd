let input = '3\n10\n20\n-3'
let lines = input.split('\n')

let quantidade = parseFloat(lines[0])
let indice = 0
let dentro = 0
let fora = 0

while(indice < quantidade){

    let numero = parseFloat(lines[indice + 1])

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