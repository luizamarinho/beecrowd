let input = '-3.5\n3.5\n11.0\n10.0\n4\n1\n8.0\n9.0\n2'
let lines = input.split('\n')

let indice = 0
let validas = 0
let soma = 0
 

    while(validas < 3){

        let nota = parseFloat(lines[indice])

        if(nota >= 0 && nota <= 10){
            validas += 1
            soma = soma + nota

        }
        else{
            console.log('nota invalida')
        }


        if(validas === 2){
            let media = soma / 2
            console.log('media = ' + media)
            console.log('novo calculo (1-sim 2-nao)')
            
            if(nota !== 1 || nota !== 2){

                console.log('novo calculo (1-sim 2-nao)')
                validas = 0

            }
        }
        
        


        indice += 1

    }