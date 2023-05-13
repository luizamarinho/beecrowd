let input = '3\n6.5 4.3 6.2\n5.1 4.2 8.1\n8.0 9.0 10.0'
let lines = input.split('\n')

let quantidade = parseFloat(lines[0])
let indice = 1
let pesos = [2,3,5]

while(indice <= quantidade){
    
    let casos = lines[indice].split(' ')
    let indice2 = 0
    let resultados = [null, null, null]

    while(indice2 < 3){

        let valor = parseFloat(casos[indice2])
        let peso = pesos[indice2]
        
        resultados[indice2] = valor * peso

        indice2 = indice2 + 1
    }
    let resultado = (resultados[0] + resultados[1] + resultados[2]) / 10
    console.log(resultado.toFixed(1))

    indice = indice + 1
}