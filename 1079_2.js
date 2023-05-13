let input = '3\n6.5 4.3 6.2\n5.1 4.2 8.1\n8.0 9.0 10.0'
let lines = input.split('\n')

let quantidade = parseFloat(lines[0])

let indice = 1

while(indice <= quantidade){
    
    let casos = lines[indice].split(' ')
    let indice2 = 0
    let resultado1 = null
    let resultado2 = null
    let resultado3 = null

    while(indice2 < 3){

        let valor = parseFloat(casos[indice2])

        if(indice2 === 0){
            resultado1 = valor * 2
        }
        else if(indice2 === 1){
            resultado2 = valor * 3
        }
        else{
            resultado3 = valor * 5
        }

        indice2 = indice2 + 1

    }

    let resultado = (resultado1 + resultado2 + resultado3) / 10

    console.log(resultado.toFixed(1))

    indice = indice + 1
}