let input = '2\n113\n45\n34565\n6'
let lines = input.split('\n')

let indice = 1
let maior = parseFloat(lines[0])
let posicao = 1

while(indice < 5){

    let atual = parseFloat(lines[indice])

    if(atual > maior){
        maior = atual
        posicao = indice + 1
    }
    
    indice = indice + 1
}

console.log(maior + '\n' + posicao)