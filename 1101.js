let input = '5 2\n6 3\n5 0'
let lines = input.split('\n')

let encontrou = false
let indice = 0

while(encontrou === false){

    let conjunto = lines[indice].split(' ')

    let valor1 = parseFloat(conjunto[0])
    let valor2 = parseFloat(conjunto[1])


    if(valor1 === 0 || valor2 === 0 || valor1 < 0 || valor2 < 0){
        encontrou = true
    }
    else{

        let maior = null
        let menor = null
        
        if(valor1 > valor2){
            maior = valor1
            menor = valor2
        }
        else{
            maior = valor2
            menor = valor1
        }

        let numero = menor
        let soma = 0
        let texto = ''

        while(numero <= maior){

            texto = texto + numero + ' '

            soma = soma + numero

            numero = numero + 1

        }

        console.log(texto + 'Sum=' + soma)

    }

    indice = indice + 1

}


