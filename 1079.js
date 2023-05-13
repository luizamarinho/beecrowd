let input = '3\n6.5 4.3 6.2\n5.1 4.2 8.1\n8.0 9.0 10.0'
let lines = input.split('\n')

let quantidade = parseFloat(lines[0])

let indice = 1

while(indice <= quantidade){
    
    let casos = lines[indice].split(' ')

    let valor1 = parseFloat(casos[0])
    let valor2 = parseFloat(casos[1])
    let valor3 = parseFloat(casos[2])

    let resultado1 = valor1 * 2
    let resultado2 = valor2 * 3
    let resultado3 = valor3 * 5

    let resultado = (resultado1 + resultado2 + resultado3) / 10

    console.log(resultado.toFixed(1))

    indice = indice + 1
}
