let input = '400.00'
let lines = input.split('\n')

let inicial = parseFloat(lines[0])
let reajuste = null
let porcento = null

if(inicial <= 400.00){
    reajuste = inicial * 0.15
    porcento = 15
    
}

else if(inicial <= 800.00){
    reajuste = inicial * 0.12
    porcento = 12

}

else if(inicial <= 1200.00){
    reajuste = inicial * 0.10
    porcento = 10
}

else if(inicial <= 2000.00){
    reajuste = inicial * 0.07
    porcento = 7
}

else{
    reajuste = inicial * 0.04
    porcento = 4
}

console.log('Novo salario: ' + (reajuste + inicial).toFixed(2))
console.log('Reajuste ganho: ' + reajuste.toFixed(2))
console.log('Em percentual: ' + porcento + ' %')