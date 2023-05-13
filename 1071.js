let input = '6\n-5'
let lines = input.split('\n')

let a = parseFloat(lines[0])
let b = parseFloat(lines[1])

let inicial = null
let final = null

if(a < b){
    inicial = a
    final = b
}
else{
    inicial = b
    final = a
}

let numeros = inicial + 1
let soma = 0

while(numeros < final){

    if(numeros % 2 !== 0){
        
        soma = soma + numeros
        
    }
    numeros = numeros + 1
}

console.log(soma)