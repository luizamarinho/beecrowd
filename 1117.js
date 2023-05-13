let input = '-3.5\n3.5\n11.0\n10.0'
let lines = input.split('\n')

let indice = 0
let validadas = 0
let soma = 0

while(validadas < 2){

    let nota = parseFloat(lines[indice])

    if(nota >= 0 && nota <= 10){

        validadas = validadas + 1
        soma = soma + nota

    }
    else{
        console.log('nota invalida')
    }


    indice += 1
}

let media = soma / 2
console.log('media = ' + media.toFixed(2))

