let input = '4\n-5\n0\n3\n-4'
let lines = input.split('\n')

let entrada = parseFloat(lines[0])
let indice = 1

while(indice <= entrada){

    let numero = parseFloat(lines[indice])

    if(numero === 0){
        console.log('NULL')
    }
    else if(numero % 2 === 0 && numero > 0){
        console.log('EVEN POSITIVE')
    }
    else if(numero % 2 === 0 && numero < 0){
        console.log('EVEN NEGATIVE')
    }
    else if(numero % 2 !== 0 && numero > 0){
        console.log('ODD POSITIVE')
    }
    else if(numero % 2 !== 0 && numero < 0){
        console.log('ODD NEGATIVE')
    }
    
    indice = indice + 1
}
