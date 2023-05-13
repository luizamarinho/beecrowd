let input = '7\n-5\n6\n-3.4\n4.6\n12'
let lines = input.split('\n')

let positivos = 0

let entrada1 = parseFloat(lines[0])
let entrada2 = parseFloat(lines[1])
let entrada3 = parseFloat(lines[2])
let entrada4 = parseFloat(lines[3])
let entrada5 = parseFloat(lines[4])
let entrada6 = parseFloat(lines[5])

if(entrada1 > 0){
    positivos = positivos + 1
}

if(entrada2 > 0){
    positivos = positivos + 1
}

if(entrada3 > 0){
    positivos = positivos + 1
}

if(entrada4 > 0){
    positivos = positivos + 1
}

if(entrada5 > 0){
    positivos = positivos + 1
}

if(entrada6 > 0){
    positivos = positivos + 1
}

console.log(positivos + ' valores positivos')