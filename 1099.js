let input = '7\n4 5\n13 10\n6 4\n3 3\n3 5\n3 4\n3 8'
let lines = input.split('\n')

let quantidade = parseFloat(lines[0])
let indice = 1


while(indice <= quantidade){

    let casos = lines[indice].split(' ')

    let caso1 = parseFloat(casos[0])
    let caso2 = parseFloat(casos[1])

    let maior = null
    let menor = null
    
    if(caso1 > caso2){
        maior = caso1
        menor = caso2
    }
    else{
        maior = caso2
        menor = caso1
    }

    let numero = menor + 1
    let soma = 0

    while(numero < maior){

        if(numero % 2 !== 0){

            soma = soma + numero
            
        }
        
        numero = numero + 1
    }

    console.log(soma)

    indice = indice + 1
}


