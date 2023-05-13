let input = '3\n3 -2\n-8 0\n0 8'
let lines = input.split('\n')

let indice = 1

while(indice < lines.length){

    let casos = lines[indice].split(' ')

    let numerador = parseFloat(casos[0])
    let denominador = parseFloat(casos[1]) 

    if(denominador === 0){
        console.log('divisao impossivel')
    }
    else{
        let resultado = numerador/denominador
        if(numerador === 0){
            console.log('0.0')
        }
        else {
            console.log(resultado.toFixed(1))
        }
    }

    indice += 1
}